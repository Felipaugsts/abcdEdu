<template>
  <v-app>
    <v-layout class="grey lighten-4 pa-6">
      <v-flex>
        <FilterAdd v-if="!AddNew" @click="AddNewStudent" />

        <NovoAluno v-if="AddNew" />
      </v-flex>
    </v-layout>
  </v-app>
</template>
<script>
import NovoAluno from "../components/Pages/Perfil-Alunos/AdicionarNovoAluno.vue";
import FilterAdd from "../components/Pages/Perfil-Alunos/FilterAddCard.vue";
export default {
  components: {
    NovoAluno,
    FilterAdd,
  },
  data() {
    return {
      AddNew: false,
    };
  },
  methods: {
    AddNewStudent() {
      this.AddNew = true;
    },
  },

  mounted() {

  },
};
</script>
