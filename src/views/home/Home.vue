<template>
  <div id="home">
    <nav-bar class="home-bar"> <div slot="center">购物街</div> </nav-bar>
    <tab-control
      v-show="istcshow"
      :titles="['流行','新款','经典']"
      @tabClick="tabClickHome"
      ref="tabcontrol1" class="tab-control1" idn="tc1"></tab-control>
    <scroll class="content"
            :probe-type="3"
            ref="hscroll"
            @scroll="scroll"
            :pull-up-load="true"
            @pullingUp="pullMore">
      <home-swiper :banners="banners" @sImgLoaded="sImgLoaded"></home-swiper>
      <tab-control :titles="['流行','新款','经典']"  @tabClick="tabClickHome" ref="tabcontrol2" idn="tc2"></tab-control>
      <home-good-list :goods="goodlist"></home-good-list>
    </scroll>
    <BackTop @click.native = "backTop" v-show="istopshow"></BackTop>
<!--    <div>{{netdata}}</div>-->

  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "views/home/childComps/HomeSwiper";
import TabControl from "components/content/tabcontrol/TabControl";
import HomeGoodList from "views/home/childComps/HomeGoodList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backtop/BackTop";

import {deBounce} from "@/common/Utils"
import {getHomeGoods, getHomeMultiData} from "network/home";

export default {
  name: "Home",
  components: {
    Scroll,
    HomeGoodList,
    NavBar,
    HomeSwiper,
    TabControl,
    BackTop,
  },
  data(){
    return {
      netdata: {},
      banners: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      istcshow: false,
      curtype: 'pop',
      tcoffsettop: 0,
      istopshow: false,
    }
  },
  computed:{
    goodlist() {
      return this.goods[this.curtype].list
    }
  },
  created(){
    this.getHomeMultiData()

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    // //刷新scrollheight，适应滚动
    // this.$bus.$on('imgLoad',()=>{
    //   console.log('oodfj');
    //   this.$refs.hscroll.scrollRefresh();
    // })
  },
  mounted() {
    //刷新scrollheight，适应滚动
    const refresh=deBounce(this.$refs.hscroll.scrollRefresh,300)
    this.$bus.$on('imgLoad',()=>{
      refresh()
    })
    //取消事件监听
    // this.$bus.$off('imgLoad',func)

  },

  methods: {

    backTop(){
      // console.log('fdjfk');
      this.$refs.hscroll.scroll.scrollTo(0,0,300)
    },
    pullMore(){
      // console.log('pullmoer');
      this.getHomeGoods(this.curtype)
      // console.log(this.goods[this.curtype].list);
      this.$refs.hscroll.finishPullUp()
    },
    scroll(position){
      this.istcshow = (-position.y)>this.tcoffsettop
      this.istopshow = (-position.y)>1000
    },
    sImgLoaded() {
      this.tcoffsettop=this.$refs.tabcontrol2.$el.offsetTop
      // console.log(this.$refs.tabcontrol2.$el.offsetTop);
    },
    getHomeMultiData(){
      getHomeMultiData().then(res=>{
        this.banners = res.data.banner.list
      })
    },
    getHomeGoods(type){
      const page=this.goods[type].page+1;
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page=page
      })
    },
    tabClickHome(idn,index){
      switch (index){
        case 0:
          this.curtype='pop';
          break
        case 1:
          this.curtype='new';
          break
        case 2:
          this.curtype='sell';
          break
      }
      //保证tabcontrol1与tabcontrol1一致性(方法一)
      this.$refs.tabcontrol2.curindex=index
      this.$refs.tabcontrol1.curindex=index
      //保证tabcontrol1与tabcontrol1一致性(方法二)
      // idn=='tc1'?
      //   this.$refs.tabcontrol2.curindex=this.$refs.tabcontrol1.curindex:
      //   this.$refs.tabcontrol1.curindex=this.$refs.tabcontrol2.curindex
      //console.log(thiss);
      // this.$refs.tabcontrol2.curindex=this.$refs.tabcontrol1.curindex
      //console.log(this.curtype);
    },
  }
  //h混入
  // mixins: [],
}
</script>

<style scoped>

.home-bar{
  background-color: var(--color-tint);
  color: #fff;
}
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  /*.home-tab-control{*/
  /*  position: absolute;*/
  /*  top: 44px*/
  /*}*/
  .tab-control{

  /*z-index只对定位的元素起效果*/
    position: relative;
    background-color: white;
    z-index: 9;
  }
</style>
