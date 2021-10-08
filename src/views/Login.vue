<template>
  <v-app class="bg" v-if="!this.$store.state.token">
    <v-layout>
      <v-flex class="d-flex justify-center align-center">
        <v-card class="wrapper">
          <v-card-title class="justify-center">
            <v-img src=".././assets/logo.png" class="logo" />
          </v-card-title>

          <v-form class="pa-6" ref="form">
            <TextField :fields="Email" class="mt-3" />
            <TextField :fields="Senha" class="mt-4" />
          </v-form>

          <v-card-actions class="d-flex flex-column">
            <Button
              :loading="loader"
              @click="Login"
              label="Login"
              class="login-btn mb-4"
              tipo="primary"
            />
            <Button
              label="Esqueci senha"
              class="login-btn mr-2"
              tipo="secondary"
            />
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>
<script>
import TextField from "../components/Inputs/TextField.vue";
import Button from "../components/Button/Button.vue";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  
  name: "Login",
  components: {
    TextField,
    Button,
  },
  data() {
    return {
      loader: false,
      Email: {
        label: "Email",
        text: "teste@gmail.com",
      },
      Senha: {
        label: "Senha",
        text: "teste123",
        type: "password",
      },
    };
  },
  methods: {
    Login() {
      if (this.$refs.form.validate()) {
        this.loader = true;

        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.Email.text, this.Senha.text)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log("user", user);
            this.loader = false;
            this.$store.commit("SET_USERDATA", user);
            this.$router.push("/");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            console.log("errorCode", errorCode);
          });
      }
    },
  },
  
};
</script>
<style scoped>
.bg {
  background: url("./../assets/login.png") no-repeat;
  background-size: 100% 100%;
  height: 100vh;
}
.wrapper {
  height: 517px;
  width: 368px;
  border-radius: 25px;
}
.logo {
  max-width: 180px;
}
.login-btn {
}
</style>
