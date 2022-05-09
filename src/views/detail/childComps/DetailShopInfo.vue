<template>
    <div class="shopInfo">
      <div class="shopLogo">
        <img :src="shop.logo" alt="">
        <span>{{shop.name}}</span>
      </div>
      <div class="shopIntro">
        <div class="shopIntroLeft shopIntroItem">
          <div class="sell">
            <div class="sellNumber">{{shop.sell | isSellCount}}</div>
            <div class="sellText">总销量</div>
          </div>
          <div class="goods">
            <div class="goodsNumber">{{shop.goods}}</div>
            <div class="goodsText">全部宝贝</div>
          </div>
          
        </div>
        <div class="shopIntroRight shopIntroItem" >
          <table>
            <tr v-for="item in shop.score" :key="item.name">
              <td>{{item.name}}</td>
              <td :class="{scoreHigh : item.isBetter}" class="score">{{item.score}}</td>
              <td :class="{scoreBetter : item.isBetter}" class="better"><span>{{item.isBetter ? '高' : '低'}}</span></td><!-- 注意这里需要加个span -->
            </tr>
          </table>
        </div>
      </div>
      <div class="intoShop"><a href="good.shopUrl">进店逛逛</a></div>
    </div>
</template>

<script>
export default {
  name:'DetailShopInfo',
  props: {
    shop:{
      type:Object,
      default() {
        return {}
      }
    }
  },
  filters: {//过滤器
    //toFixed方法可把 Number 四舍五入为指定小数位数的数字
    isSellCount(sell) {
      if(sell < 10000) return sell;
      return (sell / 10000).toFixed(1) + '万';

    }
  }
}
</script>

<style scoped>
  .shopInfo {
    margin: 10px 0 10px;
    margin-left: 10px;
  }
  .shopLogo {
    margin: 30px 0 20px;
  }
  .shopLogo img {
    height: 50px;
    width: 50px;
    border: 2px solid #f7f7f7;
    border-radius: 25px;
    vertical-align:middle;/* a让logo和商店名在同一行对齐 */
  }
  .shopIntro {
    display: flex;
  }
  .shopIntroItem {
    flex: 1;
  }
  .shopIntroLeft {
    display: flex;
    border-right: 2px solid #f7f7f7;
    text-align: center;
    justify-content: space-evenly;
    margin:10px 0 10px;
    font-size: 14px;
    font-weight: 700;
    line-height:25px;
    height:25px;
  }
  .shopIntroRight {
    margin-left: 20px;
    font-size: 12px;
  }
  .shopIntroRight td {
    padding:5px;
  }
  .shopIntroRight .scoreHigh {/* 多写一个类名 提升优先级 */
    color: #5ea732;
  }
  .shopIntroRight .scoreBetter span{
    background: #5ea732; 
    color: white;
    padding: 3px;
  }
  .score {
    color: #f13e3a;
  }
  .better span{
    background: #f13e3a;
    color: white;
    padding: 3px;
  }
  .intoShop {
    height: 30px;
    width: 140px;
    background-color: rgba(0, 0, 0, .1 );
    text-align: center;
    line-height: 30px;
    border-radius: 15px;
    margin: 1px auto 1px;
  }
</style>