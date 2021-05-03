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

    })
    this.scroll.on('scroll',position=>{
      this.$emit('scroll',position)
    })
    // console.log(this.scroll);
  },
  methods:{
    scrollRefresh(){
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>
