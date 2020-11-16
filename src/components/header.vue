<template>
 
        <div class="app__chat__header">
            <p>{{headerName}}</p>
        </div>

</template>
<script>
        export default {
            props:['headerName'],
            data (){
                return{
                    msg:'Добро пожаловать в чат!'
                }
            }
        }
</script>
<style>
 
</style>