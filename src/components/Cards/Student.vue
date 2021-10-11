<template>
      <v-flex class="justify-lg-start card justify-xs-center justify-sm-center justify-center
              d-flex
              ma-1
              pa-xl-2 pa-lg-1 pa-md-0 pa-sm-0"
              v-on:click="selected(student)">
  <v-card class="card pa-6" v-on:click="selected(student)">
    <v-img
      class="profile_img"
      :src="require('../../assets/kids/' + student.avatar + '.png')"
    />

    <v-card-title class="name"> {{ student.nome }} </v-card-title>
    <v-card-subtitle class="year">
      {{ student.escolaridade }} ano
    </v-card-subtitle>
  </v-card>
      </v-flex>
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
  min-width: 300px !important;
  cursor: pointer;
  border-radius: 10px;
}
.profile_img {
  object-fit: contain;
  height: 199px;
  max-width: 300px !important;
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
