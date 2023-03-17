import { createRouter, createWebHistory } from "vue-router";

import NotFoundPage from "../pages/NotFoundPage.vue";

import HomePage from "../pages/HomePage.vue";
import ProjectList from "../pages/ProjectList.vue";
import ProjectDetail from "../pages/ProjectDetail.vue";
import TypeProjects from "../pages/TypeProjects.vue";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  linkExactActiveClass: "active",
  routes: [
    { path: "/", name: "home", component: HomePage },
    { path: "/project", name: "project", component: ProjectList },
    {
      path: "/projects/:slug",
      name: "project-detail",
      component: ProjectDetail,
    },
    {
      path: "/types/:id/projects",
      name: "type-projects",
      component: TypeProjects,
    },

    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundPage },
  ],
});

export { router };
