<template>
  <div class="checkButton" >
    <img :class="{check : isChecked}" src="@/assets/images/content/check.png" alt="">
  </div>
</template>

<script>
export default {
  name:'checkButton',
  props: {
    isChecked:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
  .checkButton img {
    height: 18px;
    border: 2px solid rgba(0, 0, 0, .1);
    border-radius: 9px;
    
  }
  .checkButton .check  {
     background-color: var(--color-tint);
  }
</style>