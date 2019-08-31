import Vue from 'vue'
import App from './App.vue'

import VueScrollTo from 'vue-scrollto';
import VueMask from 'v-mask'
import VueSimpleSVG from 'vue-simple-svg'
Vue.use(VueSimpleSVG)
Vue.use(VueMask);

Vue.config.productionTip = false

Vue.use(VueScrollTo, {
  container: "#order-items",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

new Vue({
  render: h => h(App),
}).$mount('#app')
