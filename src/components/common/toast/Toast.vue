<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name:'toast',
  data() {
    return {
      message:'',
      isShow:false
    }
  },
  methods: {
    show(message,duration=1500) {
      this.isShow = true;
      this.message = message

      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration);
    }
  }
}
</script>

<style scoped>
  .toast {
    position: fixed;
    padding: 20px;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);/* 让模态框居中 */
    background-color: rgba(0, 0, 0, .6);
    color: #fff;
    font-size: 17px;
    font-weight: 500;
    border-radius: 10px;
    white-space: nowrap;/* 强制一行内显示 */
    z-index: 999;/* 会被盖住,因为这是挂载到原型上的 */
  }
</style>