<template>
  <div class="RightItem">
    <a :href="list.link">
      <img :src="list.image" alt="">
      <div class="text">{{list.title}}</div>
    </a>
    
  </div>
</template>

<script>
export default {
  name:'RightItem',
  props:{
    list:{
      type:Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .RightItem {
    width: 30%;
    height: 120px;
  }
  .RightItem img {
    height:80%;
    width: 100%;
  }
  .RightItem .text {
    text-align: center;
  }
</style>