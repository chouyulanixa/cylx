<script src="../main.js"></script>
<template>
  <div id="app">
    <h1 class="top">臭鱼烂虾社区</h1>
    <div class="from">
      <from>
        <input v-model="message" placeholder=" 账号" class="from-1">
        <input v-model="message" placeholder=" 密码"class="from-1">
        <input type="submit" value="提交" class="from-2">
      </from>
       <p class="zhuce">
         <span>注册账号</span>
         <span>忘记密码</span>
       </p>
    </div>
  </div>
</template>

<script>
export default {
  name:'login',
  data(){
    return  {
      sel:''
    }
  }
}
</script>
<style>
#app{
  width: 100%;
  margin: 0 auto;
}
  .from{
    width: 500px;
    margin: 0 auto;
    margin-top: 10%;
  }
  .from-1{
    width: 100%;
    height: 60px;
    font-size: 24px;
    border: 1px solid #aaa;
    border-radius: 10px;
    outline: none;
    margin: 0 auto;
    margin-top: 10px;
  }
.from-2{
  width: 100%;
  height: 60px;
  font-size: 24px;
  margin-top: 10px;
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: #e4b9c0;
  color: #fff;
  cursor: pointer;
}
  .zhuce span{
    cursor: pointer;
    margin-right: 20px;
  }
.zhuce span:hover{
  color: red;
}
  .top{
    text-align: center;
    margin-top: 8%;
  }
</style>
