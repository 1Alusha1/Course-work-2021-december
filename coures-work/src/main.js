import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../src/assets/dist/bundle.min.css";
import './assets/load.css'
import './assets/core.css'
import 'animate.css'
createApp(App).use(store).use(router).mount("#app");
