<template>
  <div id="hy-swiper">
    <div class="swiper" ref="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>

    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount>1">
        <div v-for="(item,index)  in slideCount" class="indi-item" :class="{active: index===curentIndex-1}" :key="index">
        </div>
      </slot>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Swiper",
    props:{
      showIndicator:{
        type: Boolean,
        default: true
      },
      interVal:{
        type: Number,
        default: 3000,
      },
      animDuration:{
        type: Number,
        default: 300
      },
      moveRatio:{
        type: Number,
        default: 0.25
      }
    },
    data(){
      return {
        slideCount: 0,
        curentIndex: 1,
        totalWidth: 0,
        scroling: false,
      }
    },
    mounted() {
      try{
        setTimeout(()=>{
          this.handleDom()
          this.startTimer()
        },3000)
      }catch (e) {
        console.log(e);
      }
    },
    methods:{
      handleDom(){
        if(!this.$refs.swiper.$el) return;
        let swiperEl= this.$refs.swiper.$el
        let slideEls= document.getElementsByClassName('slide')
        this.slideCount= slideEls.length


        if(this.slideCount>1){
          let clonefirst= slideEls[0].cloneNode(true)
          let clonelast= slideEls[this.slideCount-1].cloneNode(true)

          swiperEl.insertBefore(clonelast,slideEls[0])
          swiperEl.appendChild(clonefirst)
          if(!this.swiperStyle) return
          this.swiperStyle= swiperEl.style
        }
        this.totalWidth= swiperEl .offsetWidth
        this.setTransform(-this.totalWidth)
      },
      startTimer(){
        this.playTimer= window.setInterval(()=>{
          this.curentIndex++;
          // console.log('timer');
          this.scrollContent(- this.curentIndex*this.totalWidth);
        },this.interVal)
      },
      stopTimer(){
        window.clearInterval(this.playTimer)
      },

      scrollContent(curpos){
        try{
          this.scroling= true;

          this.swiperStyle.transition= this.animDuration+'ms';
          this.setTransform(curpos)

          this.checkPosition()

          this.scroling= false;
        }catch (e) {
          // console.log(e);
        }

      },
      checkPosition(){
        window.setTimeout(()=>{
          this.swiperStyle.transition='0ms'
          if(this.curentIndex>this.slideCount){
            this.curentIndex= 1;
            this.setTransform(-this.curentIndex*this.totalWidth)
          }else if(this.curentIndex<1){
            this.curentIndex=this.slideCount
            this.setTransform(-this.curentIndex*this.totalWidth)
          }
          this.$emit('TransitionEnd',this.curentIndex-1)
        },this.animDuration)
      },
      setTransform(curpos){
        if(this.swiperStyle){
          this.swiperStyle.transform= `translate3d(${curpos}px,0,0)`
          this.swiperStyle['-webkit-transform']= `translate3d(${curpos}px,0,0)`
          this.swiperStyle['-ms-transform']= `translate3d(${curpos}px,0,0)`
        }
      },

      touchStart(e){
        if(this.scroling) return

        this.stopTimer()

        this.startX = e.touches[0].pageX
      },
      touchMove(e) {
        this.currentX=e.touches[0].pageX
        this.distance=this.currentX-this.startX
        let curpos= -this.curentIndex*this.totalWidth
        let movedistance= this.distance+curpos

        this.setTransform(movedistance)
      },
      touchEnd(e){
        let currentmove = Math.abs(this.distance)
        if(this.distance<0 && currentmove>this.totalWidth*this.moveRatio){
          this.curentIndex++;
        }else if(this.distance>0 && currentmove>this.totalWidth*this.moveRatio){
          this.curentIndex--;
        }
        this.scrollContent(-this.curentIndex*this.totalWidth)

        this.startTimer()
      }
    }
  }
</script>
<style scoped>
  #hy-swiper {
    overflow: hidden;
    position: relative;
  }

  .swiper {
    display: flex;
  }

  .indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
  }

  .indi-item {
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
    font-size: 12px;
    margin: 0 5px;
  }

  .indi-item.active {
    background-color: rgba(212,62,46,1.0);
  }

</style>
