import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/app1',
    name: 'APP1',
    component: () => import('../views/Blank.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
