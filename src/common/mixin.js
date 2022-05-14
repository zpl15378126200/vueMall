import {debounce} from '@/common/utils'
//mixin:混入,抽离出相同的代码再引入组件中
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener:null
    }
  },
  mounted () {
    //1-监听item中图片加载完成(GoodListItem组件传过来)
    const newRefresh = debounce(this.$refs.scroll.refresh,100)
    //对监听的事件进行保存
    this.itemImgListener = () => {
      newRefresh()
    }
    this.$bus.$on('itemImgLoad', this.itemImgListener)
    console.log('我是混入的内容');
  }
}