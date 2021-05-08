<template>

    <div class="detail">
      <detail-nav-bar :de-tails="['商品','参数','评论','推荐']" class="detail-nav-bar"
      @clickDetailItem="scrTo"></detail-nav-bar>
      <scroll :probe-type="3" class="content" ref="scroll" :pull-up-load="true" @scroll="scroll">
        <detail-swiper :top-images="topImages"></detail-swiper>
        <detail-base-info :baseInfo="baseInfo"/>
        <detail-shop-info :shopInfo="shopInfo"/>
        <detail-goods-info :goodsInfo = "goodsInfo" @goodsInfoImgLoad="goodsInfoImgLoad"/>
        <detail-goods-params :goodsParams="goodsParams" ref="goodsParams" />
        <detail-comment-info :commentInfo="commentInfo" ref="goodsComment"/>
        <detail-recommend :recommendList="recommendList" ref="goodsRecommend"/>
      </scroll>
      <detail-bottom-bar @addCart="addCart" class="detail-bottom-bar"/>
      <back-top @click.native="backTop" v-show="isbtShow"></back-top>
    </div>

</template>

<script>
import DetailNavBar from "views/detail/childComps/DetailNavBar";
import DetailSwiper from "views/detail/childComps/DetailSwiper";
import DetailBaseInfo from './childComps/DetailBaseInfo';
import DetailShopInfo from './childComps/DetailShopInfo';
import DetailGoodsInfo from './childComps/DetailGoodsInfo';
import DetailGoodsParams from './childComps/DetailGoodsParams';
import DetailCommentInfo from './childComps/DetailCommentInfo';
import DetailRecommend from './childComps/DetailRecommend';
import DetailBottomBar from './childComps/DetailBottomBar';

import {getDetail,Goods,Shop} from "network/detail";

import Scroll from '@/components/common/scroll/Scroll';
import BackTop from '@/components/content/backtop/BackTop';

export default {
  name: "Detail",
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailGoodsParams,
    DetailCommentInfo,
    DetailRecommend,
    DetailBottomBar,
    Scroll,
    BackTop,
  },
  data(){
    return{
      iid:null,
      topImages: [],
      baseInfo: {},
      shopInfo: {},
      goodsInfo:{},
      goodsParams:{},
      commentInfo:{},
      recommendList:[],
      imgItemListener: null, //控制商品推荐图片加载显示的listener
      themeTopYs:[0],    //记录商品,参数，评论，推荐的offsetTop
      currentIndex: 0, //记录滚动到某个具体的栏目参
      isbtShow: false,
    }
  },
  computed: {

  },
  created() {
    // console.log(this.$route.query.iid);
    this.iid=this.$route.query.iid
    getDetail(this.iid).then(res=>{
      const data = res.result
      // 获取顶部轮播图
      this.topImages = data.itemInfo.topImages;
      // 获取商品的基本信息
      this.baseInfo = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
      // 获取商家信息
      this.shopInfo = new Shop(data.shopInfo);
      // 获取商品图片信息
      this.goodsInfo = data.detailInfo;
      // 获取商品参数信息
      this.goodsParams = data.itemParams
      //获取评论信息
      this.commentInfo = data.rate;
      console.log(data);
      this.recommendList =data.recommendList;
      // console.log(this.topimages);
      // console.log(res);
    })
  },
  methods: {
    addCart(){
      const product = {};
      product.image = this.topImages[0];
      product.title = this.baseInfo.title;
      product.desc = this.baseInfo.desc;
      product.price = this.baseInfo.newPrice;
      product.iid = this.baseInfo.iid;
      product.realPrice = this.baseInfo.realPrice;
      this.$store.dispatch('aaddCart', product).then(res=>{
        console.log('addcart');
      })
    },
    scroll(position) {
      // console.log(position.y);
      this.isbtShow = -position.y>=1000
    },
    backTop() {
      // console.log('djfkd');
      this.$refs.scroll.scrollTo(0,0,300)
    },
    pullingUp(){
      console.log('pullingup');
    },
    goodsInfoImgLoad(){
      this.$refs.scroll.scrollRefresh()
    },
    scrTo(index){
      index= index===0? -3 :index;
      //console.log(this.$refs.scroll.$children[index].$el.offsetTop);
       this.$refs.scroll.scrollTo(0,-this.$refs.scroll.$children[index+3].$el.offsetTop,300)
    }
  }
}
</script>

<style scoped>
.detail-nav-bar{
  position: relative;
}

.content{
  position: relative;
  height: calc(100vh - 107px);
  overflow: hidden;
}
.detail-bottom-bar{
  z-index: 9;
  background-color: white;
}
</style>
