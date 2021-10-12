import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import router from '../router/index'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: sessionStorage.getItem("user") || "",
    loading: false,
    loadedStudents: [],
    success: false,
    authsuccess: null,
  },
  getters: {
    loading (state) {
      return state.loading
    },
    success (state) {
      return state.success
    },
    loadedstudents (state) {
      return state.loadedStudents
    },
    authsuccess(state) {
      return state.authsuccess
    }
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    },

    success_created(state, payload) {
      state.success = payload
      setTimeout(function () {
        state.success = false
    }.bind(this), 2000)
      
    },


    SET_USERDATA(state, userData) {
      sessionStorage.setItem("user", JSON.stringify(userData));
      state.user = userData;
      },

    CLEAR_USER_DATA() {
      sessionStorage.clear();
      localStorage.clear();
      location.reload();
    },

    AUTH_ERR(state, payload) {
      state.authsuccess = payload
    },

    setLoadedstudents (state, payload) {
      state.loadedStudents = payload
    },

  },
  actions: {

    createStudent({ commit }, payload) {
      commit('setLoading', true)
      const newStudent = {
        nome: payload.nome,
        escolaridade: payload.escolaridade,
        avatar: payload.avatar,
        escola: payload.escola,
        // creatorId: getters.user.id
      }
      firebase.database().ref('Alunos').push(newStudent)
        .then((data) => {
          const key = data.key
          console.log("student key", key)
          commit('setLoading', false)
          commit('success_created', true)
        })
        .catch((error) => {
          console.log(error)
        })
      // Reach out to firebase and store it
    },

    loadStudents({ commit }) {
      commit("setLoading", true);
      firebase
        .database()
        .ref("Alunos")
        .once("value")
        .then((data) => {
          const students = [];
          const obj = data.val();
          for (let key in obj) {
            students.push({
              id: key,
              nome: obj[key].nome,
              avatar: obj[key].avatar,
              escola: obj[key].escola,
              escolaridade: obj[key].escolaridade,
            });
            console.log('students', students)
          }
          commit("setLoadedstudents", students);
          commit("setLoading", false);
        })
        .catch((error) => {
          console.log(error);
          commit("setLoading", false);
        });
    },

    signUserIn({ commit }, payload) {
      console.log(payload[0].email)
      commit("setLoading", true);
      firebase
        .auth().signInWithEmailAndPassword(payload[0].email, payload[0].password)
        .then((user) => {
          commit("setLoading", false);
          console.log(user)
          commit('SET_USERDATA', user)
          router.push('/')
          commit('AUTH_ERR', false)
        })
        .catch((error) => {
          commit("setLoading", false);
          commit('AUTH_ERR', true)
          console.log(error);
        });
    },

    autoSignIn ({commit}, payload) {
      commit('SET_USERDATA', {id: payload.uid})
    },

    logout ({commit}) {
      firebase.auth().signOut()
      commit('CLEAR_USER_DATA')
    },
  },
  modules: {},
});
