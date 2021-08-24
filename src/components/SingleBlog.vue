<template>
  <div id="single-blog">
      <h1></h1>
      <article></article>
  </div>
</template>

<script>
export default {
    data(){
        return{
            id:this.$route.params.id,
            blog:{}
        }
    },
    created(){
        //This wont work cause this route doesn't work like that
        this.$http.get(`https://api.publicapis.org/entries/${this.id}`)
    }
}
</script>

<style>

</style>