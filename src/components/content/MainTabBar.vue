<template>
   <div id="main-tab-bar">
     <TabBar>
       <TabBarItem path="/home">
         <img src="~assets/img/tabbar/home.svg" slot="item-icon">
         <img src="~assets/img/tabbar/home_active.svg" slot="item-icon-active">
         <div slot="item-text">首页</div>
       </TabBarItem>
       <TabBarItem path="/category">
         <img src="~assets/img/tabbar/category.svg" slot="item-icon">
         <img src="~assets/img/tabbar/category_active.svg" slot="item-icon-active">
         <div slot="item-text">分类</div>
       </TabBarItem>
       <TabBarItem path="/cart">
         <img src="~assets/img/tabbar/shopcart.svg" slot="item-icon">
         <img src="~assets/img/tabbar/shopcart_active.svg" slot="item-icon-active">
         <div slot="item-text">购物车</div>
       </TabBarItem>
       <TabBarItem path="/profile">
         <img src="~assets/img/tabbar/profile.svg" slot="item-icon">
         <img src="~assets/img/tabbar/profile_active.svg" slot="item-icon-active">
         <div slot="item-text">我的</div>
       </TabBarItem>
     </TabBar>
   </div>

</template>
<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
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
