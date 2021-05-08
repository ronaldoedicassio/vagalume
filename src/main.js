import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';

import Login from './components/Login';
import Main from './components/Main';

Vue.use(VueRouter)

Vue.prototype.$eventHub = new Vue(); // Criando um canal de eventos entre componentes

const router = new VueRouter({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login,
    },
    {
      name: 'main',
      path: '/main',
      component: Main,
    }
  ],
});

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
