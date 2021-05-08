<template>
  <div class = 'cart'>
    <nav-bar class = 'nav-bar'><div slot="center">购物车</div></nav-bar>
    <scroll class = "cart-scroll">
      <cart-list :cart-list="cartList"></cart-list>
    </scroll>

    <cart-bottom-bar class = "cart-bottom-bar"></cart-bottom-bar>
  </div>

</template>

<script>
import CartList from "views/cart/childComps/CartList";
import CartBottomBar from "views/cart/childComps/CartBottomBar";
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import {mapGetters} from "vuex";

  export default {
    name: "Cart",
    components: {
      Scroll,
      NavBar,
      CartBottomBar,
      CartList,
    },
    data(){
      return {
        // cartList: [],
      }
    },
    computed: {
      ...mapGetters(['cartList','cartListLength'])
    },
  }
</script>

<style scoped>

.cart{
  height: 100vh;
}
.nav-bar{
  background-color: var(--color-tint);
  color: white;
}
.cart-scroll{
  height: calc(100% - 47px - 52px - 40px);
  overflow: hidden;
}
</style>
