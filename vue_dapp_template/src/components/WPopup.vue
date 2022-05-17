<template>
  <van-popup v-model="show" @click-overlay="close" :close-on-click-overlay="false" style="width: 80%">
    <div class="popup_normal_wrap flex_v">
      <div class="flex_h_end_center" @click="close">
        <w-image-icon imgName="closePopup"></w-image-icon>
      </div>
      <div class="popup_head_position">
        <w-image-icon imgName="popupHeadBg">
          <div class="popup_text">
            {{title}}
          </div>
        </w-image-icon>
      </div>
      
      <div class="wrap_outter">
        <div class="wrap_inner">
           <slot />
        </div>
      </div>
    </div>
  </van-popup>
</template>

<script>
export default {
  props: {
    title: String,
    show: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.van-popup{
  background-color: transparent !important;
}
.popup_normal_wrap{
  padding-top: 90px;
  position: relative;
  .wrap_outter{
    background: #FFF6E7;
    border-radius: 24px;
    padding: 12px;
    margin-top: 40px;
    .wrap_inner{
      border-radius: 24px;
      border: 3px solid #F6C277;
    }
  }
  .popup_head_position{
    position: absolute;
    top: 110px;
    left: 50%;
    transform: translateX(-50%);
  }
  // box-sizing: border-box;
  .popup_text{
    font-size: 38px;
    font-weight: 600;
    color: #FFFFFF;
    padding-top: 18px;
  }
}
</style>