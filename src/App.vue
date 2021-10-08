<template>
  <v-app>
    <Sidebar v-if="this.$store.state.token" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "@/components/Pages/SideBar.vue";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Sidebar,
  },
};
</script>
