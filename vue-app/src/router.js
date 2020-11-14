import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
        path: "/home",
        name: "home",
        meta: {
          title: "Home Page",
        },
        component: () =>
          import(/* webpackChunkName: "home" */ "./views/Home.vue"),
    },
    {
        path: "/view-orders",
        name: "view-orders",
        meta: {
          title: "View Orders",
        },
        component: () =>
          import(/* webpackChunkName: "home" */ "./views/OrderView.vue"),
    },
    {
        path: "/",
        redirect: "/home",
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
