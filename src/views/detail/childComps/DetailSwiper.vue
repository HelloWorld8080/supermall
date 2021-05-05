<template>
  <div class="detail-swiper">
    <swiper class="detail-swiper-content">
      <swiper-item v-for="(item,index) in topImages">
        <img :src="item">
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import Swiper from "components/common/swiper/Swiper";
import SwiperItem from "components/common/swiper/SwiperItem";
export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
.detail-swiper-content{
  height: 300px;
  overflow: hidden;
}
</style>
