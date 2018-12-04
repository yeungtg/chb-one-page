import Vue from 'vue'
import Router from 'vue-router'
// import AuthRouter from '@/utils/auth.router'
import App from '@/views/app.vue'
import homeRouter from '@/views/home'
Vue.use(Router)

// 根路由
let rootRouter = [{
    path: '/app/home',
    component: App,
    meta: {
      title: "工人之家"
    },
    children: [
      homeRouter
    ]
  },
  // 重定向路由必须放所有路由最下面
  {
    path: '*',
    redirect: '/app/home'
  }
]

// 暂时不做路由区分
let mode = 'history'
export default new Router({
  mode: mode,
  routes: rootRouter
})
