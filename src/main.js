import Vue from 'vue';
import App from './App.vue'
import './assets/tailwind.css';
import VueResource from 'vue-resource';
 

Vue.config.productionTip = false
Vue.use(VueResource);
// Custom directive
Vue.directive("rainbow", {
  bind: function(el) {  
    el.style.backgroundColor = `#${Math.random().toString().slice(2,8)}`;  
    el.style.color = `#${Math.random().toString().slice(2,8)}`;
  },   
});

export default new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
