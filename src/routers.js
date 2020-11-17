import VueRouter from 'vue-router';
import Login from "./components/login.vue";
import Chat from "./components/chat.vue";


export default new VueRouter({
     routes:[
         {
             path:'',
             component:Login
         },
         {
            path:'/chat',
            component:Chat
        }
     ]

})