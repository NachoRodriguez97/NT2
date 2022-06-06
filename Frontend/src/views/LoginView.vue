<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <div class="mx-auto">
          <h2>Login</h2>
          <form>
            <div class="mb-3">
              <label for="email" class="form-label">Correo electronico</label>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="usuario.email">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Contraseña</label>
              <input type="password" class="form-control" id="password" v-model="usuario.password">
            </div>
            <div>
              <label>¿No tienes una cuenta? <router-link to="/Registro"><a>Registrate</a></router-link></label>
            </div>
            <button type="submit" class="btn btn-primary">Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { loginStore } from "../store/usuario.js";
import { storeToRefs } from "pinia";

export default {
  name: "Login",
  setup() {
    const store = loginStore();
    const { estaLogeado } = storeToRefs(store);
    const { login } = store;
    return {
      store,
      estaLogeado,
      login
    };
  },
  data() {
    return {
        usuario: { name: "", email: "",  password: "" }
    }
  },
  methods: {
      async login() {
          await this.login({...this.usuario});
          if(this.estaLogeado) {
            this.$router.push('/')
          } else {
            this.$router.push('/Login')
          }
      }
  }
};
</script>

<style>
</style>