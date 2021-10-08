<template>
  <v-layout wrap class="grey lighten-4 pa-6">
    <v-flex class="mt-8 mb-10">
      <FilterAdd v-if="!AddNew" @click="AddNewStudent">
        <template v-slot:header>
          <v-text-field outlined v-model="filtering" label="Pesquisar" />
        </template>
      </FilterAdd>

      <NovoAluno v-if="AddNew" />
    </v-flex>
    <v-flex lg12 v-if="!AddNew && !this.filtereingdata">
      <v-card flat class="transparent">
        <v-card-title> 1 Ano </v-card-title>
        <v-card-actions>
          <Student
            class="ma-4"
            v-for="(st, i) in primeiroAno"
            :key="i"
            :student="st"
          />
        </v-card-actions>
      </v-card>

      <v-card flat class="transparent">
        <v-card-title> 2 Ano </v-card-title>
        <v-card-actions>
          <Student
            class="ma-4"
            v-for="(st, i) in SegundoAno"
            :key="i"
            :student="st"
          />
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex v-if="filtereingdata">
      <Student
        class="ma-4"
        v-for="(st, i) in filtered"
        :key="i"
        :student="st"
      />
    </v-flex>
  </v-layout>
</template>
<script>
import NovoAluno from "../components/Pages/Perfil-Alunos/AdicionarNovoAluno.vue";
import FilterAdd from "../components/Pages/Perfil-Alunos/FilterAddCard.vue";
import Student from "../components/Cards/Student.vue";

import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
export default {
  components: {
    NovoAluno,
    FilterAdd,
    Student,
  },
  data() {
    return {
      filtering: "",
      filtereingdata: false,
      filtered: [],
      search: {
        label: "Pesquisar",
        text: "",
      },
      AddNew: false,
      Alunos: [],
      primeiroAno: [],
      SegundoAno: [],
    };
  },

  methods: {
    AddNewStudent() {
      this.AddNew = true;
    },

    async GetStudents(st) {
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, st));
      querySnapshot.forEach((doc) => {
        this.Alunos.push(doc.data());

        console.log("doc", this.primeiroAno);
      });
      const stud = this.Alunos;
      await this.separarAno(stud);
    },

    separarAno(stud) {
      if (stud) {
        stud.filter((filter) => {
          if (filter.escolaridade === 1) {
            this.primeiroAno.push(filter);
            console.log(filter.escolaridade);
          }
          if (filter.escolaridade === 2) {
            this.SegundoAno.push(filter);
            console.log(filter.escolaridade);
          }
        });
      }
    },

    filter(i) {
      console.log("value", i);
    },
  },
  watch: {
    filtering() {
      if (this.filtering) {
        this.filtereingdata = true;
        const alunos = this.Alunos;
        this.filtered = alunos.filter((filter) => {
          console.log("ff", filter.nome);
          return filter.nome
            .toLowerCase()
            .includes(this.filtering.toLowerCase());
        });
      } else {
        this.filtereingdata = false;
      }
    },
  },

  created() {
    this.GetStudents("Alunos");
  },
};
</script>
<style scoped src=".././assets/css/textfield.css"></style>
