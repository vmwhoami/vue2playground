<template>
 <div>
     <h2>Show blogs</h2>
 </div>
</template>

<script>
 export default{
  data(){
    return{
        blogs:[]
    }
 },
  created(){
    this.$http.get('https://api.publicapis.org/entries')
    .then(data=>console.log(data))
  }
 }
</script>

<style scoped>

</style>



