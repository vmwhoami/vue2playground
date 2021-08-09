import Vue from 'vue';
import App from './App.vue'
import './assets/tailwind.css';
import VueResource from 'vue-resource';

Vue.config.productionTip = false
Vue.use(VueResource);

export default new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
