<template id="compare-template">
  <div class="compare-wrapper">
    <div class="compare">

      <div class="compare__content" :style="{width: `calc(${100 + '%'})`}">
        <slot name="first"></slot>
      </div>

      <resize-observer :notify="handleResize"></resize-observer>
      <div class="handle-wrap" :style="{left:`calc(${compareWidth + '%'} - 2px / 2`}">
        <div class="handle">
          <svg class="handle__arrow handle__arrow--l feather feather-chevron-left"
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          <svg class="handle__arrow handle__arrow--r feather feather-chevron-right"
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </div>
        <span class="handle-line"></span>
      </div>


      <div class="compare-overlay " :style="{width:`calc(${compareWidth + '%'})`}">
        <div class="compare-overlay__content" :style="{ 'width': width}">
          <slot name="second"></slot>
        </div>
      </div>

    </div>
    <input type="range"
           min="0"
           max="100"
           :step="step"
           class="compare__range"
           :value="compareWidth"
           @input="handleInput"
           @dblclick="handleDoubleClick"
           tabindex="-1">

  </div>
</template>

<script>

import {ResizeObserver} from "resize-observer-vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "comparify",
  components: {ResizeObserver},
  props:{
    value: { default: 1 },
    step: { default: '.1' },
    intro: { default: false}
  },
  data(){
    return {
      width: null,
      thisDirection: 8,
      waiting: 2,
      compareWidth: this.value,
      last_input: this.value - 1,

    }
  },
  watch:{
    value(){
      this.compareWidth = this.value
    }
  },
  mounted(){
    this.width = this.getContainerWidth();
    window.addEventListener("resize", this.handleResize);
    if (this.intro) {
      setInterval(this.timerFunction,30)
    }
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods:{
    handleInput(e){
      this.waiting = -1;
      this.compareWidth = parseFloat(e.target.value)
      this.$emit('input', e.target.value)
    },
    handleResize(){
      const w = this.getContainerWidth();
      if(w === this.width)
        return;
      this.width = w

      console.log(this.width)
    },
    getContainerWidth(){
      return window.getComputedStyle(this.$el,null).getPropertyValue('width')
    },
    handleDoubleClick(e) {
      if (e.target.value < 50) {
        for (let i = e.target.value; i <= 100; i++) {
          this.compareWidth = parseFloat(i);
          setTimeout(() => {}, 100);
        }
      }
      else {
        for (let i = e.target.value; i >= 0; i--) {
          this.compareWidth =  parseFloat(i);
          setTimeout(() => {}, 100);
        }
      }
      this.waiting = 2;
    },
    timerFunction(){
      if(this.waiting <= 0)
        return
      if(this.waiting == 2 && this.compareWidth >= 99 ){
        this.thisDirection = -5;
        this.waiting = 0;
        this.compareWidth = 99;
        setTimeout(()=>{if(this.waiting>=0)this.waiting=1},4000)
      }
      else if(this.waiting == 2 && this.compareWidth <= 1 ){
          this.thisDirection = 5;
          this.waiting = 0;
          this.compareWidth = 1;
          setTimeout(()=>{if(this.waiting>=0)this.waiting=1},4000)
      }
      if(this.waiting!=0){
        this.last_input = this.compareWidth;
        var speed = Math.sin(((this.compareWidth) / 110) * Math.PI);
        if(speed===0 )speed=0.001
        this.compareWidth += this.thisDirection*speed ;
        this.waiting = 2;
      }
    }
  }
}
</script>

<style scoped>
.compare-wrapper{
  position: relative;
  height: 100%;
}
.compare,
.compare__content{
  position: relative;
  height: 100%;
  background: url("@/assets/background.png");
}

.compare-overlay{
  position: absolute;
  overflow:hidden;
  height: 100%;
  top:0;
}
.compare-overlay__content{
  position:relative;
  height: 100%;
  width: 100%;
  background: url("@/assets/background.png");
}

.handle__arrow{
  position: absolute;
  width: 20px;
}
.handle__arrow--l{
  left:0;
}
.handle__arrow--r{
  right:0;
}

.handle-wrap{
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  height: 100%;
  transform: translate(-50%, -50%);
  z-index: 5;
}
.handle{
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
}

.handle-line{
  content: '';
  position: absolute;
  top:0;
  width: 2px;
  height: 100%;
  background: white;
  z-index: 4;
  pointer-events:none;
  user-select:none;
}

.compare__range{
  position: absolute;
  cursor: ew-resize;
  left: calc(30px / -2);
  width: calc(100% + 30px);
  transform: translatey(-50%);
  top: calc(50%);
  z-index: 6;
  -webkit-appearance: none;
  height: 30px;
  /* debugging purposes only */
  background: rgba(0,0,0,.4);
  opacity: .0;
}

.object-fit-cover{
  object-fit: cover;
}
</style>