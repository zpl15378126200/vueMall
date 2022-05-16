<template>
  <div class="category">
    <nav-bar class="category-nav"><div slot="center">分类</div></nav-bar>
    <category-sub :subCategory="subCategory" @subClick="subClick"></category-sub>
    <category-right :currentdata="currentdata"></category-right>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'

import { getCategoryRight } from '@/network/category'
import { getCategory } from '@/network/category.js'
import CategorySub from './childComps/CategorySub.vue'
import CategoryRight from './childComps/CategoryRight.vue'
export default {
  components: { NavBar, CategorySub, CategoryRight},
  name:"category",
  data() {
    return {
      subCategory:[],
      currentdata:[]
    }
  },
  //created组件创建完后调用
  created () {
    this.getCategory()
    this.getCategoryRight()
  },
  methods: {
    getCategory() {
      getCategory().then(res => {
        this.subCategory = res.data.category.list
      })
    },
    subClick(maitKey) {
      console.log(maitKey);
      getCategoryRight(maitKey).then(res => {
        this.currentdata = res.data.list
      })
    },
    //解决首次进入分类不点击没数据的问题
    getCategoryRight() {
      getCategoryRight(this.$store.state.maitKey).then(res => {
        this.currentdata = res.data.list
      })
    }
  }
}

</script>

<style scoped>
  .category {
    height: 100vh;
  }
  .category-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--color-tint);
    z-index: 9;
    color: #fff;
  }
</style>
