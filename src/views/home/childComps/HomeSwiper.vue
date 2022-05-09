<template>
  <swiper>
      <swiper-item v-for="item in banners" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
//import {Swiper,SwiperItem} from '@/components/common/swiper'
import Swiper from '@/components/common/swiper/Swiper.vue'
import SwiperItem from '@/components/common/swiper/SwiperItem.vue'
export default {
  name: 'HomeSwiper',
  props:{
    banners:{
      type:Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoad:false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imageLoad() {//解决 @load="imageLoad"会加载四次的问题(因为轮播图有4张)
      if(!this.isLoad) {
        this.$emit('SwiperImageLoad')
        this.isLoad = true
      }
      
    }
  }
}
</script>