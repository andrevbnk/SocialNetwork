import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Secure from '@/views/Secure.vue';
import store from "../store";
import UserProfile from '@/components/Profile/UserProfile.vue';
import EditProfile from '@/components/Profile/EditProfile.vue';
import Posts from '@/components/Posts.vue';

Vue.use(VueRouter);
 
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'profile/:id',
        name:'profile',
        component: UserProfile
      },
      {
        path: 'posts/:id',
        name:'posts',
        component: Posts
      }, 
      {
        path: 'edit',
        name:'edit',
        component: EditProfile,
        meta: { requiresAuth: true },
      },     
      
    ]
  },
  {
    path: '/sign-form',
    name: 'SignForm',
    component: () => import('@/views/SignForm.vue'),

    children: [  
      {
        path: 'sign-up',
        name: 'SignUp',
        component: () => import(/* webpackChunkName: "about" */ '@/components/SignForm/SignUpForm.vue'),
        meta: { isAuth: true },
      },
      {
        path: 'sign-in',
        name: 'SignIn',

        meta: { isAuth: true },
        component: () => import(/* webpackChunkName: "about" */ '@/components/SignForm/SignInForm.vue'),
      },
      
    ],
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
    next("/sign-form/sign-in");
  } else {
    next();
  }

  if (to.matched.some((record) => record.meta.isAuth)) {
    if (store.getters.isAuthenticated) {
      return router.push({name:'Home'}).catch(()=>{});
    }
    next();
  }

});

export default router
