<template>
     <div id="banner">
         <swiper :options="swiperOption" ref="mySwiperA" >
              <!-- 幻灯内容 -->
              <swiper-slide style="float:left;"><img style="max-width:100%;" src="../img/xia.png" alt=""></swiper-slide>
              <swiper-slide style="float:left;"><img style="max-width:100%;" src="../img/ya.jpg" alt=""></swiper-slide>
              <swiper-slide style="float:left;"><img style="max-width:100%;" src="../img/shu.jpg" alt=""></swiper-slide>
              <swiper-slide style="float:left;"><img style="max-width:100%;" src="../img/niubi.jpg" alt=""></swiper-slide>
              <swiper-slide style="float:left;"><img style="max-width:100%;" src="../img/xinxin.jpg" alt=""></swiper-slide>
              <!-- 以下控件元素均为可选 -->
              <div class="swiper-pagination" slot="pagination"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
              <div class="swiper-scrollbar"  slot="scrollbar"></div>
          </swiper>
     </div>
</template>

<script>
import VueAwesomeSwiper from 'vue-awesome-swiper';
import Vue from 'vue'
Vue.use(VueAwesomeSwiper)
export default {
  name:'banner',
  data(){
    return{
        swiperOption: {
          // 所有配置均为可选（同Swiper配置） 
          notNextTick: true,
          autoplay: true,
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          scrollbar:'.swiper-scrollbar',
          mousewheelControl : true,
          observeParents:true,
          onTransitionStart(swiper){
           console.log(swiper)
          }
        }
    }
  },
  swiper() {
       return this.$refs.mySwiperA.swiper
  },
   mounted() {
      console.log("每次切换都会触发我");
      this.swiper.slideTo(3, 1000, false)
   }
}
</script>

<style>
   #banner{
       width:100%;
       height:300px;
       overflow: hidden;
   }  
</style>

