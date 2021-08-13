<template>
 <div>
     <h2 >Show blogs</h2>
     <li v-theme ="'wide'" v-rainbow v-for="post in posts" :key="post.API">{{post.Description}}</li>
 </div>
</template>

<script>
 export default{
  data(){
    return{
        posts:[],
        blogs:[]
    }
 },
  created(){
    this.$http.get('https://api.publicapis.org/entries')
    .then(data=>{
      this.posts = data.data.entries.slice(0, 10)
        })
  }
 }
</script>
.red
<style scoped>

</style>



