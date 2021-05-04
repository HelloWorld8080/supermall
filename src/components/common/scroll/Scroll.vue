<template>
  <div class="wrap" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default(){
        return 0
      }
    },
    pullUpLoad:{
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data(){
    return{
      scroll: null,
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    this.scroll.on('scroll',position=>{
      this.$emit('scroll',position)
    })
    this.scroll.on('pullingUp',()=>{
      // console.log('sj');
      this.$emit('pullingUp')

    })
    // console.log(this.scroll);
  },
  methods: {
    scrollTo(x,y,time=300){
      this.scroll.scrollTo(x,y,time)
    },
    scrollRefresh() {
      this.scroll && this.scroll.refresh()
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped>

</style>
