<template>
  <v-text-field
    class="field"
    dense
    v-model="field.text"
    :label="field.label"
    :placeholder="field.placeholder"
    :type="field.type"
    outlined
    :rules="field.rules === true ? nameRules : []"
    :prepend-inner-icon="field.inner"
    :disabled="disabled"
    :width="width"
  ></v-text-field>
</template>

<script>
export default {
  name: "txt",
  props: ["fields", "model", "disabled", 'width'],
  data() {
    return {
      field: this.fields,
      models: this.model,
      nameRules: [(v) => !!v || "Este campo é obrigatório"],
    };
  },

  created() {
    this.$emit("fields", this.field);
  },
};
</script>

<style scoped src="../../assets/css/textfield.css"></style>
