<template>
  <v-card class="card pa-6 ma-3" v-on:click="selected(student)">
    <v-img class="profile_img" :src="student.avatar" />

    <v-card-title class="name text-capitalize">
      {{ student.nome }}
    </v-card-title>
    <v-card-subtitle class="year text-capitalize">
      {{ student.escolaridade }} ano
    </v-card-subtitle>
  </v-card>
</template>
<script>
export default {
  props: {
    student: {
      type: [String, Number, Object],
    },
  },
  methods: {
    selected(student) {
      this.$emit("AlunoSelected", student);
      console.log("selected", student);
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,400;1,300&display=swap");

.card {
  height: 321px;
  min-width: 280px !important;
  cursor: pointer;
  border-radius: 10px;
}
.profile_img {
  object-fit: scale-down;
  height: 199px;
  width: 280px !important;
  border-radius: 10px;

  border-radius: 22px;
}
.name {
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  color: #616161;
}
.year {
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  color: #616161;
}
</style>
