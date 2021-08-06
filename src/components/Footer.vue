<template>
    <footer>
      {{name}}  {{copyright}}
    </footer>
</template>

<script>
import bus from '../main';
 export default{
     props:{
         name:{
             type:String
         }
     },
     data(){
       return{
           copyright:"Copyright "+new Date().getFullYear()
       }
     },
 created(){
     bus.$on('nameChanged',(data)=>{
         this.name = data
     })
 }
 }
</script>

<style>
 
</style>
