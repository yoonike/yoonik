import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    name: "tangtang1024",
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false }
    ]
  },
  getters: {
    nowTime: state => {
      let date = new Date().getFullYear();
      return `${state.name}   ${date}  ${state.count}`;
    }
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.count;
    }
  },
  actions: {}
});
