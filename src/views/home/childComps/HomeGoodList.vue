<template>
  <good-list >
    <good-list-item  v-for="(item,index) in goods" :key="index" >
      <img slot="item-img" :src="item.show.img" @load="imgLoad" @click="goodDetail(item)">
      <div slot="item-text" class="goods-info">
        <p>{{item.title}}</p>
        <span class="price">{{item.price}}</span>
        <span class="collect">{{item.cfav}}</span>
      </div>
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
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('imgLoad')
    },
    goodDetail(item){
      console.log(item);
      this.$router.push({
        path: '/detail',
        query: {
          iid: item.iid,

        }
      })

    }
  }
}
</script>

<style scoped>


  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect:before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
