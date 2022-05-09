<template>
    <swiper class="swiperItem">
      <swiper-item  v-for="item in topImages" :key="item">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
import Swiper from '@/components/common/swiper/Swiper.vue'
import SwiperItem from '@/components/common/swiper/SwiperItem.vue'
export default {
  name:'DetailSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages:{
      type:Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .swiperItem {
    height: 300px;
    overflow: hidden;
  }
</style>