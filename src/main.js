import Vue from 'vue'
import App from './App.vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import router from '@/routes'

import '@/assets/index.css'
import 'virtual:windi.css'
import '@/assets/elu.css'

Vue.use(PiniaVuePlugin)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: (h) => h(App),
  pinia: createPinia(),
  router,
})
