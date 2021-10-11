<template>
  <v-btn
    :loading="loading"
    @click="onclick()"
    id="button-txt"
    :class="tipo === 'primary' ? 'primary' : 'sec'"
    :width="width"
    :disabled="disabled"
    :type="type"
  >
    {{ label }}
  </v-btn>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
    },
    tipo: {
      type: String,
    },
    loading: {
      type: Boolean,
    },
    width: {
      type: String,
    },
    onclick: {
      type: Function,
    },
    disabled: {
      type: Boolean,
    },
    type: {
      type: String,
    },
  },
  methods: {
    Action() {
      this.$emit("click");
    },
  },
};
</script>
<style scoped>
.primary {
  height: 50px;

  border-radius: 20px;
  -webkit-box-shadow: -2px 5px 3px 1px #25abe6;
  box-shadow: -2px 5px 3px 1px #25abe6;
}
.sec {
  height: 50px;

  border-radius: 20px;
  background: white;
  color: #25abe6;
  -webkit-box-shadow: -2px 5px 3px 1px #25abe6;
  box-shadow: -2px 5px 3px 1px #25abe6;
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap");
#button-txt {
  font-family: "Montserrat", sans-serif;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;

  text-transform: none !important;
}
</style>
