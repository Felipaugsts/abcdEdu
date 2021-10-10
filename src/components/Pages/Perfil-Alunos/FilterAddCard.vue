<template>
  <v-card class="card d-flex align-center">
    <v-layout class="d-flex align-center">
      <v-flex lg4 class="mt-16 pa-4">
        <template> <slot name="header" class="ml-2"></slot></template>
      </v-flex>

      <v-flex lg4 class="pa-4 d-flex flex-column justify-center">
        <p class="filterBy ml-10 grey--text">Filtrar por:</p>
        <div class="d-flex justify-center">
          <v-btn disabled class="filterByBtn primary"> Nome</v-btn>
          <v-btn disabled class="filterByBtn">Ano</v-btn>
        </div>
      </v-flex>
      <v-flex lg4 class="pa-4 d-flex justify-center">
        <Button
          :onclick="action"
          tipo="primary"
          class="mt-6"
          label="Adicionar novo aluno"
          width="250px"
        />
      </v-flex>
    </v-layout>
  </v-card>
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
  max-width: 1200px;
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
.filterByBtn {
  height: 32px;
  width: 120px;
  border-radius: 25px;
}
</style>
