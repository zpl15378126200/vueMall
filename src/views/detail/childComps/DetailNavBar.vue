<template>
  <div class="DetailNavBar">
    <nav-bar>
      <div slot="left" class="backButton" @click="backButtonClick"><img src="@/assets/images/detail/backButton.png" alt=""></div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles" :key="item" class="titleItem" :class="{active: index === currentIndex}" @click="titleClick(index)">
          <span>{{item}}</span>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
export default {
  components:{ NavBar },
  name:'DetailNavBar',
  data() {
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex: 0,
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick',index)
    },
    backButtonClick() {
      this.$router.go(-1) //go(-1)相当于back()
    }
  }
}
</script>

<style scoped>
  .title {
    display: flex;
  }
  .titleItem {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
    
  }
  .active span {
    padding: 5px;
    border-bottom: 2px solid var(--color-tint);
  }
  .backButton img {
    height: 22px;
    width: 22px;
    vertical-align: middle;/* 设置一个元素的垂直对齐方式 */
    margin-left: -20px;
  }
</style>