<template>
 <div>
     <h2 >Show blogs</h2>
     <input type="text" v-model="searchField" placeholder="SearchBox" > 
     <li v-theme ="'wide'" v-rainbow v-for="post in filteredBlogs" :key="post.title">
       <h2>
         <router-link :to="'blog/'+post.id">
         {{post.title | to-uppercase}}
         </router-link>
         </h2>
       <div v-html="post.textField"></div>
       <span>{{post.timeStamp}}</span>
     </li>
 </div>
</template>

<script>
import searchMixin from '../mixins/searchMain';
import purifyText from '../mixins/purifyText';
import {mapState} from 'vuex';
 
 export default{
  data(){
    return{
        posts:[],
        searchField:'',
    }
 },
  created(){
    this.$http
      .get(
        "https://vuejs-18224-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
      ).then(data=>{
        return  data.json()})
        .then(data=>{
          const arrayOfObjects = []
          for (let key in data) {
            data[key].id = key
            arrayOfObjects.push(data[key])
          }
         this.posts = arrayOfObjects;
         console.log(arrayOfObjects);
        })
  }, 
   filters:{
     toUppercase(value){
      return value.toUpperCase();
     }
   },
   directives:{
     'theme':{
        bind: (el, binding)=>{
        if(binding.value == "wide"){
          el.style.maxWidth = "800px";
          el.style.margin = "0 auto";
          el.style.padding = "10px 20px"
        }
      }
     }
   },
   mixins:[searchMixin,purifyText],
   computed: mapState({
       someName:state =>state.propertiesName
     })
     
 }
</script>
.red
<style scoped>

</style>



