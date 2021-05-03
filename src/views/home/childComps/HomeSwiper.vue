<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="sImgLoaded">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>

import {Swiper,SwiperItem} from "components/common/swiper/index"

export default {
  name: "HomeSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    banners:{
      type: Array,
      default() {
        return [];
      }
    }
  },
  data(){
    return{
      isload: true
    }
  },
  methods:{
    sImgLoaded(){
      if(this.isload){
        this.$emit('sImgLoaded')
        this.isload=false
      }
    }
  }
}
</script>

<style scoped>

</style>
