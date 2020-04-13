import Vue from "vue";
import VueRouter from "vue-router";
import login from "../pages/Login.vue";
import register from "../pages/Register.vue";
import profile from "../pages/profile.vue";
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/register",
      name: "register",
      component: register
    },
    {
      path: "/profile",
      name: "profile",
      component: profile
    }
  ]
});
export default router;
