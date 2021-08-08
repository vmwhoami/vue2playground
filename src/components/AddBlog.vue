<template>
  <div class="form_container">
  <form class="form flex-column">
    <label for="title">Title</label>
    <input 
    type="text"
     name="title"
      id="title"
      v-model.lazy="formData.title"
    >

    <label for="text_field">Content</label>
    <textarea class="rounded" type="text" name="text_field" id="text_field"
    v-model.lazy="formData.textField"
    ></textarea>
  </form>
  <div class="checkboxes">
    <label for="vitalie"> Vitalie</label>
        <input v-model="formData.checkbox" value="vitalie" type="checkbox" id="vitalie" class="rounded text-pink-500" />
    <label for="ninjas"> Ninjas</label>
           <input v-model="formData.checkbox" value="ninjas" type="checkbox" id="ninjas" class="rounded text-pink-500" />
    <label for="olea"> Olea</label>
      <input v-model="formData.checkbox" value="olea" type="checkbox" id="olea" class="rounded text-pink-500" />
  </div>
  <div class="content">
    <p>{{formData.title}}</p>
    <p>{{formData.textField}}</p>
    <h2>
      CheckBox values:
      <ul>
        <li  v-for="element in formData.checkbox" :key="element">
          {{ element }}
        </li>
      </ul>
    </h2>
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
        checkbox:[]
      }
    }
  }
 }
</script>

<style scoped>

</style>