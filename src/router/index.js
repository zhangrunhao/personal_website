import Vue from 'vue';
import VueRouter from 'vue-router'
import Home from '../view/home/index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: '/',
      component: Home,
    }
  ]
})

export default router