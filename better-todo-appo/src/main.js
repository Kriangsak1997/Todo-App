import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
// this is so frustratiing hellpkidasai
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
