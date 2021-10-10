<template>
  <div>
    <v-layout class="grey lighten-4 pa-6">
      <v-flex class="d-flex justify-center align-center">
        <v-card class="card">
          <v-card-title class="d-flex mt-3 flex-column justify-center">
            <v-img
              v-if="action !== 'adicionar'"
              class="profile_img"
              :src="require('../../../assets/kids/' + editInfo.avatar + '.png')"
            />
            <v-img
              v-if="action === 'adicionar'"
              class="profile_img"
              src="../../.././assets/kids/sr-goiaba.png"
            />
            <Button
              v-if="action === 'adicionar'"
              class="edit_avatar"
              label="Mudar Avatar"
            />
          </v-card-title>

          <v-card-text class="d-flex flex-column align-center">
            <v-form ref="form" class="form mt-4">
              <TextField
                :disabled="action === 'adicionar' ? false : true"
                :fields="action === 'adicionar' ? Name : editName"
                class="mb-3"
              />
              <TextField
                :disabled="action === 'adicionar' ? false : true"
                :fields="action === 'adicionar' ? Escola : editEscola"
              />
            </v-form>
          </v-card-text>
          <v-card-actions class="pl-10 pr-10 mt-4">
            <v-layout wrap>
              <v-flex lg3>
                <v-img
                  class="profile_img"
                  src="../../.././assets/kids/carmen.png"
                />
              </v-flex>
              <v-flex lg9 class="pl-8">
                <p class="title primary--text pl-7">Ano Escolar</p>
                <Slider
                  @sliderValue="sliderValue"
                  :studentinfo="
                    action === 'adicionar' ? '' : editInfo.escolaridade
                  "
                  :disabled="action !== 'adicionar' ? true : false"
                />

                <p class="mt-3 info-text font-weigth-light">
                  <span class="info-bold">Pré I:</span> Aluno completou 4 anos
                  antes do dia 31/03/2020.
                  <br />

                  <span class="info-bold">Pré II:</span> Aluno completou 5 anos
                  antes do dia 31/03/2020..
                </p>
              </v-flex>
              <v-flex lg12>
                <checkbox
                  v-if="action === 'adicionar'"
                  v-model="terms"
                  label="Eu autorizo o EduEdu a coletar e processar os dados do meu filho(a) conforme a política de privacidade."
                />
              </v-flex>
            </v-layout>
          </v-card-actions>

          <v-card-actions class="justify-center mt-5">
            <Button
              :onclick="cancelar"
              label="Cancelar"
              tipo="secondary"
              width="150px"
            />
            <Button
              v-if="action === 'adicionar'"
              :onclick="AddStudent"
              :disabled="enable"
              label="Adicionar aluno"
              tipo="primary"
              width="150px"
            />
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import Button from "@/components/Button/Button.vue";
import TextField from "@/components/Inputs/TextField.vue";
import Slider from "@/components/Slider/Slider.vue";
import checkbox from "@/components/Inputs/Checkbox.vue";

import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
export default {
  props: {
    cancelar: {
      type: Function,
    },
    action: {
      type: String,
    },
    editInfo: {
      type: Object,
    },
  },
  components: {
    Button,
    TextField,
    Slider,
    checkbox,
  },
  data() {
    return {
      Name: {
        label: "Nome Completo",
        text: "",
        inner: "mdi-account",
        rules: true,
      },
      Escola: {
        label: "Escola",
        text: "",
        inner: "mdi-school",
        rules: true,
      },
      editName: {
        label: "Nome Completo",
        text: this.editInfo.nome,
        inner: "mdi-account",
        rules: true,
      },
      editEscola: {
        label: "Escola",
        text: this.editInfo.escola,
        inner: "mdi-account",
        rules: true,
      },
      value: "",
      terms: false,
      enable: true,
    };
  },

  methods: {
    async AddStudent() {
      if (this.$refs.form.validate()) {
        const db = getFirestore();
        const docRef = await addDoc(collection(db, "Alunos"), {
          nome: this.Name.text,
          escolaridade: this.value,
          escola: this.Escola.text,
          avatar: "juju",
        });
        console.log("Document written with ID: ", docRef.id);
        this.$emit("successAdded");
        console.log("emiting ");
      }
    },

    sliderValue(v) {
      this.value = v;
    },

    handleForm() {
      if (this.action !== "editar") {
        if (this.value !== 0 && this.terms) {
          this.enable = false;
        } else {
          this.enable = true;
        }
      } else {
        if (this.terms) {
          this.enable = false;
        } else {
          this.enable = true;
        }
      }
    },
  },
  watch: {
    terms() {
      this.handleForm();
    },
    value() {
      this.handleForm();
    },
  },
};
</script>
<style scoped>
.card {
  height: 870px;
  width: 672px;
  border-radius: 25px;
}
.profile_img {
  object-fit: contain;
  height: 157px;
  max-width: 156px;
  border-radius: 22px;
}
.edit_avatar {
  width: 218px;
}
.form {
  width: 594px;
}
.title {
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
}
.action-items {
  width: 600px;
}
.info-bold {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 17px;
}
.info-text {
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;

  text-align: left;
  color: #c4c4c4;
}
</style>
