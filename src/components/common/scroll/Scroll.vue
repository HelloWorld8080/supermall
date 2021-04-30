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
    this.scroll = new BScroll(".wrap",{
      click: true,
      probeType: this.probeType,
    })

  }
}
</script>

<style scoped>

</style>
