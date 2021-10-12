<template>
  <div>
    <v-layout class="grey lighten-4 pa-6">
      <v-flex class="d-flex justify-center align-center">
        <v-card class="card">
          <v-card-title class="d-flex mt-3 flex-column justify-center">
            <v-img
              v-if="action !== 'adicionar'"
              class="profile_img"
              :src="editInfo.avatar"
            />
            <v-img
              v-if="action === 'adicionar'"
              :class="errorimg === false ? 'profile_img' : 'profile_img_err'"
              :src="
                setFileUrl !== null
                  ? setFileUrl
                  : 'https://media.istockphoto.com/photos/female-portrait-icon-as-avatar-or-profile-picture-picture-id477333976?b=1&k=20&m=477333976&s=170667a&w=0&h=0MKAqzspB2Tcx7Yf42nYI0Pda9qK1oZap25Mru21K40='
              "
            />

            <Button
              v-if="action === 'adicionar'"
              :onclick="onButtonClick"
              for="file_input_id"
              class="edit_avatar"
              label="Mudar Avatar"
              type="file"
              :loading="loader"
            />
            <input
              type="file"
              ref="input"
              @change="onFileSelect"
              id="file_input_id"
            />
          </v-card-title>

          <v-card-text class="d-flex flex-column align-center">
            <v-form ref="form" class="form mt-4">
              <TextField
                :disabled="action === 'adicionar' ? false : true"
                :fields="action === 'adicionar' ? Name : editName"
                class="mb-3 field"
              />
              <TextField
                class="field"
                :disabled="action === 'adicionar' ? false : true"
                :fields="action === 'adicionar' ? Escola : editEscola"
              />
            </v-form>
          </v-card-text>
          <v-card-actions class="pl-lg-10 pr-lg-10 mt-4">
            <v-layout wrap>
              <v-flex lg3 class="carmen">
                <v-img
                  class="profile_img"
                  src="../../.././assets/kids/carmen.png"
                />
              </v-flex>
              <v-flex lg9 xs12 class="pl-lg-8 pa-4">
                <p class="title primary--text pl-lg-7 pl-0">Ano Escolar</p>
                <Slider
                  @sliderValue="sliderValue"
                  :studentinfo="
                    action === 'adicionar' ? '' : editInfo.escolaridade
                  "
                  :disabled="action !== 'adicionar' ? true : false"
                />

                <p class="mt-3 info-text font-weigth-light carmen">
                  <span class="info-bold">Pré I:</span> Aluno completou 4 anos
                  antes do dia 31/03/2020.
                  <br />

                  <span class="info-bold carmen">Pré II:</span> Aluno completou
                  5 anos antes do dia 31/03/2020..
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

          <v-card-actions class="justify-center mt-5 pb-10">
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
              :loading="loading"
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

import firebaseApp from "../../../base";

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
      setFileUrl: null,
      fileUrl: [],
      loading: false,
      loader: false,
      errorimg: false,
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
    onButtonClick() {
      this.$refs.input.click();
    },
    async onFileSelect(e) {
      this.loader = true;
      const files = e.target.files[0];
      var storageRef = firebaseApp.storage().ref();
      var fileRef = storageRef.child(files.name);
      var file = files; // use the Blob or File API
      await fileRef.put(file);
      this.setFileUrl = await fileRef.getDownloadURL();
      console.log("onFileSelect", this.setFileUrl);
      this.loader = false;
    },

    async AddStudent() {
      if (this.$refs.form.validate()) {
        if (!this.setFileUrl) {
          this.errorimg = true;
          console.log("img required");
        } else {
          this.errorimg = false;
          this.loading = true;
    const newstudent = { 
            nome: this.Name.text,
            escolaridade: this.value,
            escola: this.Escola.text,
            avatar: this.setFileUrl,
    }
      this.$store.dispatch('createStudent', newstudent)

          
          console.log("emiting ");
          
        
      }}
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
  computed: { 
    success() { 
      return this.$store.getters.success
    }
  },
  watch: {
    terms() {
      this.handleForm();
    },
    value() {
      this.handleForm();
    },
    success() { 
      if (this.success !== null) { 
        this.loading = false;
       this.$emit("successAdded", this.success);
      }
    }
  },
};
</script>
<style scoped>
.card {
  max-height: 870px;
  min-height: 700px;
  width: 672px;
  border-radius: 25px;
}
.profile_img {
  object-fit: contain;
  height: 157px;
  max-width: 156px;
  border-radius: 22px;
}
.profile_img_err {
  object-fit: contain;
  height: 157px;
  max-width: 156px;
  border-radius: 22px;
  border: 0.5px solid rgb(238, 142, 142);
}
.edit_avatar {
  width: 218px;
}
.form {
  width: 100%;
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
.field {
  width: auto;
}

@media screen and (max-width: 748px) {
  .carmen {
    display: none;
  }
}
#file_input_id {
  display: none;
}
</style>
