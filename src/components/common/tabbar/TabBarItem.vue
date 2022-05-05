<template>
  <div @click="btnclick" class="tab-bar-item">
    <div v-if="!isActive"><slot name="item-icon"></slot></div> 
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{active:isActive}"><slot  name="item-text"></slot></div>   
  </div>
</template>

<script>

export default {
  name:"TabBarItem",
  props:{
    path:String,
  },
  data() {
    return {
      //isActive:false,
    }
  },
  computed: {
    isActive() {
      // /home -> item1(/home) = true
      //console.log(this.$route.path.indexOf(this.path) !== -1);
      return this.$route.path.indexOf(this.path) !== -1//判断活跃路由传过来的path是否和点击的path一样
    }
  },
  methods: {
    btnclick() {
      this.$router.replace(this.path)
    // this.isActive = !this.isActive;
    // this.$router.replace(this.path).catch((err) => err);
  }
  }
}
</script>

<style>
  .tab-bar-item {
    flex: 1;
    height: 49px;
    text-align: center;
  }
  .tab-bar-item img {
    width: 22px;
    height: 22px;
    margin-top: 3px;
    vertical-align: middle; /* 去掉默认3px的图片与文字之间的间距 */
  }
  .active {
    color: var(--color-high-text);
  }
</style>