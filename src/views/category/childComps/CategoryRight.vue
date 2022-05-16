<template>
  <div class="CatetgoryRight">
    <right-item v-for="item in currentdata" :key="item.acm" :list="item"></right-item>
  </div>
</template>

<script>
import RightItem from './RightItem.vue'
export default {
  components: {
    RightItem  
  },
  name:"CatetgoryRight",
  props:{
    currentdata:{
      type:Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      
    }
  },
  methods: {
    
  },
  mounted () {
    
  }
}
</script>

<style scoped>
  .CatetgoryRight {
    display: flex;
    flex-wrap: wrap;/* 让弹性盒元素在必要的时候拆行(这个很重要) */
    justify-content: space-evenly;
    float: right;
    width: 80%;
    margin-top: 44px;
    margin-bottom: 49px;
  }
  
</style>