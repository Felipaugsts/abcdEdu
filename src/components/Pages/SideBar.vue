<template>
  <v-layout wrap>
    <v-flex class="white">
      <v-card class="card mt-8 d-flex flex-column align-center" flat>
        <v-img src="../../assets/logo.png" class="logo" />
      </v-card>
      <v-card flat class="card">
        <v-list-item-group class="mt-8" v-model="selectedItem" color="primary">
          <v-list-item
            class="pt-6 pb-6"
            v-for="(item, i) in items"
            :key="i"
            active-class="highlighted"
            :to="item.to"
          >
            <v-list-item-icon>
              <v-img
                color="grey ligthen-4"
                :src="require(`../../assets/icons/${item.icon}.png`)"
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
      </v-card>
    </v-flex>

    <v-btn @click="logout()" text elevation="0" class="button pa-7"
      ><v-icon x-large>mdi-logout</v-icon></v-btn
    >
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { text: "Perfil dos Alunos", icon: "icon_face", to: "/" },
        { text: "Prova de Português", icon: "icon_doc" },
        { text: "Atividades Digitais", icon: "icon_test" },
        { text: "Ajuda", icon: "icon_help" },
        { text: "Configurações", icon: "icon_settings" },
      ],
    };
  },
  methods: {
    logout() {
      this.$store.commit("CLEAR_USER_DATA");
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
  bottom: 90px;
  left: 130px;
}
</style>
