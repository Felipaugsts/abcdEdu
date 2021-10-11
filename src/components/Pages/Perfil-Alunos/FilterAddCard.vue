<template>
  <div>
    <v-card class="card d-flex align-center">
      <v-layout class="d-flex align-center">
        <v-flex lg4 class="mt-16 pa-4 pt-4">
          <template> <slot name="header" class="ml-2"></slot></template>
        </v-flex>

        <v-flex lg4 class="pa-4 d-flex flex-column justify-center">
          <p class="filterBy ml-10 grey--text filterby">Filtrar por:</p>
          <div class="d-flex justify-center">
            <v-btn disabled class="filterByBtn filterby primary"> Nome</v-btn>
            <v-btn disabled class="filterByBtn filterby">Ano</v-btn>
          </div>
        </v-flex>
        <v-flex lg4 class="pa-4 d-flex justify-center">
          <Button
            :onclick="action"
            tipo="primary"
            class="mt-6 addBtn"
            label="Adicionar novo aluno"
            width="250px"
          />
          <v-btn
            @click="action"
            outlined
            icon
            class="mt-3 addbtn"
            color="primary"
          >
            <v-icon color="primary">mdi-plus</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>
<script>
import Button from "../../Button/Button.vue";
export default {
  components: {
    Button,
  },
  data() {
    return {};
  },
  methods: {
    action() {
      this.$emit("click");
    },
  },
};
</script>
<style scoped>
.card {
  max-height: 126px;
  width: auto;
  border-radius: 25px;
}
.field {
  width: 326px;
}
.filterBy {
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 5px;
}
@media screen and (max-width: 1336px) {
  .filterby {
    display: none;
  }
}
@media screen and (max-width: 650px) {
  .addBtn {
    display: none;
  }
  .addbtn {
    display: block;
  }
}
@media screen and (min-width: 650px) {
  .addbtn {
    display: none;
  }
}

.filterByBtn {
  height: 32px;
  width: 120px;
  border-radius: 25px;
}
</style>
