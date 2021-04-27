import Vue from 'vue';
import Vuex from 'vuex'

import {INCREMENT} from "@/store/mutations.type";

import getters from "@/store/getters";
import actions from "@/store/actions";
import mutations from "@/store/mutations";
import moduleA from "@/store/modules/moduleA";
Vue.use(Vuex)

const state={
  info:{name: 'liuxun', age: '24',} ,
  students:[{name: 'liuxun', age: '24',},
    {name: 'agular', age: '20',},
    {name: 'react', age: '13',}
  ]
}

export default new Vuex.Store(
  {
    state,
    getters,
    actions,
    mutations,
    modules: {
      moduleA
    }
  }
)
