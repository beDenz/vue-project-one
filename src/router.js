import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "create",
      component: () => import('./views/Create.vue')
    },
    {
      path: "/list",
      name: "list",
      component: () => import('./views/List.vue')
    },
    {
      path: "/task/:id",
      name: "task",
      component: () => import("./views/Task.vue")
    }
  ]
});