<template>
 
</template>

<script>
 export default{
  data(){
  },
  methods:{

  },
  created(){
this.$http.get('https://app.fakejson.com/q')
.then(data=>console.log(data))
  }
 }
</script>

<style scoped>

</style>



