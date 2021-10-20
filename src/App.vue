<template>
  <v-app>
    <Sidebar v-if="user" />
    <v-main class="grey lighten-4">
      <router-view />
    </v-main>
    <p class="fixedText">© 2020 EduEdu, todos os direitos reservados</p>
  </v-app>
</template>

<script>
import Sidebar from "@/components/SideBar.vue";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Sidebar,
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>
<style scoped>
.fixedText {
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 10;
  color: #afafaf;
}
</style>
