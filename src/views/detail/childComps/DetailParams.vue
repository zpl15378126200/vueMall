<template>
  <div class="DetailParams" v-if="Object.keys(DetailParams).length !== 0">
    <h3>商品尺寸</h3>
    <table class="sizes" v-for="(table,index) in DetailParams.rule" :key="index">
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <h3>商品参数</h3>
    <table class="params">
      <tr v-for="(info,index) in DetailParams.infos" :key="index">
        <td class="params-key">{{info.key}}</td>
        <td class="params-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="params-img" v-if="DetailParams.image.length !== 0">
      <h3>商品效果图</h3>
      <img :src="DetailParams.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailParams',
  props:{
    DetailParams:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .DetailParams {
    font-size: 14px;
    padding: 10px 20px;
    border-bottom: 5px solid rgba(0, 0, 0, .1);
  }
  .DetailParams h3 {
    text-align: center;
  }
  .sizes {
    width: 100%;
    height: 42px;
    margin-bottom: 20px;
  }
  .sizes tr {
    height: 42px;
  }
  .sizes td {
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }
  .params-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 130px;
  } 
  .params-value {
    color: #eb4868;
  }
  .params td {
    padding:5px 0 5px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }
  .params-img img{
    width: 100%;
    height: 100%;
  }
</style>