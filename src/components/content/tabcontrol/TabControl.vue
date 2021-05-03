<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles" @click="isActive(idn,index)">
      <span :class="{active: index===curindex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default(){
        return []
      }
    },
    idn: {
      type: String,
      default() {
        return '';
      }
    }
  },
  data(){
    return {
      curindex: 0
    }
  },
  methods:{
    isActive(idn,index){
      this.curindex= index
      this.$emit('tabClick',idn,index)
    }
  }

}
</script>

<style scoped>
  .tab-control{
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .tab-control-item{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
    padding: 5px;
    border-bottom: 3px solid var(--color-tint);
  }
</style>
