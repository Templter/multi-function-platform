import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes : [
    {
      path: '/',
      name: 'layout',
      redirect: 'redirectMicro',
      component: null,
      children: []
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/bench/index.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    //不允许手动跳转登录页
    // if (LSH.getItem('userInfo')) {
    //   next({
    //     name: 'redirectMicro'
    //   })
    //   return
    // }
    next()
  } else {
    if (to.path !== '/systemManagement' && sessionStorage.getItem('sysCode')) {
      sessionStorage.removeItem('sysCode')
    }
    next()
  }
})

export default router
