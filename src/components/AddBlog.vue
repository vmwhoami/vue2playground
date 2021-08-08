<template>
  <div class="form_container">
  <form class="form flex-column">
    <label for="title">Title</label>
    <input 
    type="text"
     name="title"
      id="title"
      v-model="formData.title"
    >
    <label for="text_field">Content</label>
    <textarea type="text" name="text_field" id="text_field"
    v-model="formData.textField"
    />
  </form>
  <div class="content">
    <p>{{formData.title}}</p>
    <p>{{formData.textField}}</p>

  </div>
  </div>
</template>

<script>
 export default{
  data(){
    return{
      formData:{
        title:"",
        textField:""
      }
    }
  }
 }
</script>

<style scoped>

</style>