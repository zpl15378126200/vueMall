<template>
  <div>
    <nav-bar><div slot="center">购物车</div></nav-bar>
    <infinite-scroll></infinite-scroll>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import InfiniteScroll from '../../components/common/scroll/InfiniteScroll.vue'

export default {
  name:"cart",
  components: {
    NavBar,
    InfiniteScroll
  }
  }

</script>

<style>
  
</style>