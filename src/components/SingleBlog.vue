<template>
  <div id="single-blog">
       <h1>{{blog.id}}</h1>
      <article v-html="blog.textField">{{blog.textField}}</article>
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
        console.log("this is running");
         this.$http.get(`https://vuejs-18224-default-rtdb.europe-west1.firebasedatabase.app/posts/${this.id}/.json`)
         .then(data=>{
             console.log(data);
        return  data.json()})
        .then(data=>{
          this.blog = data
        })
    }
}
</script>

<style>

</style>