<template>
  <div v-if="Object.keys(detailInfo).length !== 0" id="DetailInfo">
    <div class="info-desc">
      <div class="start">商品描述</div>
      <div class="desc">{{detailInfo.desc}}</div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="detailImage" v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" >
      <img :src="item" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailInfo',
  data() {
    return {
      counter:0,
      imageLength:0
    }
  },
  props:{
    detailInfo: {
      type:Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      //进行判断,所有图片加载完毕,再进行一次回调就行了
      this.counter += 1;
      if(this.counter === this.detailInfo.detailImage[0].list.length) {//进行判断,只有最后一张图片加载完成才发送事件
        this.$emit('imgLoad')
      }
    },
    // watch: {//作用:监听
    //   detailInfo() {
    //     //获取图片的个数
    //     this.imageLength = this.detailInfo.detailImage[0].list.length
    //   }
    // }
  }
}
</script>

<style scoped>
  .detailImage img {
    height: 100%;
    width: 100%;
  } 
  .start {
    margin-top: 20px;
    text-align: center;
    border-top: 4px solid rgba(0, 0, 0, .1);
    padding-top: 20px;
  }
  .desc { 
    padding: 20px;
  }
  .info-key {
    font-weight: 700;
    padding: 10px;
  }
</style>