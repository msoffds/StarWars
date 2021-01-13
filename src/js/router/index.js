import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import CardView from '../views/CardView.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Films',
      name: 'Films',
      component: CardView,
    },
  ],
});
