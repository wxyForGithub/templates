import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n';
import router from './router'
import WImageIcon from '@/components/WImageIcon.vue'
import { Toast, Popup} from 'vant';
import './common/common.scss';

import * as filters from './filter'

Object.keys(filters).forEach(key=>Vue.filter(key, filters[key]))

Vue.use(Toast);
Vue.use(Popup);

Vue.config.productionTip = false
Vue.component('w-image-icon', WImageIcon)

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
