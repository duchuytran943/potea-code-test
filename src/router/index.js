import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue') },
  {
    path: '/error',
    name: 'Error500',
    component: () => import(/* webpackChunkName: "error500" */ '@/views/Error500.vue'),
  },
  {
    path: '/error429',
    name: 'Error429',
    component: () => import(/* webpackChunkName: "error429" */ '@/views/Error429.vue'),
  },
  { path: '*', name: 'Error404', component: () => import(/* webpackChunkName: "error404" */ '@/views/Error404.vue') },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// Middlewares
router.beforeEach((to, from, next) => {
  next();
});

export default router;
