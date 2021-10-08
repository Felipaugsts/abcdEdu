import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import * as firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyA84AEy8PeTaZsyl1Ja_f-UDGhwRoS08xI",
  authDomain: "eduedu-53743.firebaseapp.com",
  projectId: "eduedu-53743",
  storageBucket: "eduedu-53743.appspot.com",
  messagingSenderId: "475409073655",
  appId: "1:475409073655:web:51079b5360d48a34f25af2",
  measurementId: "G-PD4LC3NF3B"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;




Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");