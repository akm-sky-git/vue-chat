
import './scss/index.scss';
import Vue from "vue";
import App from "./app.vue";

export const eventEmmiter=new Vue()
/*
Vue.component('app-chat-header',Header);
Vue.component('app-chat-user',User);
*/
const app=new Vue({
 el:'#app',

  render: h=>h(App)
})


