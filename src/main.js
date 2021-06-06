import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import './plugins/chartist';
import './plugins/base';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');

// Filters
Vue.filter('shorten', value => {
  if (value.length > 120) {
    return `${value.substring(0, 120)}...`;
  }
  return value;
});
