import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Todo from '../components/Todo.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/Login',
    name: 'Login',
    alias: '/',
    component: Login,
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/Todo',
    name: 'Todo',
    component: Todo,
  },
];

const router = new VueRouter({
  mode: 'hash',
  routes,
});

export default router;
