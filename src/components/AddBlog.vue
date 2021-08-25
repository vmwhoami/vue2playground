<template>
  <div class="form_container">
    <form class="form flex-column">
      <label for="title">Title</label>
      <input 
      type="text"
      name="title"
      id="title"
      v-model.lazy="blog.title">

      <label for="text_field">Content</label>
      <textarea 
      class="rounded"
      type="text" 
      name="text_field" 
      id="text_field"
      v-model.lazy="blog.textField"
      ></textarea>

    <div class="checkboxes">
      <label for="vitalie"> Vitalie</label>
      <input v-model="blog.checkbox" value="vitalie" type="checkbox" id="vitalie" class="rounded text-pink-500" />
      <label for="ninjas"> Ninjas</label>
      <input v-model="blog.checkbox" value="ninjas" type="checkbox" id="ninjas" class="rounded text-pink-500" />
      <label for="olea"> Olea</label>
      <input v-model="blog.checkbox" value="olea" type="checkbox" id="olea" class="rounded text-pink-500" />
    </div>

    <div class="selected mr-20">
      <select v-model="blog.author"> 
        <option v-for="author in authors" :key="author">{{author}}</option>
      </select>
    </div>
    <button 
    class="bg-red-200 px-4 py-2 rounded hover:bg-purple-300" 
    @click.prevent="submitForm" 
    type="submit">
      Submit
    </button>
  </form>

    <div class="content">
      <p>{{blog.title}}</p>
      <p>{{blog.textField}}</p>
      <h2>CheckBox values:</h2>
        <ul>
          <li  v-for="element in blog.checkbox" :key="element">
            {{ element }}
          </li>
        </ul>
        <p>Author: {{blog.author}}</p>
    </div>
  </div>
</template>

<script>
 export default{
  data(){
    return{
      blog:{
        title:"",
        textField:"",
        checkbox:[],
        author: ""
      },
      authors:["Hemingway","Tolstoy","Artos","Bartos"],
      submitted: false
    }
  },
  methods:{
    submitForm(){
      console.log(this.blog);
      this.$http.post("https://vuejs-18224-default-rtdb.europe-west1.firebasedatabase.app/posts.json", this.blog)
      .then((data)=>{
        this.submitted = true
       console.log(data)
        }).catch((err)=>console.log(err))
    }
  },

 }
</script>

<style scoped>

</style>