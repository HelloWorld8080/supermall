export default {
  aupdateInfo(context,payload){
    return new Promise((reolve,reject)=>{
      setTimeout(()=>{
        context.commit('updateInfo')
        console.log(payload);
      },1000)
    })

  }
}
