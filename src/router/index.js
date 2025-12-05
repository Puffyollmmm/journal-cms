import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IndexPage from '@/views/IndexPage.vue'
import HomePage from '@/views/HomePage.vue'
import IndexPagesecond from '@/views/IndexPagesecond.vue'
import Hotel from '@/views/Hotel.vue'
import HotelSecond from '@/views/HotelSecond.vue'
import LoginPage from '../views/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginPage.vue'),
    },
  ],
})

export default router
