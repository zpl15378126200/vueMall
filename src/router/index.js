import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    // 指定的组件
    component: () => import('@/views/home')

  },
  {
    path: '/category',
    component:() => import('@/views/category')
  },
  {
    path: '/cart',
    component:() => import('@/views/cart')
  },
  {
    path: '/profile',
    component:() => import('@/views/profile')
  },
  {
    path: '/detail/:id',
    component:() => import('@/views/detail/Detail')
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
