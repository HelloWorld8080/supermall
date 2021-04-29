<template>
  <swiper>
    <swiper-item v-for="(intem,index) in banners" :key="index">
      <a :href="intem.link">
        <img :src="intem.image" alt="">
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
  }
}
</script>

<style scoped>

</style>
