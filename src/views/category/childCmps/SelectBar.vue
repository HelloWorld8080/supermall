<template>
  <div class="select-bar">
    <select-bar-item v-for="(item,index) in categoryList" :key="index">
      {{item.title}}
    </select-bar-item>
  </div>
</template>

<script>
import SelectBarItem from "views/category/childCmps/SelectBarItem";
export default {
  name: "SelectBar",
  components: {
    SelectBarItem,
  },
  props: {
    categoryList: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
.select-bar{
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
