<template>
  <v-card class="card pa-6">
    <v-img
      class="profile_img"
      :src="require('../../assets/kids/' + student.avatar + '.png')"
    />

    <v-card-title class="name"> {{ student.nome }} </v-card-title>
    <v-card-subtitle> {{ student.escolaridade }} ano </v-card-subtitle>
  </v-card>
</template>
<script>
export default {
  props: {
    student: {
      type: [String, Number, Object],
    },
  },
};
</script>
<style scoped>
.card {
  height: 321px;
  width: 276px;
  cursor: pointer;
  border-radius: 10px;
}
.profile_img {
  object-fit: contain;
  height: 199px;
  width: 236px;
  border-radius: 10px;

  border-radius: 22px;
}
.name {
  font-family: Montserrat;
  font-size: 22px;
  font-style: normal;
  font-weight: 800;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  color: #616161;
}
</style>
