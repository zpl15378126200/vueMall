<template>
  <div v-if="Object.keys(goods).length !== 0" class="DetailBaseInfo"> <!-- 如果不判断有没有goods,组件渲染时对象goods 可能找不到columns，-->
    <div class="info-tilte">{{goods.title}}</div>
    <div class="info-price">
      <span class="new-price">¥{{goods.realPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-column">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <!-- <span  v-for="item in goods.columns.slice(0,2)" :key="item">{{item}}</span> -->
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
  
</template>

<script>
export default {
  name:'DetailBaseInfo',
  props: {
    goods: {
      type:Object,
      default() {
        return {}
      }
    },
    
  },
  methods: {
    
  },
  computed: {
    
  }
}
</script>

<style scoped>
  .info-tilte {
    margin: 12px;
    font-weight: 700;
  }
  .new-price {
    color: var(--color-high-text);
    font-weight: 700;
    font-size: 20px;
    margin-left: 20px;
  }
  .old-price {
    margin-left: 10px;
    text-decoration: line-through;/* 删除线 */
    color: darkgray;
  }
  .discount {
    vertical-align: top;
    font-size: 14px;
    margin-left: 10px;
    padding: 3px;
    background-color: var(--color-tint);
    color: white;
    height: 20px;
    width: auto;
    border-radius: 10px;
  }
  .info-column {
    display: flex;
  }
  .info-column span {
    color: darkgray;
    flex: 1;
    font-size: 14px;
    text-align: center;
    border-bottom: 2px solid #f6f6f6;
    padding:10px 0 5px;
  }
  .info-service {
    display: flex;
    font-size: 14px;
    margin:30px 0 30px;
    border-bottom: 2px solid #f6f6f6 ;
    padding: 10px 0 10px;
  }
  .info-service-item {
    flex: 1;
    text-align: center;
    white-space: nowrap; /* 强制不换行 */
  }
  .info-service img {
    height: 14px;
    width: 14px;
  }
</style>