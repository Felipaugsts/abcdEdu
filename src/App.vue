<template>
  <v-app>
    <v-layout>
      <v-flex lg3 v-if="this.$store.state.token">
        <Sidebar />
      </v-flex>
      <v-flex>
        <router-view />
      </v-flex>
    </v-layout>
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
