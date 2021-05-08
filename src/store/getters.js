export default {
  stuMore20(state){
    return  state.students.filter(s => s.age>=20)
  },
  stuMOre20len(state,getters){
    return getters.stuMore20.length
  },
  stuMoreAge(state,getters){
    return age =>
      state.students.filter(s=>s.age>age)
  },
  cartList(state){
    return state.cartList;
  },
  cartListLength(state){
    return state.cartList.length;
  }
}
