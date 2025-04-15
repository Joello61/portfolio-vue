import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/skills',
    name: 'Skills',
    // Chargement paresseux pour optimiser les performances
    component: () => import('../views/SkillsPage.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/ProjectsPage.vue')
  },
  {
    path: '/experience',
    name: 'Experience',
    component: () => import('../views/ExperiencePage.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactPage.vue')
  },
  // Route de redirection pour les pages non trouvées
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // Scroll en haut lors du changement de page
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router