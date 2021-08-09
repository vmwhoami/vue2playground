<template>
  <div class="form_container">
    <form class="form flex-column">
      <label for="title">Title</label>
      <input 
      type="text"
      name="title"
      id="title"
      v-model.lazy="formData.title">

      <label for="text_field">Content</label>
      <textarea 
      class="rounded"
      type="text" 
      name="text_field" 
      id="text_field"
      v-model.lazy="formData.textField"
      ></textarea>

    <div class="checkboxes">
      <label for="vitalie"> Vitalie</label>
      <input v-model="formData.checkbox" value="vitalie" type="checkbox" id="vitalie" class="rounded text-pink-500" />
      <label for="ninjas"> Ninjas</label>
      <input v-model="formData.checkbox" value="ninjas" type="checkbox" id="ninjas" class="rounded text-pink-500" />
      <label for="olea"> Olea</label>
      <input v-model="formData.checkbox" value="olea" type="checkbox" id="olea" class="rounded text-pink-500" />
    </div>

    <div class="selected mr-20">
      <select v-model="formData.author"> 
        <option v-for="author in authors" :key="author">{{author}}</option>
      </select>
    </div>
  </form>

    <div class="content">
      <p>{{formData.title}}</p>
      <p>{{formData.textField}}</p>
      <h2>CheckBox values:</h2>
        <ul>
          <li  v-for="element in formData.checkbox" :key="element">
            {{ element }}
          </li>
        </ul>
        <p>Author: {{formData.author}}</p>
    </div>
  </div>
</template>

<script>
 export default{
  data(){
    return{
      formData:{
        title:"",
        textField:"",
        checkbox:[],
        author: ""
      },
      authors:["Hemingway","Tolstoy","Artos","Bartos"],
    }
  }
 }
</script>

<style scoped>

</style>