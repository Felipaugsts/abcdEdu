import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Auth: JSON.parse(sessionStorage.getItem("user")),
    token: "",
  },
  mutations: {
    SET_USERDATA(state, userData) {
      sessionStorage.setItem("user", JSON.stringify(userData));
      const user_token = JSON.parse(sessionStorage.getItem("user"));
      state.token = user_token.stsTokenManager.accessToken;
    },
  },
  actions: {},
  modules: {},
});
