<template>
  <div>
    <v-layout wrap class="grey lighten-4 pa-3">
      <v-flex xs12 class="mt-8 mb-10">
        <FilterAdd v-if="!AddNew" @click="HandleAddStudent">
          <template v-slot:header>
            <v-text-field outlined v-model="filtering" label="Pesquisar" />
          </template>
        </FilterAdd>

        <NovoAluno
          :action="action"
          :editInfo="editInfo"
          v-if="AddNew"
          :cancelar="HandleAddStudent"
          @successAdded="successAdded"
        />
      </v-flex>

      <!-- 1 ANO -->
      <v-flex xs12 v-if="!AddNew && !this.filtereingdata">
        <v-card flat class="transparent">
          <v-card-title> 1 Ano </v-card-title>
          <v-divider></v-divider>
          <v-layout wrap v-if="loading">
            <v-flex class="ma-3" v-for="i in 4" :key="i">
              <v-skeleton-loader
                class="mx-auto"
                max-width="300"
                type="card"
              ></v-skeleton-loader>
            </v-flex>
          </v-layout>

          <v-card-actions v-if="!loading">
            <v-layout wrap class="d-flex justify-start">
              <v-flex
                xl3
                lg4
                v-for="(st, i) in primeiroAno"
                :key="i"
                class="
                  d-flex
                  justify-center justify-md-start justify-lg-start
                  card
                  pa-2
                "
              >
                <Student @AlunoSelected="handleAbout" :student="st" />
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-card>

        <!-- Segundo Ano -->
        <v-card flat class="transparent">
          <v-card-title> 2 Ano </v-card-title>
          <v-divider></v-divider>
          <v-layout wrap v-if="loading">
            <v-flex class="ma-3" v-for="i in 4" :key="i">
              <v-skeleton-loader
                class="mx-auto"
                max-width="300"
                type="card"
              ></v-skeleton-loader>
            </v-flex>
          </v-layout>
          <v-card-actions v-if="!loading">
            <v-layout wrap class="d-flex justify-start">
              <v-flex
                xl3
                lg4
                v-for="(st, i) in SegundoAno"
                :key="i"
                class="
                  d-flex
                  justify-center justify-md-start justify-lg-start
                  card
                  pa-2
                "
              >
                <Student @AlunoSelected="handleAbout" :student="st" />
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>

      <!-- Filtered data -->
      <v-flex>
        <v-layout class="d-flex justify-start" wrap v-if="filtereingdata">
          <Student v-for="(st, i) in filtered" :key="i" :student="st" />
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import NovoAluno from "../components/Pages/Perfil-Alunos/AdicionarNovoAluno.vue";
import FilterAdd from "../components/Pages/Perfil-Alunos/FilterAddCard.vue";
import Student from "../components/Cards/Student.vue";
import { App } from "../base";
export default {
  components: {
    NovoAluno,
    FilterAdd,
    Student,
  },
  data() {
    return {
      action: "",
      editInfo: {},
      filtering: "",
      filtereingdata: false,
      filtered: [],
      loading: false,
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
    successAdded() {
      console.log("test");
      location.reload();
      this.HandleAddStudent();
    },

    handleAbout(stud) {
      console.log("st", stud);
      this.editInfo = stud;
      this.AddNew = !this.AddNew;
      this.action = "about";
    },

    HandleAddStudent() {
      this.AddNew = !this.AddNew;
      this.action = "adicionar";
    },

    async GetStudents(st) {
      const db = App.firestore();
      const querySnapshot = await db.collection(st).get();
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
      this.loading = false;
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
        console.log("alunos", alunos);
        this.filtered = alunos.filter((filter) => {
          console.log("ff", filter);
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
    this.loading = true;
    this.GetStudents("Alunos");
  },
};
</script>
<style scoped src=".././assets/css/textfield.css"></style>
