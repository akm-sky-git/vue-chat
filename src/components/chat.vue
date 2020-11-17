
<template>
            <div class="app__chat">
               <div class="app__chat__cont">
                    <div>
                            <app-chat-header v-bind:headerName="headerName"></app-chat-header>
                            <app-chat-users-list></app-chat-users-list>
                        <div style="display: flex; align-items: center;">
                            <app-chat-user v-bind:userName="userName[0]" v-bind:partnerName="userName[1]"></app-chat-user>
                            <app-chat-user v-bind:userName="userName[1]" v-bind:partnerName="userName[0]"></app-chat-user>
                        </div>
                    </div>
               </div> 
            </div>
      
</template>
<script>
import Header from "./header.vue"
import User from "./user.vue";
import UsersList from "./usersList.vue";

        export default {
          data:function(){
            return {
                headerName:"Добро пожаловать в чат!!!",
                userName:["Иван Иванов","Я"]
                
             }
          },
           components:{
                 
               appChatHeader:Header,
               appChatUser:User,
               appChatUsersList:UsersList
           }
        }
</script>
<style>
 
</style>