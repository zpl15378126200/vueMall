import { request } from "./request";

export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}
//发送数据请求
//1-在home.js中封装getHomeGoods
//2-在home组件中的methods中getHomeGoods(type)
//3-调用getHomeGoods('pop')/getHomeGoods('sell')/getHomeGoods('new')
  //page:动态获取对应page
//4-获取到数据res
  //this.goods[type].list.push(...res.data.list)
  //this.goods[type].page += 1
  // goods:{
  //   'pop':{page:1 ,list:[30]},
  //   'new':{page:1 ,list:[30]},
  //   'sell':{page:1 ,list:[30]},
  // },
export function getHomeGoods(type,page) {
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}