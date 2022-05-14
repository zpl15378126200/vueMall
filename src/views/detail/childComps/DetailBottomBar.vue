<template>
  <div class="DetailBottomBar">
    <div class="bar-item bar-left">
      <div class="box">
        <i class="icon service"><img src="@/assets/images/detail/service.png" alt=""></i>
        <div class="text">客服</div>
      </div>
      <div class="box">
        <i class="icon shop"><img src="@/assets/images/detail/shop.png" alt=""></i>
        <div class="text">商铺</div>
      </div>
      <div class="box">
        <i class="icon star"><img src="@/assets/images/detail/star.png" alt=""></i>
        <div class="text">收藏</div>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart buttom" @click="addToCart">加入购物车</div>
      <div class="buy buttom">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailBottomBar',
  methods: {
    addToCart() {
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped>
  .DetailBottomBar {
    position: fixed;
    display: flex;
    bottom: 0;
    left: 0;
    right: 0;
    height: 49px;
    background-color: #fff;
    box-shadow: 0px -3px 0px rgba(0, 0, 0, 0.08)
  }
  .bar-item {
    flex: 1;
  }
  .bar-left {
    display: flex;
  }
  .bar-right {
    display: flex;
    text-align: center;
    line-height: 49px;
  }
  .bar-right .buttom {
    flex: 1;
  }
  .bar-right .cart {
    background-color: rgb(243, 243, 41);
  } 
  .bar-right .buy {
    color: #fff;
    background-color: var(--color-tint);
  }
  .bar-left .box {
    flex: 1;
    text-align: center;
  }
  .bar-left .icon img{
    /* vertical-align: middle;  *//* 去掉默认3px的图片与文字之间的间距 */
    height: 25px;

  }
</style>