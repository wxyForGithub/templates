<template>
  <div>
    pages1 ---- {{$t('test')}}
    <div @click="goto('Page2')">go pages2</div>
    <w-image-icon imgName="logo"></w-image-icon>
    <div @click="showToast">toast</div>
  </div>
  
</template>

<script>
export default {
  methods: {
    goto(routeName) {
      this.$router.push(routeName)
    },
    showToast() {
      this.$toast('showToast====')
    }
  }
}
</script>

<style>

</style>