<template>
  <div class="back-top">
    <img src="@/assets\images\common\totop.png" alt="">
  </div>
</template>
<script>
export default {
  name:'BackTops',
  methods: {
    
  }
}
</script>

<style scoped>
  .back-top  {
    position: fixed;
    right: 10px;
    bottom: 59px;
  }
  .back-top img {
    height: 46px;
    width: 46px;
    background-color: rgba(0, 0, 0, .3);
    /* box-shadow:2px 2px 2px gray; */
    border-radius: 23px;
  }
</style>