import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import * as firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyDTy9nHvdoNz8dt7oVEyvI0n6YNGnUPd5E",
  authDomain: "eduedu1-221f6.firebaseapp.com",
  projectId: "eduedu1-221f6",
  storageBucket: "eduedu1-221f6.appspot.com",
  messagingSenderId: "201362118305",
  appId: "1:201362118305:web:7826b233d904958c6ec2e0",
  measurementId: "G-QGHZ77T49S",
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
