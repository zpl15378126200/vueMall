//this.$store.dispatch到actions
//this.$store.commit到mutations
import Vue from 'vue'
import Vuex from 'vuex'
//1-安装插件
Vue.use(Vuex)
//2-创建store对象
const store = new Vuex.Store({
  state: {
    cartList: [],
    maitKey:3627
  },
  getters: {//计算
    cartLength(state) {
      return state.cartList.length === 0 ? "" : `(${state.cartList.length})`
    },
    cartList(state) {
      return state.cartList
    }
  },
  mutations: {//mutations唯一的目的就是修改state的状态,每个方法尽量完成的事件比较单一一点
    addCounter(state,payload) {
      payload.count++
    },
    addToCart(state,payload) {
      payload.checked = true
      state.cartList.push(payload)
    },
    subClick(state,payload) {
      return state.maitKey = payload
    }
  },
  actions: {
    addCart(context,payload) {//payload新添加的商品
      return new Promise((resolve,reject) => {
        //1-判断添加的是不是同一个商品
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)//当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的元素，之后的值不会再调用执行函数
        //2-判断oldProduct
        if(oldProduct) {
          //oldProduct.count += 1
          context.commit('addCounter',oldProduct)
          resolve('当前商品数量+1')
        } else {
          payload.count = 1
          //context.state.cartList.push(payload)
          context.commit('addToCart',payload)
          resolve('已成功添加到购物车')
        }
      })
      
    },
  },
  modules: {
  }
})
export default store
