import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import BreedDetails from '../views/BreedDetails.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/breed_details/:index',
    name: 'BreedDetails', 
    component: BreedDetails,
    props: true,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: "/",
  routes
})

export default router
