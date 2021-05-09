<template>
  <div class="category">
    <nav-bar class="nav-bar"><div slot="center">分类</div></nav-bar>
    <div class="category-content">
      <select-bar :category-list="categoryList"></select-bar>

    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import {getAllCategory,getSubCategory} from "network/category";
import SelectBar from "views/category/childCmps/SelectBar";
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "Category",
  components: {
    Scroll,
    SelectBar,
    NavBar,
  },
  data(){
    return {
      categoryList: [],
      curMaitKey: '',
    }
  },
  created() {
    getAllCategory().then(res=>{
      console.log(res);
      this.categoryList = res.data.category.list;
      this.curMaitKey = res.data.category.list[0].maitKey
      return this.curMaitKey
    }).then(maitkey => {
      getSubCategory(maitkey)
    })

  }
}
</script>

<style scoped>
.nav-bar{
  background-color: var(--color-tint);
}
.category-content{
  position: relative;
  width: 100vw;
  height: calc(100vh - 47px - 52px);
  overflow: hidden;
}
</style>
