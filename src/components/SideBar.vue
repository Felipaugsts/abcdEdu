<template>
  <div>
    <v-app-bar app flat color="transparent">
      <v-icon class="ma-4" x-large color="primary" @click="drawer = !drawer" v-if="!drawer"
        >mdi-menu</v-icon
      >
      <v-spacer></v-spacer>
      <v-img src=".././assets/logo.png" class="mobile_logo ma-4 hidden-sm-and-up" />
    </v-app-bar>
    <v-navigation-drawer :permanent="$vuetify.breakpoint.mdAndUp" width="400px" v-model="drawer" app>
      <v-icon
        @click="drawer = !drawer"
        
        class="float-right ma-6 hidden-sm-and-up"
        v-if="drawer === true"
        color="grey"
        >mdi-close</v-icon
      >
      <v-card class="mt-8 d-flex flex-column align-center" flat>
        <v-img src=".././assets/logo.png" class="logo" />
      </v-card>
      <v-list-item-group class="mt-8" color="primary">
        <v-list-item
          class="pt-6 pb-6"
          v-for="(item, i) in items"
          :key="i"
          active-class="highlighted"
          :to="item.to"
          disabled
        >
          <v-list-item-icon>
            <v-img
              color="grey ligthen-4"
              :src="require(`./../assets/icons/${item.icon}.png`)"
            />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              class="item-list"
              v-text="item.text"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <v-list-item-group>
        <v-list-item
          @click="logout()"
          class="pt-6 pb-6"
          active-class="highlighted"
        >
          <v-list-item-icon>
            <v-icon x-large color="grey ligthen-4">mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="item-list grey--text">
              Sair
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { text: "Perfil dos Alunos", icon: "icon_face", to: "/" },
        { text: "Prova de Português", icon: "icon_doc" },

        { text: "Configurações", icon: "icon_settings" },
      ],
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },

};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,400;1,300&display=swap");

.card {
  max-width: 500px;
}
.logo {
  max-width: 180px;
}
.mobile_logo { 
    max-width: 60px;
}
.highlighted {
  background: #47cdff;
  color: white !important;
}
.item-list {
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 37px;
  letter-spacing: 0em;
  text-align: left;
}
.button {
  position: absolute;
  bottom: 20px;
  left: 130px;
}
</style>
