import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';

import Login from './components/Login';
import Main from './components/Main';

Vue.use(VueRouter)

Vue.prototype.$http = axios; // Configurando o axios para intereção com o backend
Vue.prototype.$eventHub = new Vue(); // Criando um canal de eventos entre componentes

const router = new VueRouter({
  routes: [
    // Lista de rotas permitidas no sistema
    { name: 'login', path: '/login', component: Login, },
    { name: 'main', path: '/main', component: Main, }
  ],
});

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
