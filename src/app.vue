
<template>
            <div class="app__chat">
                <app-chat-header v-bind:headerName="headerName"></app-chat-header>
                <div style="display: flex; align-items: center;">
                <app-chat-user v-bind:userName="userName[0]" v-bind:partnerName="userName[1]"></app-chat-user>
                <app-chat-user v-bind:userName="userName[1]" v-bind:partnerName="userName[0]"></app-chat-user>
                </div>
                
            </div>
      
</template>
<script>
import Header from "./components/header.vue"
import User from "./components/user.vue";

        export default {
          data:function(){
            return {
                headerName:"Добро пожаловать в чат!!!",
                userName:["Иван Иванов","Я"]
                
             }
          },
           components:{
                 
               appChatHeader:Header,
               appChatUser:User
           }
        }
</script>
<style>
 
</style>