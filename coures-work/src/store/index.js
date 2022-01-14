import { createStore } from "vuex";
import chart from "./modues/chart";
import search from "./modues/search";
import recomendet from "./modues/recomendet";
import searchSongText from './modues/searchSongText'
export default createStore({
  state: {
    searchData: "",
  },
  mutations: {
    SET_SEARCHDATA: (state, data) => (state.searchData = data),
  },
  actions: {},
  getters: {
    searchData: (state) => state.searchData
  },
  modules: {
    chart,
    search,
    recomendet,
    searchSongText,
  },
});
