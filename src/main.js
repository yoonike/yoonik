import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import elementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Vant from "vant";
import "vant/lib/index.css";
import Http from "./request/http";

Vue.use(elementUI);
Vue.use(Vant);
Vue.config.productionTip = false;
Vue.prototype.$http = new Http();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
