import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/Login'
import GlobalLayout from '../components/common/GlobalLayout'
import HomePage from '../components/common/HomePage'
import TestComponent from '../components/system/TestComponent'
import UserManage from '../components/system/UserManage'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: GlobalLayout,
    redirect: '/homepage',
    children: [
      {
        path: '/homepage',
        component: HomePage
      },
      {
        path: '/sys/test',
        component: TestComponent
      },
      {
        path: '/sys/user',
        component: UserManage
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
