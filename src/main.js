import Vue from 'vue';
import App from './App.vue'
import './assets/tailwind.css';
import VueResource from 'vue-resource';
 

Vue.config.productionTip = false
Vue.use(VueResource);
// Custom directive
Vue.directive("rainbow", {
  bind: (el)=>{  
    el.style.backgroundColor = `#${Math.random().toString().slice(2,8)}`;  
    el.style.color = `white`;
    el.style.listStyleType = "none";
  },   
});

Vue.directive("theme", {
  bind: (el, binding)=>{
    if(binding.value == "wide"){
      el.style.maxWidth = "800px";
      el.style.margin = "0 auto";
      el.style.padding = "10px 20px"
    }
  }
})

// Custom filters
Vue.filter("to-uppercase", (value)=>{ 
  return value.toUpperCase();
}
)

export default new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
