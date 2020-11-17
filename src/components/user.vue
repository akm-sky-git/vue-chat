<template>
            <div class="app__chat__user">
                    <h2>Чат : {{userName}} с {{partnerName}}</h2>

                     <div class="app__chat__text">
                              <div v-for="(item,index) in userText" v-bind:key="index" style="scroll-snap-align:start;">
                                 <h4>{{item.user}}:</h4>{{item.msg}}
                              </div>
                      </div>
                   <div class="app__chat__footer">
                           <p>Сообщение от {{userName}}:</p>
                           <input type="text" v-model="userMesg"/>
                           <button @click="addMsg">Отправить сообщение</button>
                   </div>
            </div>
      
</template>
<script>
//import Row from "./components/row.vue";
import {eventEmmiter} from "./../index.js"
    export default {
         props:['userName','partnerName'],
         data:function(){
            return {
                userMesg:"",

                userText:[/* {user:"я",msg:"Сообщение"},
                          {user:"я",msg:"Сообщение"},
                          {user:"Иванов Иван",msg:"Сообщение.."}, */
                ]
             }
          },
          created(){
             eventEmmiter.$on("messageSend",(msg)=>{
                if(this.userName!=msg.user){
                       this.userText.push(msg); 
                }
                   
                  
             });
         },
        methods:{
            addMsg:function(){
                    let msg={user:this.userName,msg:this.userMesg}
                   // this.$emit("messageSend",msg);
                    eventEmmiter.$emit("messageSend",msg);
                    this.userText.push(msg);
                    this.userMesg="";
                    
                  }
            
        //components:{appUserChatRow}
         }
         
    }
</script>
<style>
 
</style>