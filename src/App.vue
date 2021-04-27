<template>
  <div id="nav">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
  import MainTabBar from "./components/content/MainTabBar";
  export default {
    name:"app",
    components:{
      MainTabBar
    },
    methods:{
     // addStu(stu){
     //   this.$store.commit('addStu',stu)
     //   mutation的另一种提交风格
     //   this.$store.commit({
     //     type: 'addStu',
     //     stu,
     //     age:24
     //   })
     //   this.$store.commit(INCREMENT)
     //  this.$store.dispatch('aupdateInfo','我i时携带的信息').then().catch()
     // }
    }
  }
</script>
<style>
@import "assets/css/base.css";
</style>
