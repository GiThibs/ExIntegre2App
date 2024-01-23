import { createRouter, createWebHistory } from 'vue-router'
import NextView from '@/views/NextView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:nextSaisonOrder/:nextWeekOrder/:nextDayOrder',
      name: 'next',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: NextView
    },
    {
      path: '/',
      name: 'saison',
      // route level code-splitting
      // this generates a sesparate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SaisonsView.vue')
    },
    {
      path: '/help',
      name: 'help',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HelpView.vue')
    }
  ]
})

export default router
