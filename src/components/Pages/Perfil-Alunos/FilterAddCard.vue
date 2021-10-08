<template>
  <v-card class="card d-flex align-center">
    <v-flex lg4 class="field pl-7 mt-10">
      <template> <slot name="header" class="ml-2"></slot></template>
    </v-flex>

    <v-flex lg4 class="ml-8 mr-10">
      <p class="filterBy">Filtrar por:</p>
      <div class="d-flex">
        <v-btn class="filterByBtn primary"> Nome</v-btn>
        <v-btn class="filterByBtn">Ano</v-btn>
      </div>
    </v-flex>
    <v-flex lg4 class="ml-16">
      <Button
        @click="action"
        tipo="primary"
        class="mt-6"
        label="Adicionar novo aluno"
      />
    </v-flex>
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
  width: 161px;
  border-radius: 25px;
}
</style>
