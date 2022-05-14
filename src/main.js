import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from '@/components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(Toast)
//使用懒加载的插件
Vue.use(VueLazyLoad,{
  loading: require('@/assets/images/common/lazyLoadPic.png')
})
Vue.use(ElementUi)

//解决移动端300ms延迟
FastClick.attach(document.body)


Vue.prototype.$bus = new Vue()//new一个vue实例作为事件总线

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
