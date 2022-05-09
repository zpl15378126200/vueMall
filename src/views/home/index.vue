<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>
    <tab-control :titles="['流行','新款','精选']" @tabclick="tabclick" ref="tabControl1" class="tab-control" v-show="isTabFixed"></tab-control>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners" @SwiperImageLoad="SwiperImageLoad"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-feature-view :recommends="recommends"></home-feature-view>
      <tab-control :titles="['流行','新款','精选']" @tabclick="tabclick" ref="tabControl2"></tab-control>
      <goods-list :goods="showGoods" ></goods-list>
      <p>正在加载更多...</p>
    </scroll>
    <!-- 监听组件的点击事件必须加上修饰符native  监听组件的原生事件-->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
  
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import TabControl from '@/components/content/tabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'

import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecommendView from './childComps/HomeRecommendView.vue'
import HomeFeatureView from './childComps/HomeFeatureView.vue'
import BackTop from '@/components/content/backTop/BackTops.vue'

import {getHomeMultidata , getHomeGoods} from '../../network/home'
import { debounce } from '@/common/utils.js'
import Scroll from '../../components/common/scroll/Scroll.vue'
export default {
  components: { 
    NavBar,
    TabControl,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    GoodsList,
    Scroll,
    BackTop
  },
  name:"home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods:{
        'pop':{page:0 ,list:[]},
        'new':{page:0 ,list:[]},
        'sell':{page:0 ,list:[]},
      },
      currentType:'pop',//默认类型为pop
      isShowBackTop:false,
      tabOffsetTop:0,
      isTabFixed:false,
      saveY:0
    }
  },
  created() {
    //1-请求多个数据
    this.getHomeMultidata()

    //2-请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    
  
  },
  mounted () {
    //1-监听item中图片加载完成(GoodListItem组件传过来)
    const refresh = debounce(this.$refs.scroll.refresh,500)
    this.$bus.$on('itemImageLoad',() => {
      //this.$refs.scroll.refresh()
      refresh()
    })

    
  },
  // destroyed() {
  //   console.log('首页destroyed');
  // },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)//(x轴,y轴,时间)
    this.$refs.scroll.refresh()
  },
  deactivated () {
    this.saveY = this.$refs.scroll.getScrollY()
    console.log(this.saveY);
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }  
  },
  methods: {
    /* 事件监听相关方法 */
    tabclick(index) {
      this.currentType = Object.keys(this.goods)[index]
      //Object.keys()处理对象,返回可枚举的属性数组
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
      //让被隐藏的tabControl和scroll中的tabControl的被选中项同步
    },
    backClick() {
      this.$refs.scroll.scrollTo(0,0)
    },
    contentScroll(position) {
      //console.log(position);
      //1-判断BackTop是否显示
      this.isShowBackTop  = (-position.y) > 1000

      //2-决定tabControl是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    SwiperImageLoad() {
      //获取tabControl的offsetTop
      //所有组件都有一个属性$el,用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },

    /* 网络请求相关方法 */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
      //this.result = res;//将res数据存储起来
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {//箭头函数内的this会向上查找
        //console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        //完成上拉加载更多
        this.$refs.scroll.finishPullUp()
      })
    },
    
  }
}

</script>

<style scoped>
  #home {
    position: relative;
    height: 100vh;
  } 
  .home-nav {
    /* 首页导航栏不需要固定定位的原因:导航栏没有放到scroll组件中,不会随着滚动而滚动,所以不需要固定定位 */
    /* position: fixed; */
    background-color: var(--color-tint);
    color: white;
    /* left: 0;
    top: 0;
    right: 0; */
    z-index: 9;
  }
  .content {
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
  }
  .content p {
    text-align: center;
  }
  .tab-control {
    position: relative;
    z-index: 9;
  }
</style>