import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import CardView from '../views/CardView.vue'
import DetailsView from '../views/DetailsView.vue'

Vue.use(Router)

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
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
    {
      path: '/Characters',
      name: 'Characters',
      component: CardView,
    },
    {
      path: '/Planets',
      name: 'Planets',
      component: CardView,
    },
    {
      path: '/Films/:id',
      name: 'FilmId',
      component: DetailsView,
      props: true,
    },
    {
      path: '/Characters/:id',
      name: 'CharacterId',
      component: DetailsView,
      props: true,
    },
    {
      path: '/Planets/:id',
      name: 'PlanetId',
      component: DetailsView,
      props: true,
    },
  ],

})
