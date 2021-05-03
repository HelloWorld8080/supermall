import Vue from 'vue'
import Router from 'vue-router'



import Home from "views/home/Home";
import Category from "views/category/Category";
import Cart from "views/cart/Cart";
import Profile from "views/profile/Profile";
import Detail from "views/detail/Detail";



Vue.use(Router)


// // 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }


//路由请求以及网络请求
// path: '/detail/:iid',
//获取方式this.$route.params 注意是route不是router

// path: '/detail',
//params: {
// param1: //不会加到url后面
// }
//获取方式this.$route.params

// path: '/detail',
//query: {
// param1: //会加到url后面(形式query？id=&age=
// }
//获取方式this.$route.query

//网络请求post
// path: '/detail',
//data: json
//获取方式this.$route.date
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Default',
      redirect: '/home'
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ],
  mode: "history"
})
