import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/home",
    component: () => import("@/views/index"),
    children: [
      {
        path: "/home",
        name: "/home",
        component: () => import("@/views/index/home"),
      },
      {
        path: "/course",
        name: "/course",
        component: () => import("@/views/index/course"),
      },
      {
        path: "/info",
        name: "/info",
        component: () => import("@/views/index/info"),
      },
      {
        path: "/book",
        name: "/book",
        component: () => import("@/views/index/book"),
      },
      {
        path: "/mine",
        name: "/mine",
        component: () => import("@/views/index/mine"),
      }
    ]
  },
  {
    path: "/login",
    component: () => import("@/views/login")
  },
  {
    path: "/register",
    component: () => import("@/views/register")
  },
  {
    path: "/setup",
    component: () => import("@/views/setup")
  },
  {
    path: "/pwd",
    component: () => import("@/views/pwd")
  },
  {
    path: "/gift",
    component: () => import("@/views/gift")
  },
  {
    path: "/mywork",
    component: () => import("@/views/mywork")
  },
  {
    path: "/detail",
    component: () => import("@/views/detail")
  },
  {
    path: "/classnew",
    component: () => import("@/views/classnew")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
