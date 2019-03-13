import Vue from 'vue'
import Router from 'vue-router'
import Home from "./layout/Home.vue";
Vue.use(Router)

export const constantRouterMap = [{
  path: '/',
  component: Home,
  redirect: 'add',
  hidden: true,
  children: [{
    path: 'add',
    name: 'add',
    component: () => import('./views/add.vue')
  },{
    path: 'search',
    name: 'search',
    component: () => import('./views/search.vue')
  }]
}]

const routes = [...constantRouterMap];


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
