import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Secure from '@/views/Secure.vue';
import store from "../store";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign-up',
    name: 'SignUp',

    component: () => import(/* webpackChunkName: "about" */ '@/views/SignForm.vue')
  },

  {
    path: '/sign-in',
    name: 'SignIn',

    component: () => import(/* webpackChunkName: "about" */ '@/views/SignForm.vue')
  },
  {
    path: '/secure',
    name: 'Secure',
    component: Secure,
    meta: { requiresAuth: true },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/sign-in");
  } else {
    next();
  }
});

export default router
