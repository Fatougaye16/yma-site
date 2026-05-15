import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('./pages/Home.vue') },
  { path: '/about', name: 'about', component: () => import('./pages/About.vue') },
  { path: '/programs', name: 'programs', component: () => import('./pages/Programs.vue') },
  { path: '/events', name: 'events', component: () => import('./pages/Events.vue') },
  { path: '/gallery', name: 'gallery', component: () => import('./pages/Gallery.vue') },
  { path: '/blog', name: 'blog', component: () => import('./pages/Blog.vue') },
  { path: '/contact', name: 'contact', component: () => import('./pages/Contact.vue') },
  { path: '/register', name: 'register', component: () => import('./pages/Register.vue') },
  { path: '/volunteer', name: 'volunteer', component: () => import('./pages/Volunteer.vue') },
  { path: '/partner', name: 'partner', component: () => import('./pages/Partner.vue') },
  { path: '/:pathMatch(.*)*', name: 'notfound', component: () => import('./pages/NotFound.vue') },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})
