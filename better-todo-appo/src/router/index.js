import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Todo from '../components/Todo.vue';
import firebase from '../plugins/firebase';

Vue.use(VueRouter);

const routes = [
  {
    path: '/Login',
    name: 'Login',
    alias: '/',
    component: Login,
    meta: {
      requiresLogin: false,
    },
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,
    meta: {
      requiresLogin: false,
    },
  },
  {
    path: '/Todo',
    name: 'Todo',
    component: Todo,
    meta: {
      requiresLogin: true,
    },
  },
];

const router = new VueRouter({
  mode: 'hash',
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requiresLogin = to.matched.some((record) => record.meta.requiresLogin);
  if (requiresLogin && !await firebase.getCurrentUser()) {
    next('Login');
  } else if (!requiresLogin && await firebase.getCurrentUser()) {
    next('Todo');
  } else {
    next();
  }
});

Vue.$router = router;
export default router;
