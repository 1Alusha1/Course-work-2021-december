import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main";
import Artist from "../views/Artist";
import SongText from "../views/SongText";
const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/artist",
    name: "artist",
    component: Artist,
  },
  {
    path: "/songtext",
    name: "songtext",
    component: SongText,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
