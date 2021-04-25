<template>
   <div class="tab-bar-item" @click="itemClick">
     <div v-if="!isactive">
       <slot name="item-icon"></slot>
     </div>
     <div v-else="isactive">
       <slot name="item-icon-active"></slot>
     </div>
     <div :class="{active: isactive}">
       <slot name="item-text"></slot>
     </div>
   </div>
</template>

<script>

export default {
  name: "TabBarItem",
  props:{
    path: String
  },
  data(){
    return {
      // isactive: false
    }
  },
  computed: {
    isactive(){
      return this.$route.path==this.path
    }
  },
  methods:{
    itemClick(){
      // console.log(this.$router)
      // console.log(this.$route)
      this.$router.replace(this.path).catch(err=>err)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    font-size: 15px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: center;
    margin-bottom:0;
  }
  .active{
    color: var(--color-high-text);
  }
</style>
