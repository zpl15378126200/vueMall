<template>
  <div class="GoodsItem" @click="itemClick">
    <img v-lazy="showImage" alt="" @load="imageLoad">
    <div class="GoodsInfo">
      <p>{{goodsItem.title}}</p>
      <span class="price">¥{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  props: {
    goodsItem: {
      type:Object,
      default() {
        return []
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    imageLoad() {
      //通过事件总线发射事件
      this.$bus.$emit('itemImageLoad')

      //解决推荐商品图片刷新后,首页也会刷新的问题
      // if(this.$route.path.indexOf('/home')) {
      //   this.$bus.$emit('homeitemImageLoad')
      // } else if (this.$route.path.indexOf('/detail')) {
      //   this.$bus.$emit('detailitemImageLoad')
      // }
      
    },
    itemClick() {
      //可以返回就用push
      this.$router.push('/detail/' + this.goodsItem.iid)
      // console.log(this.$router);
      // console.log(this.$route);
    }
  }
}
</script>

<style>
  .GoodsItem {
    position: relative;
    margin-bottom: 40px;
    width: 48%;
    
  }
  .GoodsItem img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .GoodsInfo {
    position: absolute;
    font-size: 14px;

  }
  .GoodsInfo p {
    width: 180px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;/* 1-文本显示不开强制一行内显示 */
    margin-bottom: 3px;
  }
  .GoodsInfo .price {
    color: var(--color-high-text);
    margin-left: 35px;

  }
  .GoodsInfo .collect {
    position: relative;
    margin-left: 30px;
  }
  .GoodsInfo .collect::before {
    content: '';
    position: absolute;
    left: -16px;
    width: 14px;
    height: 14px;
    background: url('@/assets/images/common/collect.svg') 0 0/14px 14px;
  }
</style>