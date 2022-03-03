import { createRouter, createWebHistory } from "vue-router";
import LineShareBtn from "../components/LineShareBtn.vue";
const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/liff/template",
      component: LineShareBtn,
    },
  ],
});

export default router;
