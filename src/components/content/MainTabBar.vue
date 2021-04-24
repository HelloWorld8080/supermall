<template>
   <div id="main-tab-bar">
     <TabBar>
       <TabBarItem>
         <img src="~assets/img/tabbar/home.svg" slot="item-icon">
         <div slot="item-text">首页</div>
       </TabBarItem>
       <TabBarItem>
         <img src="~assets/img/tabbar/category.svg" slot="item-icon">
         <div slot="item-text">分类</div>
       </TabBarItem>
       <TabBarItem>
         <img src="~assets/img/tabbar/shopcart.svg" slot="item-icon">
         <div slot="item-text">购物车</div>
       </TabBarItem>
       <TabBarItem>
         <img src="~assets/img/tabbar/profile.svg" slot="item-icon">
         <div slot="item-text">我的</div>
       </TabBarItem>
     </TabBar>
   </div>

</template>
<script>
import TabBar from "components/common/TabBar";
import TabBarItem from "components/common/TabBarItem";
export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
