export function deBounce(func,delay){
  let timer = null;
  return function (...args){
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      // console.log('oodfj');
      func.apply(this,args)
    },delay)
  }
}
