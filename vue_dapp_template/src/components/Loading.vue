<template>
  <van-popup v-model="show" round :overlay="false" :close-on-click-overlay="false">
    <lottie :options="defaultOptions" v-on:animCreated="handleAnimation($event)" id="animate_wrap" v-if="load"/>
  </van-popup>
</template>

<script>
import lottie from 'vue-lottie'
import * as animationData from '@/assets/json/loading.json'
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    label: String
  },
  components: {
    lottie
  },
  mounted() {
    setTimeout(()=>{
      this.load = true
    }, 500)
  },
  data() {
    return {
      defaultOptions: {
        animationData: animationData.default,
        loop:true
      },
      anim: null,
      load: false,
    }
  },
  methods: {
    handleAnimation(anim){
      this.anim = anim 
      this.anim.play()
    },
  }
}
</script>

<style lang="scss" scoped>
.van-popup{
  background-color: transparent !important;
}
.animation_wrap{
  // background-color: #000;
  border-radius: 15px;
  display: inline-block;
  // width: 200px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>