<template>
  <div id="ap">
       <!-- 导航栏 -->
       <div class="navheader">
             <div class="left nav-logo"><img src="../img/xia.png" alt=""></div>
             <div class="left nav-nav-header">臭鱼烂虾</div>
             <div class="left nav-app">下载App</div> 
             <div class="left nav-ipt"><input type="text" placeholder="臭鱼烂虾"/></div>
             <div class="left nav-setting"> setting</div>
             <div class="left nav-login">登录</div>
             <div class="left nav-register">注册</div>
       </div>
        <Home></Home>
  </div>
</template>
<script>
import Home from './home';
export default {
  name:'main',
  components:{
    Home
  },
  data(){
    return  {
      sel:''
    }
  }
}
</script>

<style>
  body,html{
    padding:0;
    margin: 0;
    box-sizing: border-box;
  }
  #ap{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    font-size: 14px;
    overflow: hidden;

  }
.navheader{
  width:100%;
  margin: 0 auto;
  height:50px;
  line-height: 50px;
  box-sizing: border-box;
  border-bottom: 1px solid #999;
  position: fixed;
  top:0;
  left: 0;
}
.navheader:after{
  display: block;
  content: '';
  clear: both;
}
.left{
  float: left;
}
.nav-logo{
  width:200px;
  height:50px;
  margin-left: 10%;
  /* background: url(../img/xia.png) no-repeat center center;
  background-size: 100% contain; */
}
.nav-logo img{
  width: 23%;transform: scale(1.7);
}
.nav-nav-header,.nav-app{
  width: 100px;
  height: 50px;
  font-size: 20px;
  color:#999999;
  /* font-weight: bold; */
  text-align: center;
}
.nav-nav-header:hover,.nav-app:hover{cursor: pointer;}
.nav-ipt{width:300px;height:50px;}
.nav-ipt input{width: 300px;height:40px;line-height:40px;border:1px solid #999;outline: none;box-sizing: border-box;margin-left:10px;border-radius:30px;background-color: #ddd;color:#999;
padding-left:20px;padding-right:30px;}
.nav-setting{
  margin-left:300px;
  color:#999999;
  font-size: 24px;
}
.nav-login{
  color:#999999;
  font-size: 24px;width:100px;text-align: center;
}
.nav-register:hover,.nav-login:hover{cursor: pointer;color:aquamarine;}
.nav-register{
  width:100px;text-align: center;
  color:#999999;
  font-size: 24px;
  box-sizing: border-box;
  border-radius: 10px;
  height:40px;
  line-height: 40px;
  border:2px solid rgb(107, 22, 22);
  margin-top:5px;
}
</style>
