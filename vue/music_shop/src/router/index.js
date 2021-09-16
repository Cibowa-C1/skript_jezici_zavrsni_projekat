import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vinyl from "@/views/Vinyl";
import CD from "@/views/CD";
import NewVinyl from "@/views/NewVinyl";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Welcome from "@/views/Welcome";
import NewCD from "@/views/NewCD";

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/edit',
    name: 'NewVinyl',
    component: NewVinyl
  },
  {
    path: '/vinyl/:id',
    name: 'vinyl',
    component: Vinyl
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/editCD',
    name: 'NewCD',
    component: NewCD
  },
  {
    path: '/cd/:id',
    name: 'cd',
    component: CD
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
