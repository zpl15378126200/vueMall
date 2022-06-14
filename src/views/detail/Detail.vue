<template>
  <div id="Detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" @scroll="contenScroll" :probe-type="3"><!-- scroll必须要给固定高度 -->
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods" ></detail-base-info><!-- 一定要记住父传子的时候动态绑定数据传过去,经常忘记 -->
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad"></detail-goods-info>
      <detail-params :detail-params="DetailParams" ref="params"></detail-params>
      <deatail-comment :comment="comment" ref="comment"></deatail-comment>
      <goods-list :goods="recommend" ref="recommend"></goods-list><!-- 详情推荐栏 -->
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'

import { getDetail, Goods, Shop, Params, getRecommend } from '@/network/detail.js'
import {itemListenerMixin} from '@/common/mixin'
import {debounce} from '@/common/utils'

import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParams from './childComps/DetailParams.vue'
import DeatailComment from './childComps/DeatailComment.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'

export default {
  components: {
    DetailNavBar, 
    DetailSwiper,
    DetailBaseInfo, 
    DetailShopInfo, 
    Scroll, 
    DetailGoodsInfo, 
    DetailParams, 
    DeatailComment,
    GoodsList,
    DetailBottomBar,
  },
  name:'Detail',
  mixins: [itemListenerMixin],
  data() {
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      DetailParams:{},
      comment:[],
      recommend:[],
      themeTopsY:[],
      getThemeTopY: null,
      currentIndex:0,
    }
  },
  methods: {
    imgLoad() {
      //对scroll进行刷新,重新计算可滑动高度,避免图片还没加载完,可滑动高度就确定了,可滑动高度减少
      //需要先ref到scroll中
      this.$refs.scroll.refresh()
      this.getThemeTopY()
    },
    titleClick(index) {
      //点击商品详情导航栏,跳转到相应高度
      if(index === 2 && this.themeTopsY[index] === undefined ) {
        this.$refs.scroll.scrollTo(0,-this.themeTopsY[index]-50,1000)
      } else {
        this.$refs.scroll.scrollTo(0,-this.themeTopsY[index],1000)
      }
    },
    contenScroll(position) {
      //1-获取Y值
      const positonY = -position.y
      //positonY的值与theme中的值对比
      //for in遍历对象返回key值,数组返回下标
      /* for(let i in this.themeTopsY) {//这里的数字i是str类型
        if(positonY >this.themeTopsY[i] && positonY < this.themeTopsY[i+1]) {
          console.log(i);
        }       
      } */
      let length = this.themeTopsY.length
      for(let i = 0 ; i < length ; i++) {
        if(this.currentIndex !== i && ((i < length -1 && positonY >= this.themeTopsY[i] && positonY < this.themeTopsY[i+1]) || (i === length -1 && positonY >= this.themeTopsY[i]))) {
          this.currentIndex = i;
          //console.log(this.currentIndex);
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
    },
    addToCart() {
      //1-获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      //2-将商品添加到购物车(先将商品放入vuex)
      //this.$store.commit('addCart',product) commit是发送给mutations
      this.$store.dispatch('addCart',product).then(res => {//dispatch是发送给actions dispatch会返回一个promise
        //3-添加到购物车成功
        // this.show = true;
        // this.message = res;
        // setTimeout(() => {
        //   this.show = false
        //   this.message = ''
        // },1500)
        this.$toast.show(res,2000)
        console.log(this.goods);
      }) 

      

    }
  },
  created () {
    //1-保存传入的iid
    this.iid = this.$route.params.id

    //2-根据iid请求详细数据
    getDetail(this.iid).then(res => {
      console.log(res);
      const data = res.result;
      //1-获取顶部轮播图片topImages
      this.topImages = data.itemInfo.topImages
      //2-获取商品详情信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      //3-获取商家信息
      this.shop = new Shop(data.shopInfo)
      //4-保存商品详情数据
      this.detailInfo = data.detailInfo
      //5-获取参数信息
      this.DetailParams = new Params(data.itemParams.info,data.itemParams.rule)
      //获取评论信息
      if(data.rate.cRate !== 0) {
        this.comment = data.rate.list
      }
      //$nextTick会等到dom渲染完后再执行,但是图片可能依然没有加载完
      // this.$nextTick(() => {
      //   //等图片加载完成高度计算完成后,再获取offsetTop
      //   this.themeTopsY.push(0);//商品的offsetTop为0
      //   this.themeTopsY.push(this.$refs.params.$el.offsetTop);
      //   this.themeTopsY.push(this.$refs.comment.$el.offsetTop);
      //   this.themeTopsY.push(this.$refs.recommend.$el.offsetTop);
      //   console.log(this.themeTopsY);
      // })
    })

    //3-请求推荐数据
    getRecommend().then(res => {
      console.log(res);
      this.recommend = res.data.list;
    })

    //4-给getThemeTopY赋值(对给getThemeTopY赋值进行防抖,提高性能)
    this.getThemeTopY = debounce(() => {
      //等图片加载完成高度计算完成后,再获取offsetTop
      this.themeTopsY.push(0);//商品的offsetTop为0
      this.themeTopsY.push(this.$refs.params.$el.offsetTop);
      this.themeTopsY.push(this.$refs.comment.$el.offsetTop);
      this.themeTopsY.push(this.$refs.recommend.$el.offsetTop);
      console.log(this.themeTopsY);
    })

  },
  mounted () {
    
  },
  destroyed () {
    this.$bus.$off('itemImgLoad', this.itemImgListener)
  }
}
</script>

<style scoped>
  #Detail {
    position: relative;
    z-index: 999;
    background-color: #fff;
  }
  .content {
    height: calc(100vh - 44px - 49px);
    overflow: hidden;
  }
</style>