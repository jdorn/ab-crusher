import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import "./registerServiceWorker";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

Vue.use(require("vue-moment"));
Vue.prototype.$http = axios;
