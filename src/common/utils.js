// 防抖函数,解决重复频繁调用问题
export function debounce(func,delay=50) {
  let timer = null

  return function (...args) {
    if(timer) clearTimeout(timer)

    timer = setTimeout(() => {
      func.apply(this, args)
    },delay)
  }
}
//时间格式化
function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}

export function formatDate(time,fmt) {
  if (/(y+)/.test(fmt)) {//y+ 表示一个或多个y
    fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));//RegExp.$1是RegExp的一个属性,指的是与正则表达式匹配的第一个 子匹配(以括号为标志)字符串
  }//substr() 方法可在字符串中抽取从 开始 下标开始的指定数目的字符。

  let o = {
     //'y+' : time.getFullYear();
     'M+' : time.getMonth() +1 ,
     'd+' : time.getDate(),
     'h+' : time.getHours(),
     'm+' : time.getMinutes(),
     's+' : time.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));//replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串
    }
  }

  return fmt;
  
  // M < 10 ? M = '0' + M : M = M;
  // d < 10 ? d = '0' + d : d = d;
  // h < 10 ? h = '0' + h : h = h;//美化时间格式
  // m < 10 ? m = '0' + m : m = m;
  // s < 10 ? s = '0' + s : s = s;
  // return y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s;
  
}