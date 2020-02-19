import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import IButton from '@/views/Button.vue'
import ComTest from '@/views/ComTest.vue'
const FormTest = () => import('@/views/FormTest.vue')
const CheckboxTest = () => import('@/views/CheckboxTest.vue')
const DisplayTest = () => import('@/views/DisplayTest.vue')
const AlertTest = () => import('@/views/AlertTest.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/button',
    name: 'button',
    component: IButton
  },
  {
    path: '/comTest',
    name: 'ComTest',
    component: ComTest
  },
  {
    path: '/formTest',
    name: 'FormTest',
    component: FormTest
  },
  {
    path: '/checkboxTest',
    name: 'CheckboxTest',
    component: CheckboxTest
  },
  {
    path: '/displayTest',
    name: 'DisplayTest',
    component: DisplayTest
  },
  {
    path: '/alertTest',
    name: 'AlertTest',
    component: AlertTest
  }
]

const router = new VueRouter({
  routes
})

export default router
