import {INCREMENT} from "@/store/mutations.type";

export default {
  [INCREMENT](state){
    state.info++
  },
  decrement(state){
    state.info--
  },
  addStu(state,stu){
    state.students.push(stu)
  },
  //matution的另一种提交风格
  // addStu(state,payload){
  //  state.students.push(payload.stu)
  // }
  updateInfo(state){
    //this.state.info.name='zs' vuex对初始化的属性支持响应式
    //this.state.info['address']='guizhou' vuex对非初始化的属性不支持响应式，但可以通过一些对象操作支持，列如：
    //,vue.set(state.info,'address','guizhou')设置或添加属性
    //this.state.splice('address',1,'guizhou'),vue.delete(),push,pop,sort(),reverse()删除键值
    //非响应式：delete info['address']只删除值，键值不变
  }
}
