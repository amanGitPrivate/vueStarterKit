import Vue from "vue"
import Router from "vue-router"
import Skills from "../components/Skills/Skills.vue"
import About from "../components/About/About.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "skills",
      component: Skills
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
})