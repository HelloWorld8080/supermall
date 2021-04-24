<template>
   <div class="tab-bar-item">
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
  data(){
    return {
      isactive: true
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
    color: red;
  }
</style>
