<template>
  <NavBar class="nav-bar">
    <img src="~assets/img/common/back.svg" slot="left" @click="back">
    <div slot="center" class="d-nav-c">
      <div ref="detaili" v-for="(item,index) in deTails" :key="index" :class="{active: curactive===index}"
           @click="clickDetailItem(index)" class="d-nav-c-i">
        {{item}}
      </div>
    </div>
  </NavBar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components:{
    NavBar
  },
  props:{
    deTails: {
      type: Array,
      default: []
    }
  },
  data(){
    return {
      curactive: 0
    }
  },
  computed:{

  },
  methods:{
    clickDetailItem(index){
      this.curactive=index
      this.$emit('clickDetailItem',index)
    },
    back(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>

.nav-bar img{
  margin-top: 10px;
}
.active{
  color: var(--color-high-text);
}

.d-nav-c{
  display: flex;
}
.d-nav-c-i{
  flex: 1;
}
</style>
