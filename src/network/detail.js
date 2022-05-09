import { request } from "./request";
export function getDetail(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

//重点:如何对数据进行整合,抽离出需要的数据
export class Goods {
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realProce = itemInfo.lowNowPrice
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.sell = shopInfo.cSells
    this.goods = shopInfo.cGoods
    this.score = shopInfo.score
    this.shopUrl = shopInfo.shopUrl
  }
}

export class Params {
  constructor(info, rule) {
    //image可能没有值(有些商品有,有些没有)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.rule = rule.tables; 
  }
}