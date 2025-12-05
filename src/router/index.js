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
      component: HomeView,
      meta: {
        fullscreen: true
      }
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
      meta: {
        fullscreen: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
    },
  ],
})

export default router
