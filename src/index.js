
import './scss/index.scss';
import Vue from "vue";
import App from "./app.vue";
import VueRouter from 'vue-router'
import router from "./routers"


export const eventEmmiter=new Vue()
/*
Vue.component('app-chat-header',Header);
Vue.component('app-chat-user',User);
*/
Vue.use(VueRouter);
const app=new Vue({
 el:'#app',

  render: h=>h(App),
  router
})


