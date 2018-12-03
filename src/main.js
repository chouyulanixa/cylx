import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/home'
import Login from './components/login'
import Main from './components/main'

Vue.use(VueRouter);




const router=new VueRouter({
     mode:'history',
     base:__dirname,
     routes:[
       {
         path:'/home',
         name:'home',
         component:Home
       },
       {
        path:'/login',
        name:'login',
        component:Login 
       },
       {
         path:'/',
         name:'main',
         component:Main
       }
     ]
});


new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
