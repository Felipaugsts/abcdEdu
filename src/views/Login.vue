<template>
  <v-app class="bg" v-if="!this.$store.state.token">
    <v-layout>
      <v-flex class="d-flex justify-center align-center">
        <v-card class="wrapper">
          <v-card-title class="justify-center">
            <v-img src=".././assets/logo.png" class="logo" />
          </v-card-title>

          <v-form class="pa-6" ref="form">
            <h5 class="ml-2 font-weight-light red--text" v-if="authsuccess">
              Email ou senha estão incorretos
            </h5>
            <TextField :fields="Email" class="mt-3" />
            <TextField :fields="Senha" class="mt-4" />
          </v-form>

          <v-card-actions class="d-flex flex-column">
            <Button
              :loading="loading"
              :onclick="Login"
              label="Login"
              class="login-btn mb-4"
              tipo="primary"
              width="300px"
            />
            <Button
              label="Esqueci senha"
              class="login-btn mr-2"
              tipo="secondary"
              width="300px"
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

// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  name: "Login",
  components: {
    TextField,
    Button,
  },
  data() {
    return {
      Email: {
        label: "Email",
        text: "",
        rules: true,
      },
      Senha: {
        label: "Senha",
        text: "",
        type: "password",
        rules: true,
      },
    };
  },
  methods: {
    Login() {
      if (this.$refs.form.validate()) {
        this.loader = true;
const form = [ {
  email: this.Email.text,
  password: this.Senha.text
}]
this.$store.dispatch('signUserIn', form)

      }
    },
  },
  computed: { 
    loading() { 
      return this.$store.getters.loading
    },
    authsuccess() { 
      return this.$store.getters.authsuccess
    },
    computed: { 
      user() { 
       return this.$store.getters.user
      }
    },
    watch: {
      user() { 
        console.log('user', this.user)
      }
    }
    
  },
};
</script>
<style scoped>
.bg {
  background: url("./../assets/login.png") no-repeat;
  background-size: 100% 100%;
  height: 100vh;
}
@media screen and (max-width: 900px) {
  .bg {
    background-size: auto;
  }
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
