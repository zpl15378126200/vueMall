<template>
  <div class="tab-control">
    <div 
    v-for="(item,index) in titles" 
    :key="item" 
    class="tab-control-item" 
    @click="itemClick(index)"
    :class="{active: index === currentIndex}"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name:'TabControl',
  data() {
    return {
      currentIndex:0
    }
  },
  props: {
    titles:{
      type:Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabclick',index);
    }
  }
}
</script>

<style>
  .tab-control {
    display: flex;
    text-align: center;
    line-height: 40px;
    background-color: #eee;
    z-index: 9;
  }
  .tab-control-item {
    flex: 1;
  }
  .active {
    color:var(--color-high-text);
  }
  .active span {
    padding: 5px;
    border-bottom: 3px solid var(--color-tint);
  }
</style>