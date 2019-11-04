import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/tests"
  },
  {
    path: "/tests",
    name: "tests",
    component: () =>
      import(/* webpackChunkName: "tests" */ "../views/TestList.vue")
  },
  {
    path: "/test/:id",
    name: "test",
    props: true,
    component: () =>
      import(/* webpackChunkName: "test" */ "../views/TestResults.vue")
  },
  {
    path: "/insights",
    name: "insights",
    component: () =>
      import(/* webpackChunkName: "insights" */ "../views/Insights.vue")
  },
  {
    path: "/metrics",
    name: "metrics",
    component: () =>
      import(/* webpackChunkName: "metrics" */ "../views/Metrics.vue")
  },
  {
    path: "/present",
    name: "present",
    component: () =>
      import(/* webpackChunkName: "present" */ "../views/Present.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
