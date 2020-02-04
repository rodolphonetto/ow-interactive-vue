import Vue from "vue"
import Vuelidate from "vuelidate"
import VueTheMask from "vue-the-mask"

import App from "./App.vue"
import router from "./router"
import store from "../src/store/"

Vue.use(VueTheMask)
Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app")
