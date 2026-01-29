import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { title: 'About' }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/PortfolioView.vue'),
    meta: { title: 'Portfolio' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: { title: 'Contact' }
  },
  {
    path: '/education',
    name: 'education',
    component: () => import('../views/EducationView.vue'),
    meta: { title: 'Education' }
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/ServicesView.vue'),
    meta: { title: 'Services' }
  },
  {
    path: '/read/:slug/:id',
    name: 'articleDetail',
    component: () => import('../views/ArticleView.vue'),
    meta: { title: 'Blog' }
  },
  {
    path: '/project/:id',
    name: 'projectDetail',
    component: () => import('../views/ProjectDetailView.vue'),
    meta: { title: 'Project' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + ' - Reda Shalabi'; // Mengambil judul dari meta atau mengatur judul default jika tidak ada
  next();
});

export default router
