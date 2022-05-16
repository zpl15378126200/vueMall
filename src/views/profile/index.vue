<template>
  <div>
    <nav-bar class="profileBar"><div slot="center">个人中心</div></nav-bar>
    <login></login>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import Login from './childComps/login.vue'

export default {
  name:"profile",    
  components: {
    NavBar,
    Login
  }
  }

</script>

<style scoped>
  .profileBar {
    background-color: var(--color-tint);
    color: white;
  }
</style>