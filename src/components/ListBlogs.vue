<template>
 <div>
     <h2 >List blogs</h2>
     <input type="text" v-model="searchField" placeholder="SearchBox" > 
     <li v-theme ="'wide'" v-rainbow v-for="post in filteredBlogs" :key="post.API">
       <h2>{{post.API | to-uppercase}}</h2>
      
     </li>
 </div>
</template>

<script>
import searchMixin from '../mixins/searchMain';
 export default{
  data(){
    return{
        posts:[],
        searchField:''
    }
 },
  created(){
    this.$http.get('https://api.publicapis.org/entries')
    .then(data=>{
      this.posts = data.data.entries.slice(0, 5)
        })
  },
   computed:{
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



