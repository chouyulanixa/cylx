<template>
  <div id="app">
     
      <keep-alive>
          <router-view>
               <router-link  to="/">main</router-link> 
               <router-link  to="/home">HOME</router-link>
               <router-link  to="/login">login</router-link>    
          </router-view>
      </keep-alive> 
  </div>
</template> 



<script>


export default {
  
  data(){
    return  {
      sel:''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}




</style>
