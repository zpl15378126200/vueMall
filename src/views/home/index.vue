<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <home-feature-view :recommends="recommends"></home-feature-view>
    <tab-control :titles="['流行','新款','精选']" class="tab-control"></tab-control>
    <goods-list :goods="goods['pop'].list"></goods-list>
  </div>
  
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import TabControl from '@/components/content/tabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'

import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecommendView from './childComps/HomeRecommendView.vue'
import HomeFeatureView from './childComps/HomeFeatureView.vue'

import {getHomeMultidata , getHomeGoods} from '../../network/home'
export default {
  components: { 
    NavBar,
    TabControl,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    GoodsList
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
      }
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
  methods: {
    /* 事件监听相关方法 */
    

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
      })
    }
  }
}

</script>

<style>
  #home {
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
</style>