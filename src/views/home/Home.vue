<template>
  <div id="home">
    <nav-bar class="home-bar">
      <div slot="center">
        购物街
<!--        {{$store.state.info}}-->
      </div>
    </nav-bar>
    <div>{{netdata}}</div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import {getDate, postDate} from "network/home";
export default {
  name: "Home",
  data(){
    return {
      netdata: {}
    }
  },
  created() {
    getDate().then(res=>{
      console.log(res);
      this.netdata=res
    }).catch(err=>{
      console.log(err);
    })
  },
  components: {
    NavBar
  }

}
</script>

<style scoped>

.home-bar{
  background-color: var(--color-tint);
  color: #fff;
}

</style>
