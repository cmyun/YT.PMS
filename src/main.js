import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import BootstrapVue from "bootstrap-vue";


import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-vue/dist/bootstrap-vue-icons.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
// import "bootstrap-vue/dist/bootstrap-vue.js"

createApp(App).use(store).use(router).mount("#app");
