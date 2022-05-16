import Vue from 'vue'
import VueI18n from 'vue-i18n'
const messages = {
  zh: {
    test: '测试',
  },
  en: {
    test: 'Test',
  }
}

Vue.use(VueI18n)

const lang = window.localStorage.getItem('LANGUAGE') || 'en'
const i18n = new VueI18n({
  locale: lang, // set locale
  silentFallbackWarn: true,
  messages, // set locale messages
})

export default i18n