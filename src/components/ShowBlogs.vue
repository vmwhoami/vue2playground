<template>
 <div>
     <h2 >Show blogs</h2>
     <input type="text" v-model="searchField" placeholder="SearchBox" > 
     <li v-theme ="'wide'" v-rainbow v-for="post in filteredBlogs" :key="post.title">
       <h2>{{post.title | to-uppercase}}</h2>
       {{post.textField | snipet}}
     </li>
 </div>
</template>

<script>
import searchMixin from '../mixins/searchMain'
 
 export default{
  data(){
    return{
        posts:[],
        searchField:''
    }
 },
  created(){
    this.$http
      .get(
        "https://vuejs-18224-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
      ).then(data=>{
        return  data.json()})
        .then(data=>{
        console.log(data);
        
        })
  }, 
  
   filters:{
     toUppercase(value){
      return value.toUpperCase();
     }
   },
   directives:{
     'theme':{
        bind: (el, binding)=>{
        if(binding.value == "wide"){
          el.style.maxWidth = "800px";
          el.style.margin = "0 auto";
          el.style.padding = "10px 20px"
        }
      }
     }
   },
   mixins:[searchMixin]
 }
</script>
.red
<style scoped>

</style>



