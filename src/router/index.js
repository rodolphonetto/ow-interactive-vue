import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/Cart.vue")
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../views/Checkout.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
