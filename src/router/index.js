import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import IButton from '@/views/Button.vue'
import ComTest from '@/views/ComTest.vue'
const FormTest = () => import('@/views/FormTest.vue')
const CheckboxTest = () => import('@/views/CheckboxTest.vue')
const DisplayTest = () => import('@/views/DisplayTest.vue')
const AlertTest = () => import('@/views/AlertTest.vue')
const RenderTest = () => import('@/test/render-test/render1.vue')
const CartTest = () => import('@/views/CartTest.vue')
const TableRender = () => import('@/views/table-render.vue')
const TableSlot = () => import('@/views/table-slot.vue')
const scopeTest = () => import('@/test/slotScopeTest/parent.vue')
const slotTest = () => import('@/test/slot/test.vue')
const dynamicCom = () => import('@/test/dynamicCom/test.vue')
const treeTest = () => import('@/views/treeTest.vue')
const InputNumberTest = () => import('@/views/InputNumberTest.vue')

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
  },
  {
    path: '/renderTest',
    name: 'RenderTest',
    component: RenderTest
  },
  {
    path: '/CartTest',
    name: 'CartTest',
    component: CartTest
  },
  {
    path: '/table',
    name: 'TableRender',
    component: TableRender
  },
  {
    path: '/table-slot',
    name: 'TableSlot',
    component: TableSlot
  },
  {
    path: '/slot-scoped',
    name: 'scopeTest',
    component: scopeTest
  },
  {
    path: '/slot-test',
    name: 'slotTest',
    component: slotTest
  },
  {
    path: '/dynamic',
    name: 'dynamicCom',
    component: dynamicCom
  },
  {
    path: '/treeTest',
    name: 'treeTest',
    component: treeTest
  },
  {
    path: '/inputNumberTest',
    name: 'InputNumberTest',
    component: InputNumberTest
  }
]

const router = new VueRouter({
  routes
})

export default router
