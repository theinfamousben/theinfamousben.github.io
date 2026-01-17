import { createRouter, createWebHistory } from 'vue-router'

// Import page components
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import ProjectsPage from '@/pages/ProjectsPage.vue'
import ContactPage from '@/pages/ContactPage.vue'

// Import individual project pages
import mcpkgPage from '@/pages/projects/mcpkgPage.vue'
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
    path: '/projects/mcpkg',
    name: 'mcpkg',
    component: mcpkgPage
  },
  {
    path: '/projects/tachyogenesis',
    name: 'Tachyogenesis',
    component: TachyogenesisPage
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
