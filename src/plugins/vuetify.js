// src/plugins/vuetify.js

import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#47CDFF",
        secondary: "#f1f1f1",
        anchor: "#8c9eff",
      },
    },
  },
});

export default vuetify;
