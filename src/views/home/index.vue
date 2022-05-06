<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-feature-view :recommends="recommends"></home-feature-view>
      <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabclick="tabclick"></tab-control>
      <goods-list :goods="showGoods" ></goods-list>
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
      isShowBackTop:false
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
    },
    backClick() {
      this.$refs.scroll.scrollTo(0,0)
    },
    contentScroll(position) {
      //console.log(position);
      if(position.y < -1000) {
        this.isShowBackTop = true
      } else {
        this.isShowBackTop = false
      }
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.scroll.refreah()
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
      getHomeGoods(type, page).then(res => {
        //console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.finishPullUp()
      })
    }
  }
}

</script>

<style scoped>
  #home {
    position: relative;
    height: 100vh;
    padding-top: 44px;
  } 
  .home-nav {
    position: fixed;
    background-color: var(--color-tint);
    color: white;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    top: 44px;
  }
  .content {
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
  }
</style>