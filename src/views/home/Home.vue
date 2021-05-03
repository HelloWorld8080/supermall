<template>
  <div id="home">
    <nav-bar class="home-bar"> <div slot="center">购物街</div> </nav-bar>
    <tab-control
      v-show="istcshow"
      :titles="['流行','新款','经典']"
      @tabClick="tabClickHome"
      ref="tabcontrol1" class="tab-control1" idn="tc1"></tab-control>
    <scroll class="content" :probe-type="3" ref="hscroll" @scroll="scroll">
      <home-swiper :banners="banners" @sImgLoaded="sImgLoaded"></home-swiper>
      <tab-control :titles="['流行','新款','经典']"  @tabClick="tabClickHome" ref="tabcontrol2" idn="tc2"></tab-control>
      <home-good-list :goods="goods[curtype].list"></home-good-list>
    </scroll>
<!--    <div>{{netdata}}</div>-->

  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "views/home/childComps/HomeSwiper";
import {getHomeGoods, getHomeMultiData} from "network/home";
import TabControl from "components/content/tabcontrol/TabControl";
import HomeGoodList from "views/home/childComps/HomeGoodList";
import Scroll from "components/common/scroll/Scroll";
import {deBounce} from "@/common/Utils"

export default {
  name: "Home",
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
  components: {
    Scroll,
    HomeGoodList,
    NavBar,
    HomeSwiper,
    TabControl
  },
  methods: {


    scroll(position){
      this.istcshow = (-position.y)>this.tcoffsettop
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
      this.goods[type].page++;
      getHomeGoods(type,this.goods[type].page).then(res=>{
        this.goods[type].list=res.data.list
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
