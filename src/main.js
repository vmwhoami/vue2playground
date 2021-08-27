import Vue from 'vue';
import App from './App.vue'
import './assets/tailwind.css';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Routes from './routes';
import CKEditor from '@ckeditor/ckeditor5-vue2';

Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use( CKEditor );
const router = new VueRouter({
  routes: Routes,
  mode:'history' 
});
// Custom directive
Vue.directive("rainbow", {
  bind: (el)=>{  
    el.style.backgroundColor = `#${Math.random().toString().slice(2,8)}`;  
    el.style.color = `white`;
    el.style.listStyleType = "none";
  },   
});

// Vue.directive("theme", {
//   bind: (el, binding)=>{
//     if(binding.value == "wide"){
//       el.style.maxWidth = "800px";
//       el.style.margin = "0 auto";
//       el.style.padding = "10px 20px"
//     }
//   }
// })

// Custom global filters
// Vue.filter("to-uppercase", (value)=>{ 
//   return value.toUpperCase();
// })
Vue.filter("snipet", (value)=>{
  return `${value.split(' ').slice(0,3).join(' ')}...`;

})

export default new Vue();

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
