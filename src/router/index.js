import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/Main-view";
import ArtistView from "../views/Artist-view";
import SongText from "../views/SongText";
const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
  },
  {
    path: "/artist",
    name: "artist",
    component: ArtistView,
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
