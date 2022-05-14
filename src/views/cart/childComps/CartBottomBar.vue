<template>
  <div class="CartBottomBar">
    <div class="checkAll item">
      <check-button class="check-button" :isChecked="isSelectAll" @click.native="checkAll" ref="btn"></check-button>
      <span>全选</span>
    </div>
    <div class="totalPrice item">
      合计:{{totalPrice}}
    </div>
    <div class="calcutate item" @click="calcClick">
      去付款{{`(${checkLength})`}}
    </div>
  </div>
</template>

<script>
import CheckButton from '../../../components/content/checkButton/CheckButton.vue'
export default {
  components: { CheckButton },
  name:'CartBottomBar',
  computed: {
    //计算购物车选中商品总价格
    totalPrice() {
      return '¥' + this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue,item) => {
        return item.price * item.count + preValue
      },0).toFixed(2)
    },
    checkLength() {
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    isSelectAll() {
      //return !this.$store.state.cartList.filter(item => !item.checked).length会遍历所有,性能不高
      if(this.$store.state.cartList.length ==0) {//考虑购物车为空时!undefined也为true的情况
        return false
      } else {
        return !this.$store.state.cartList.find(item => !item.checked)
      }
      
    }
  },
  methods: {
    checkAll() {
      if(this.isSelectAll) {//全部选中
        this.$store.state.cartList.forEach(item => { item.checked = false});
      } else {//有没被选中项
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    },
    calcClick() {
      if(!this.checkLength) {
        this.$toast.show('请选择需要购买的商品')
      }
    }
  }
}
</script>

<style scoped>
  .CartBottomBar {
    position: fixed;
    display: flex;
    bottom: 49px;
    height: 40px;
    width: 100%;
    background-color: #eee;
  }
  .CartBottomBar .checkAll {
    display: flex;
    line-height: 40px;
    margin-left: 5px;
  } 
  .CartBottomBar .checkAll span {
    margin-left: 5px;
  }
  .CartBottomBar .totalPrice {
    line-height: 40px;
  }
  .CartBottomBar .item {
    flex: 1;
  }
  .calcutate {
    text-align: center;
    line-height: 40px;
    background-color: var(--color-tint);
    color:#fff ;
  }
</style>