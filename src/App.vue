<template>
  <div id="app">
    <my-nav :links="links" :logo="name" v-on:changeName="changeName($event)"></my-nav>
    <add-blog></add-blog>
    <my-footer :name="name" ></my-footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import AddBlog from './components/AddBlog.vue'
const links = [
  {id:1,name:"Home",link:"/home"},
  {id:2,name:"About",link:"/about"},
  {id:3,name:"Contact US",link:"/contact-us"},
  ]
export default {
  name: 'App',
  components: {
    'my-nav':Navbar,
    'my-footer':Footer,
    'add-blog':AddBlog
  },
  data(){
    return{
      name:"Vitalie",
      links
    }
  },
  methods:{
    changeName(newname){
       this.name = newname
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
