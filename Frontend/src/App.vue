<template>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>

    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <router-link to="/"
            ><img
              src="./assets/Home/Logo.png"
              class="ml-5"
              width="67"
              height="74"
          /></router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="float-right">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav">

                <li class="nav-item">
                  <router-link class="nav-link active mx-3" to="/Deportes"
                    >Deportes</router-link
                  >
                </li>

                <li class="nav-item">
                  <router-link class="nav-link active mx-3" to="/Profesores"
                    >Profesores</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link active mx-3" to="/Zonas"
                    >Zonas</router-link
                  >
                </li>
                  <li class="nav-item">
                  <router-link v-if="estaLogeado" class="nav-link active mx-3" to="/AdmUsuarios"
                    >Administración</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/Login"
                    ><img
                      src="./assets/Home/Usuario.png"
                      class="mx-3"
                      width="40"
                      height="40"
                  /></router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <router-view></router-view>
    </div>
  </html>
</template>

<script>
import { loginStore } from "./store/usuario.js";
import { storeToRefs } from "pinia";

export default {
  name: "Login",
  setup() {
    const store = loginStore();
    const { estaLogeado } = storeToRefs(store);
    return {
      store,
      estaLogeado,
    };
  },
};
</script>


