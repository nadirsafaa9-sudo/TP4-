import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import JobDetail from '../components/JobDetail.vue'
import EditJob from '../components/EditJob.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/jobs/:id', component: JobDetail },
  { path: '/edit/:id', component: EditJob }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
