<template>
  <v-range-slider
    :tick-labels="serie"
    track-color="grey"
    color="primary"
    min="0"
    max="3"
    tick-size="3"
  >
  </v-range-slider>
</template>
<script>
export default {
  data: () => ({
    serie: ["Pré", "1", "2", "3"],
  }),
};
</script>
