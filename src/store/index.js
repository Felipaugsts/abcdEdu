import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Auth: JSON.parse(sessionStorage.getItem("user")),
    token: sessionStorage.getItem("user") || "",
  },
  mutations: {
    SET_USERDATA(state, userData) {
      sessionStorage.setItem("user", JSON.stringify(userData));
      const user_token = JSON.parse(sessionStorage.getItem("user"));
      state.token = user_token.stsTokenManager.accessToken;
    },

    CLEAR_USER_DATA() {
      sessionStorage.clear();
      localStorage.clear();
      location.reload();
    },
  },
  actions: {},
  modules: {},
});
