import Vue from 'vue'
import Router from 'vue-router'
import Cars from './views/Cars.vue'
import Mods from './views/Mods.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cars',
      component: Cars
    },
    {
      path: '/mods/:id',
      name: 'mods',
      component: Mods,
      props: true
    }
  ]
})
