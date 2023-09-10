import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import ExperiencesView from "../views/ExperiencesView.vue"

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/experiences",
    name: "ExperiencesView",
    component: ExperiencesView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
