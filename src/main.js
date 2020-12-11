import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuelidate from 'vuelidate'
import axios from 'axios';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Vuelidate);

const user = store.state.auth.user;
if (user) {
  if(user.accessToken){
    axios.defaults.headers.common['x-access-token'] = user.accessToken;
  }
}

axios.interceptors.response.use(undefined, function (error) {
  if (error) {
    const originalRequest = error.config;
    if ((error.response.status === 401 || error.response.status === 404||error.response.status === 400) && !originalRequest._retry) {
        console.log(error.response,originalRequest,"error");
        originalRequest._retry = true;
        store.dispatch('ShowMessage',error.response.data.message);
        store.dispatch('LogOut');
        return router.push('/sign-in');
    }
    
  }
});


axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:3000/api/';


Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
