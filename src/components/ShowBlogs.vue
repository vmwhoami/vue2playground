<template>
 <div>
     <h2 >Show blogs</h2>
     <input type="text" v-model="searchField" placeholder="SearchBox" > 
     <li v-theme ="'wide'" v-rainbow v-for="post in filteredBlogs" :key="post.API">
       <h2>{{post.API | to-uppercase}}</h2>
       {{post.Description | sniped}}
     </li>
 </div>
</template>

<script>
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
      this.posts = data.data.entries.slice(0, 30)
        })
  },
   computed:{
     filteredBlogs(){
       return this.posts.filter((post)=>{
         return post.Description.toLowerCase().match(this.searchField.toLowerCase())
       })
     }
   }
 }
</script>
.red
<style scoped>

</style>



