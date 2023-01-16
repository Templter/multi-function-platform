import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: '/bench',
      component: null,
      children: []
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue')
    },
    {
      path: '/bench',
      name: 'WorkBench',
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
    console.log('====================================')
    console.log(to)
    console.log('====================================')
    next()
  } else {
    next()
  }
})

export default router
