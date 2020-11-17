<template>
    <div>
         <div class="app__chat__users__header">
            <p>В чате:</p>
             
        </div>
        <div class="app__chat__users__list" >
            <ul>
                 <li>Я</li>
                 <li>Иван Иванов</li>
             </ul>
        </div>
       </div> 
</template>
 
 
<script>
   export default {
            props:['users']
           
        }
  
</script>