<template>
  <v-slider
    :tick-labels="serie"
    track-color="grey"
    color="primary"
    min="0"
    max="2"
    tick-size="3"
    v-model="value"
    :disabled="disabled"
  >
  </v-slider>
</template>
<script>
export default {
  props: ["disabled", "studentinfo"],
  data: () => ({
    serie: ["Pré", "1", "2"],
    value: "",
  }),
  watch: {
    value() {
      this.$emit("sliderValue", this.value);
    },
  },
};
</script>
