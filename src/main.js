import Vue from 'vue';
import App from './App.vue'
import './assets/tailwind.css';

Vue.config.productionTip = false

export default new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
