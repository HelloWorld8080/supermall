<template>
  <good-list>
    <good-list-item  v-for="(item,index) in goods" :key="index">
      <a slot="item-img" :href="item.link">
        <img :src="item.show.img">
      </a>
      <div slot="item-text">{{item.title}}</div>
    </good-list-item>
  </good-list>
</template>

<script>

import GoodList from "components/content/goodlist/GoodList";
import GoodListItem from "components/content/goodlist/GoodListItem";
export default {
  name: "HomeGoodList",
  components:{
    GoodListItem,
    GoodList,
  },
  props:{
    goods:{
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
</style>
