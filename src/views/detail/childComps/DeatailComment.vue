<template>
  <div>
    <div class="DetailComment" v-if="Object.keys(comment).length !== 0 ">
      <div class="info-header"><span class="span-left">用户评价</span> <span class="span-right">更多</span></div>
      <div class="userInfo">
        <img :src="comment[0].user.avatar" alt="">
        <span>{{comment[0].user.uname}}</span>
      </div>
      <div class="content">
        {{comment[0].content}}
      </div>
      <div class="msg">
        <span class="comment-time">{{comment[0].created | getDate}}</span><!-- created返回的是对应的时间戳,通过过滤器计算出对应时间 -->
        <span class="style">{{comment[0].style}}</span>
      </div>
      <span class="comment-img"  >
        <img :src="item" alt="" v-for="(item,index) in comment[0].images" :key="index">
      </span>
    </div>
    <div class="DetailComment-none" v-else>暂无评论~</div><!-- 没有评论的时候显示的内容 -->
  </div>
  
</template>

<script>
import { formatDate } from '@/common/utils.js'
export default {
  name:'DetailComment',
  props: {
    comment: {
      type:Array,
      default() {
        return []
      }
    }
  },
  filters: {
    getDate: (value) => {
      const time = new Date(value * 1000); //时间戳以秒为单位,乘以1000可得到毫秒
      return formatDate(time, "yyyy-MM-dd hh:mm:ss");//utils.js中的工具函数
    }
  }
}
</script>

<style scoped>
  .DetailComment {
    border-bottom: 4px solid rgba(0, 0, 0, .1);
    margin-bottom: 20px;
  }
  .info-header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }
  .span-left {
    float: left;
    margin-left: 10px;
    font-weight: 700;
  }
  .span-right {
    float: right;
    margin-right: 10px;
    font-size: 12px;
  }
  .userInfo {
    margin: 10px;

  }
  .userInfo img {
    height: 40px;
    vertical-align: middle;
  }
  .userInfo span {
    margin-left: 5px;
  } 
  .content {
    margin: 10px;
    font-size: 13px;
    line-height: 20px;
  } 
  .msg {
    color: grey;
    font-size: 12px;
    margin: 10px;
  }
  .msg .comment-time {
    margin-right: 5px;
  }
  .comment-img {
    margin: 0 auto 0;
    margin: 5px;
    display: flex;
    width: 99%;
  }
  .comment-img img {
    padding: 5px;
/*     flex: 1; */
    width: 33%;
    height: 122.5px;
  }
  .DetailComment-none {
    text-align: center;
    margin: 50px 0 50px;
  }
</style>