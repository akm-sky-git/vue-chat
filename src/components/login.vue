<template>
<div class="app__chat">
<div class="app__chat__cont">
            <div class="app__login">
                <div class="header">
                    <p>Имя:</p>
                    
                </div>
                <div class="content" >
                    
                            
                            <input type="text" v-model="name" placeholder="Введите имя"/>
                            
                            <router-link tag="button" to='/chat'> Войти в чат </router-link>
                        
                    
                </div>
            </div> 
       </div>
    </div> 
</template>
 
 
<script>
   export default {
        data:function(){
            return{
                name:""
            }
              
        },
          methods:{
              handleSubmit(e){
                   e.preventDefault()
                   this.$http('/chat', {
                              name: this.name,
                      
                       })
              }
          }
           
        }
  
</script>