<template>
  <div class="CartListItem">
    <div class="itemSelecter">
      <check-button class="checkButton" :isChecked="product.checked" @click.native="checkClick"></check-button>
    </div>
    <div class="listLeft">
      <img class="leftItem" :src="product.image" alt="">
    </div>
    <div class="listRight"> 
      <div class="itemInfo">
        <div class="title">{{product.title}}</div>
        <div class="desc">{{product.desc}}</div>
      </div>
      <div class="itembottom">
        <div class="price">¥{{product.price}}</div>
        <div class="count">
          ×{{product.count}}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton.vue'

export default {
  components: { CheckButton },
  name:'CartListItem',
  props: {
    product: {
      type:Object,
      default() {
        return{}
      }
    }
  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked
    }
  }
}
</script>

<style scoped>
  .CartListItem {
    display: flex;
    height: 120px;
    width: 100vh;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    /* overflow: hidden; */
  }
  .CartListItem .itemSelecter {
    line-height: 120px;
  }
  .CartListItem .itemSelecter .checkButton {
    margin: auto 5px;
  }
  .listLeft {
    height: 100%;
    line-height: 120px;
  }
  .listLeft img {
    height: 90%;
    width: 80px;
    border-radius: 10px;
  }
  .listLeft .leftItem {
    vertical-align: middle;
  }
  .listRight {
    position: relative;
    margin-left: 10px;
  }
  .itemInfo {
    position: absolute;
    top: 10px;
    margin-top: 10px;
    width: 300px;
  }
  .itemInfo .title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 18px;
    font-weight: 700;
  }
  .itemInfo .desc {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-top:10px;
    font-size: 14px;
  }
  .itembottom {
    display: flex;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
    margin-top:10px ;
  }
  .itembottom .count {
    margin-left: 120px;
    display: flex;
  }
  .itembottom .price {
    color: #ff4500;
  }
</style>