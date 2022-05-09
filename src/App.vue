<template>
  <div id="app">
    <keep-alive exclude="Detail"><!-- exclude="Detail"解决点击不同商品详情页,iid不刷新的问题 -->
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
  
</template>

<script>
import MainTabBar from '@/components/content/maintabbar/MainTabBar'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import './assets/css/base.css';
</style>
