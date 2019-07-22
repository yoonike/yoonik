import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "",
    count: 0,
    movieList: {}
  },
  getters: {
    nowTime: state => {
      let date = new Date().getFullYear();
      return `${state.name}   ${date}  ${state.count}`;
    }
  },
  mutations: {
    setMovieList(state, movieList) {
      state.movieList = movieList;
    }
  },
  actions: {
    setMovieList({ commit }, movieList) {
      commit("setMovieList", movieList);
    }
  }
});
