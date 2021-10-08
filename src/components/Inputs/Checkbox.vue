<template>
  <v-checkbox
    :style="cssVars"
    v-model="checkVal"
    :label="label"
    :color="color"
    hide-details
    :class="className"
  ></v-checkbox>
</template>
<script>
export default {
  name: "checkbox",
  props: ["check", "color", "label", "className"],
  methods: {
    change() {
      console.log("cambiando");
      this.checked = !this.check;
      this.$emit("input", !this.check);
    },
  },
  computed: {
    cssVars() {
      return {
        "--bg-color": this.color,
      };
    },
    checkVal: {
      get() {
        return this.check;
      },
      set(val) {
        console.log(val);
        this.$emit("input", val);
      },
    },
  },
};
</script>
<style scoped>
.v-input >>> label {
  align-items: center;
  display: inline-flex;
  flex: 1 1 auto;
  height: auto;
  color: var(--bg-color) !important;
  font-family: "Inter" !important;
  font-size: 14px !important;
  font-weight: 500;
  margin-top: 12px;
}

::v-deep .v-input--selection-controls__input .v-icon {
  width: 100%;
  color: var(--bg-color) !important;
}
</style>
