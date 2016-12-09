import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerMap from './router.js'

Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({routes: routerMap})

const app = new Vue({
  router
}).$mount('#app');
