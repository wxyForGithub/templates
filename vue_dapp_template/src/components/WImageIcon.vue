<template functional>
  <div class="img_wrap" :class="[props.imgName+'Icon']">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.img_wrap{
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  flex-shrink: 0;
}
.logoIcon{
  background-image: url('../assets/logo.png');
}

@media screen and (max-width:768px){
  $screenWidth: 100vw;
  $screenHeight: 100vh;
  $dHeight: 1624; // 设计图高度
  $dWidth: 750;
  .logoIcon{
    width: calc(#{$screenWidth} * 60 / #{$dWidth});
    height: calc(#{$screenWidth} * 46 / #{$dWidth});
  }
}
@media screen and (min-width:768px){
  $screenWidth: 500PX;
  $screenHeight: 100vh;
  $dHeight: 1624; // 设计图高度
  $dWidth: 750;
  .logoIcon{
    width: calc(#{$screenWidth} * 60 / #{$dWidth});
    height: calc(#{$screenWidth} * 46 / #{$dWidth});
  }
}
</style>
