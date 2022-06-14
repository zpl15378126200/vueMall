<template>
  <div class="cartList">
    <div class="noCart" v-show="noCart">
      暂无购物车商品
    </div>
    <cart-list-item v-for="item in cartList" :key="item.iid" :product="item"></cart-list-item>
      
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import CartListItem from './CartListItem.vue'
export default {
  components: { CartListItem  },
  name:'cartList',
  computed: {
    ...mapGetters(['cartList']),
    noCart() {
      return this.cartList.length === 0
    }
  }
}
</script>

<style scoped>
  .cartList {
    height: calc(100% - 44px - 49px - 40px);
  }
  .noCart {
    text-align: center;
    margin-top: 100px;
  }
  
</style>