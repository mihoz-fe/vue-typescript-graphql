import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUser from '../views/AboutUser.vue'
import CreateUser from '../views/CreateUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about-user',
      name: 'aboutUser',
      component: AboutUser
    },
    {
      path: '/create-user',
      name: 'createUser',
      component: CreateUser
    },
  ]
})

export default router
