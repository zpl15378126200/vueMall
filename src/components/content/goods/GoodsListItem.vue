<template>
  <div class="GoodsItem">
    <img :src="goodsItem.show.img" alt="">
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