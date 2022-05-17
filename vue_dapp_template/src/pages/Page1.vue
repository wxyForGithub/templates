<template>
  <div>
    pages1 ---- {{$t('test')}}
    <div @click="goto('Page2')">go pages2</div>
    <w-image-icon imgName="logo"></w-image-icon>
    <div @click="showToast">toast</div>
    <div>{{address | subAddress(7)}}</div>
    <loading :show="true"/>
  </div>
  
</template>

<script>
import loading from '@/components/Loading'
export default {
  data() {
    return {
      address: '0x96e12851424bd20DC2C506eDFDA3c04F626Ed8Cd'
    }
  },
  components: {loading},
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