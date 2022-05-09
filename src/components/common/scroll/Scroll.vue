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
    if(this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('scroll', position => {
      //console.log(position);
      this.$emit('scroll',position)
      })
    }
    

    //3-监听上拉加载事件
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp')
      })
    }
    
  },
  methods: {
    scrollTo(x, y, time=300) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      console.log('刷新一次');
      this.scroll && this.scroll.refresh()//先判断scroll有没有值,有值的情况下再调方法
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style scoped>
  /* .wrapper {
    height: 100%;
  } */
</style>