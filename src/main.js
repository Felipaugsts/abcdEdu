import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./base";
import firebase from "firebase";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("user signed in");
        this.$store.dispatch("autoSignIn", user);
      } else {
        this.store.dispatch("logout");
      }
    });
  },
}).$mount("#app");
