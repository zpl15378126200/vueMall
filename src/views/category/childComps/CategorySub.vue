<template>
  <div class="CategorySub">
    <div 
      v-for="(item,index) in subCategory" 
      :key="item.acm" 
      class="title" 
      @click="titleClick(item,index)"
      :class="{active:currentIndex === index}"
        >
      {{item.title}}
    </div>
  </div>
</template>

<script>
export default {
  name:'CategorySub',
  data () {
    return {
      currentIndex:0
    }
  },
  props: {
    subCategory: {
      type:Array,
      default() {
        return []
      }
    }
  },
  methods: {
    titleClick(item,index) {
      const maitKey = item.maitKey
      this.currentIndex = index
      this.$store.commit('subClick',maitKey)
      this.$emit('subClick',maitKey)
    }
  }
}
</script>

<style scoped>
  .CategorySub {
    float: left;
    height: calc(100vh - 44px - 49px);
    margin-top: 44px;
    width:20%;
  }
  .CategorySub .title {
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-weight: 500;
    border-right: 1px solid rgb(241, 9, 67, .2);
    border-bottom: 1px solid rgba(241, 9, 67, .2);
  } 
  .CategorySub .active {
    background-color: var(--color-tint);
    color: white;
  }
</style>