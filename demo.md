  ref:如果在普通DOM元素上使用,引用指向的就是DOM元素,如果在子组件上,引用就指向组件实例,可以通过实例直接调用组件的方法或访问数据
  test

0507
  事件总线:
  发出事件this.$bus.$emit('doit')
  监听事件this.$bus.$on('doit')

  首页上拉加载更多功能
    1-在Scroll.vue组件中监听是否拉到底部,监听到pullingUp后就发送自定义事件到首页组件
    2-首页组件中添加loadMore方法,执行this.getHomeGoods(this.currentType)来向接口请求选中类型的下一页30条数据
    3-scroll默认只能加载一次,想要多次加载,先结束pullup,调用scroll中方法finishPullUp()

  tabControl的吸顶效果
    1-获取tabControl的offsetTop
      必须知道滚动到多少时,开始有吸顶效果,这个时候就需要获取tabControl的offsetTop
      但是,如果直接在mounted中获取tabControl的offsetTop,那么值不正确
      如何获取正确的值?
        监听HomeSwiper中img的加载完成
        加载完成后,发出事件,在首页中获取正确的值(为了不让HomeSwiper多次发出事件,可以使用isLoad的变量进行状态的记录)
        注意:这里不进行多次调用和debounce的区别

0508
    2-监听滚动,动态改变tabControl样式
      产生的问题:动态改变tabControl样式时,会出现两个问题
        一:下面的商品内容会突然上移动(因为脱离了标准流)
        二:tabControl虽然设置了fixed,但是也随着scroll一起滚出去了
      解决停留问题
        在最上方复制一份tabControl组件对象,利用它来实现停留效果
        当用户滚动没有达到一定位置时,将上面的tabControl组件隐藏起来
    
    让首页保持原来的状态,不被随意销毁
      App,js中添加keep-alive
    让首页中的内容保持原来的位置
      离开时保存一个位置信息
      进来时,将位置设置为原来保存的位置即可