<template>
  <div class="goods">
    <goods-list-item 
    v-for="item in goods" 
    :key="item.acm"
    :goods-item="item"
    >

    </goods-list-item>
    <!-- {{goods}} -->
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name:'GoodsList',
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type:Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;/* 根据宽度决定一行内显示几个  默认值是nowrap */
    justify-content: space-evenly;
    margin-bottom: 46px;
  }
</style>