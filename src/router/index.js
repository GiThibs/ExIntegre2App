import { createRouter, createWebHistory } from 'vue-router'
import NextView from '@/views/NextView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:nextSaisonOrder/:nextWeekOrder/:nextDayOrder', // Route avec paramètres variables
      name: 'next',
      component: NextView
    },
    {
      path: '/',
      name: 'saison',
      component: () => import('../views/SaisonsView.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../views/HelpView.vue')
    }
  ]
})

export default router
