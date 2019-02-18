import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import "@babel/polyfill";

Vue.use(Vuelidate);

Vue.prototype.$eventHub = new Vue(); // Global event bus

new Vue({
  el: "#app",
  render: h => h(App)
});
