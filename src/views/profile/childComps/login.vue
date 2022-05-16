<template>
  <div class="login">
    <div class="avatar item">
      <img src="@/assets/images/common/profile/user.png" alt="">
      <span>登录/注册</span>
    </div>
    <div class="right item">
      <img src="@/assets/images/common/profile/right.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:'login'
}
</script>

<style scoped>
  .login {
    position: relative;
    background-color: var(--color-tint);
    height: 80px;
  }
  .login .item {
    position: absolute;
  }
  .avatar {
    left: 10px;
    line-height: 80px;
  }
  .avatar img {
    height: 60px;
    width: 60px;
    vertical-align: middle;
    border-radius: 30px;
    border: 2px solid pink;
  }
  .right {
    right: 10px;
    line-height: 90px;
  }
  .right img {
    height: 30px;
    widows: 30px;
  }
</style>