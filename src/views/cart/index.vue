<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="cart-nav"><div slot="center">购物车{{getCartLength}}</div></nav-bar>

    <!-- 商品的列表 -->
    <scroll class="content">
      <cart-list></cart-list>
    </scroll>
    
    <!-- 底部汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import CartList from './childComps/CartList.vue'
import Scroll from '@/components/common/scroll/Scroll.vue'
import { mapGetters } from 'vuex'
import CartBottomBar from './childComps/CartBottomBar.vue'
export default {
  name:"cart",
  components: {
    NavBar,
    CartList,
    Scroll,
    CartBottomBar
  },
  data () {
    return {
      product:null
    }
  },
  methods: {
    
  },
  computed: {
    // cartLength() {
    //   return this.$store.getters.cartLength
    // }
    //使用mapGetters辅助函数可以直接使用vuex中的getter计算属性
    //两种语法
    //...mapGetters(['cartLength'])
    ...mapGetters({getCartLength:'cartLength'})
  }
}

</script>

<style scoped>
  .cart {
    height: calc(100vh - 44px - 49px);
    overflow: hidden;
    
  }
  .cart-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--color-tint);
    color: #fff;
    font-size: 18px;
    z-index: 9;
  }
  .content {
    height: calc(100% - 40px);
    margin-top: 44px;
  }
</style>