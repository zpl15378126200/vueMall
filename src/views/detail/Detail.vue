<template>
  <div id="Detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="content" ref="scroll"><!-- scroll必须要给固定高度 -->
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods" ></detail-base-info><!-- 一定要记住父传子的时候动态绑定数据传过去,经常忘记 -->
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad"></detail-goods-info>
      <detail-params :detail-params="DetailParams"></detail-params>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
      </ul>
    </scroll>
    
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'

import { getDetail, Goods, Shop, Params } from '@/network/detail.js'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParams from './childComps/DetailParams.vue'

export default {
  components: { DetailNavBar, DetailSwiper,DetailBaseInfo, DetailShopInfo, Scroll, DetailGoodsInfo, DetailParams },
  name:'Detail',
  data() {
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      DetailParams:{},
    }
  },
  methods: {
    imgLoad() {
      //对scroll进行刷新,重新计算可滑动高度,避免图片还没加载完,可滑动高度就确定了,可滑动高度减少
      //需要先ref到scroll中
      this.$refs.scroll.refresh()
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

    })
  },
  activated () {
    
  },
  deactivated () {
    
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
    /* height: calc(100% -44px); */
    height: 100vh;
    overflow: hidden;
  }
</style>