import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/layout',
      name: '',
      component: null,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/login/index.vue')
        },
        {
          path: '/WorkBench',
          name: 'WorkBench',
          component: () => import('../views/bench/index.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.path == 'login') {
    console.log(to, from, next)
  }
  next()
})

export default router
