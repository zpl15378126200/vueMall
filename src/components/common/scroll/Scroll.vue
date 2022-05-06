<template>
  <div class="wrapper" ref="wrapper"> 
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
//import ObserveDom from '@better-scroll/observe-dom'
//BScroll.use(ObserveDom)

export default {
  name:'Scroll',
  data() {
    return {
      scroll:null
    }
  },
  props: {
    probeType: {
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  mounted () {
    //1-创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      mouseWheel:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad,
      //observeDOM: true
    })
    //2-监听滚动的位置
    this.scroll.on('scroll', position => {
      //console.log(position);
      this.$emit('scroll',position)
    })
    //3-监听上拉加载事件
    this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    scrollTo(x, y, time=300) {
      this.scroll.scrollTo(0, 0, time)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped>
  /* .wrapper {
    height: 100%;
  } */
</style>