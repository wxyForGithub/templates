import Vue from 'vue'
export const store = Vue.observable({
  provider: null,
  contract: null
})

export const mutations = {
  setStateVal(keyName, val) {
    store[keyName] = val
  },
}