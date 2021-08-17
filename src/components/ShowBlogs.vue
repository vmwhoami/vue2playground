<template>
 <div>
     <h2 >Show blogs</h2>
     <input type="text" v-model="searchField" placeholder="SearchBox" > 
     <li v-theme ="'wide'" v-rainbow v-for="post in posts" :key="post.API">
       <h2>{{post.Category | to-uppercase}}</h2>
       {{post.Description | snippet}}
     </li>
 </div>
</template>

<script>
 export default{
  data(){
    return{
        posts:[],
        blogs:[],
        searchField:''
    }
 },
  created(){
    this.$http.get('https://api.publicapis.org/entries')
    .then(data=>{
       
      this.posts = data.data.entries.slice(0, 30)
        })
  },
   computed:{
     filteredBlogs(){
       return this.blogs.filter((blog)=>{
         return post.Category.match(this.searchField)
       })
     }
   }
 }
</script>
.red
<style scoped>

</style>



