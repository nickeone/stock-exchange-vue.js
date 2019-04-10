import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import {routes} from './routes';
import {store} from './store/store.js';


export const EventBus = new Vue();

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://stock-trader2.firebaseio.com/';

Vue.filter('curency', (value) =>{
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})