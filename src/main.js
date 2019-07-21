import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import elementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Vant from "vant";
import "vant/lib/index.css";
import axios from "axios";
import qs from "qs";

Vue.use(elementUI);
Vue.use(Vant);
Vue.config.productionTip = false;

Vue.prototype.axios = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
