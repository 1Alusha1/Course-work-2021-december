import { createStore } from 'vuex';
import chart from './modues/chart';
import search from './modues/search';
import recomendet from './modues/recomendet';
import searchSongText from './modues/searchSongText';
export default createStore({
  state: {
    searchData: '',
    burger: false,
  },
  mutations: {
    SET_SEARCHDATA: (state, data) => (state.searchData = data),
    SET_BURGER: (state) => (state.burger = !state.burger),
  },
  actions: {},
  getters: {
    searchData: (state) => state.searchData,
    burger: (state) => state.burger,
  },
  modules: {
    chart,
    search,
    recomendet,
    searchSongText,
  },
});
