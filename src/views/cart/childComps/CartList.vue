<template>
  <div class="cartList">
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
    ...mapGetters(['cartList'])
  }
}
</script>

<style scoped>
  .cartList {
    height: calc(100% - 44px - 49px - 40px);
  }
  
</style>