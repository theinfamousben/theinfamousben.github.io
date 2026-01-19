import { createRouter, createWebHistory } from 'vue-router'

// Import page components
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import ProjectsPage from '@/pages/ProjectsPage.vue'
import ContactPage from '@/pages/ContactPage.vue'

// Import individual project pages
import clicraftPage from '@/pages/projects/clicraftPage.vue'
import TachyogenesisPage from '@/pages/projects/TachyogenesisPage.vue'

// Define routes - add new pages here
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsPage,
  },
  // Individual project pages - add new projects here
  {
    path: '/projects/clicraft',
    name: 'clicraft',
    component: clicraftPage,
  },
  {
    path: '/projects/tachyogenesis',
    name: 'Tachyogenesis',
    component: TachyogenesisPage,
  },

  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
