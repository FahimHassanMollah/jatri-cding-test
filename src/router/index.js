import { createRouter, createWebHistory } from 'vue-router'
import PageNotFound from '../components/partials/PageNotFound.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/Home.vue'),
    
    },
    {
      path: '/products',
      name: 'productList',
      component: () => import('../views/products/ProductList.vue'),
    
    
    },
  
    { path: '/:pathMatch(.*)*',name:'notFound', component: PageNotFound },
  ]
})





export default router
