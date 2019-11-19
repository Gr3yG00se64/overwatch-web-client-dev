import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/documentation",
    name: "documentation",
    component: () =>
      import(
        /* webpackChunkName: "documentation" */ "../views/Documentation.vue"
      )
  },
  {
    path: "/settings",
    name: "settings",
    component: () =>
      import(/* webpackChunkName: "settings" */ "../views/Settings.vue")
  },
  {
    path: "/modules",
    name: "modules",
    component: () =>
      import(
        /*'modules', require(*/ "../views/Modules.vue"
      ) /*,
    children: [
    {
      path: "/modules/logger",
      name: "logger",
      component: () =>
        import(/* webpackChunkName: "logger"  "../views/Logger.vue")
    },
    {
      path: "/ids",
      name: "ids",
      component: () =>
        import(/* webpackChunkName: "ids"  "../views/IDS.vue")
    }
    ]
      //() =>
      //import(/* webpackChunkName: "modules"  "../views/Modules.vue") */
  },
  {
    path: "/logger",
    name: "logger",
    component: () =>
      import(/* webpackChunkName: "logger" */ "../views/Logger.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
