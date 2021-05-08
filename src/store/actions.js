export default {
  aupdateInfo(context,payload){
    return new Promise((reolve,reject)=>{
      setTimeout(()=>{
        context.commit('updateInfo')
        // console.log(payload);
      },1000)
    })
  },
  aaddCart(context,payload){
    return new Promise((resolve,reject) =>{
      console.log(payload);
      context.commit('addCart',payload)
    })
  }
}
