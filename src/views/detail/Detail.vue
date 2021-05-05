<template>
  <div class="detail">
    <detail-nav-bar :de-tails="['商品','参数','评论','推荐']"></detail-nav-bar>
    <detail-swiper :top-images="topimages"></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from "views/detail/childComps/DetailNavBar";
import DetailSwiper from "views/detail/childComps/DetailSwiper";

import {getDetail} from "network/detail";

export default {
  name: "Detail",
  components:{
    DetailNavBar,
    DetailSwiper
  },
  data(){
    return{
      iid:null,
      topimages: []
    }
  },
  created() {
    // console.log(this.$route.query.iid);
    this.iid=this.$route.query.iid
    getDetail(this.iid).then(res=>{
      const data = res.result
      this.topimages = data.itemInfo.topImages
      console.log(this.topimages);
      // console.log(res);
    })
  }
}
</script>

<style scoped>

</style>
