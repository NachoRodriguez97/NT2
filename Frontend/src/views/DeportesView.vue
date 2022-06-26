<template>
  <div style="margin: 10px">
    <!--VISTA PARA USUARIOS-->
    <div>
      <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      </head>
      <li v-for="dep in listaDeportes" :key="dep.nombre">
        {{ dep.nombre }}
        <button style="margin: 5px" class="btn btn-outline-primary">
          Ver Horarios
        </button>
      </li>
      <div class="container mt-5">
        <div class="row px-5">
          <div class="col-6">
            <div class="text-center"></div>
            <img
              src="../assets/Deportes/mujer.png"
              class="animate__animated animate__fadeInRight"
              width="495"
              height="625"
            />
          </div>
          <div class="col-6 px-5">
            <div class="text-left">
              <h1
                class="
                  display-1
                  text-left
                  pt-5
                  animate__animated animate__flipInX
                "
                style="font-family: Akkurat Pro; font-weight: bold"
              >
                <strong
                  >Elegí tu<br />
                  deporte<br />
                  favorito.</strong
                >
              </h1>
            </div>
          </div>
        </div>
      </div>
        <div class="text-center">
        <div class="row text-center mt-5">
          <div class="col-6"> 
            <img src="../assets/Deportes/Futbol.png" alt="" data-aos="fade-right" width="50%">
          </div>
          <div class="col-6"><img src="../assets/Deportes/Boxeo.png" alt="" data-aos="fade-left" width="50%"></div>
        </div>
        <div class="row mt-5">
          <div class="col-6"> <img src="../assets/Deportes/Crossfit.png" alt="" data-aos="fade-right" width="50%"></div>
          <div class="col-6"> <img src="../assets/Deportes/Functional.png" alt="" data-aos="fade-left" width="50%"></div>
        </div>
        <div class="row mt-5">
          <div class="col-6"> <img src="../assets/Deportes/Handball.png" alt="" data-aos="fade-right" width="50%"></div>
          <div class="col-6"> <img src="../assets/Deportes/Karate.png" alt="" data-aos="fade-left" width="50%"></div>
        </div>
        <div class="row mt-5">
          <div class="col-6"> <img src="../assets/Deportes/Kick Boxing.png" alt="" data-aos="fade-right" width="50%"> </div>
          <div class="col-6"> <img src="../assets/Deportes/Running.png" alt="" data-aos="fade-left" width="50%"> </div>
        </div>
        <div class="row mt-5">
          <div class="col-6"> <img src="../assets/Deportes/Tenis.png" alt="" data-aos="fade-right" width="50%"></div>
          <div class="col-6"> <img src="../assets/Deportes/Volley.png" alt="" data-aos="fade-left" width="50%"></div>
          
        </div>
        </div>
    </div>
    <hr />
    <!--VISTA PARA ADMINISTRADOR-->
    <div>
      <h4>Vista de administradores</h4>
      <h2>Agregar Deporte</h2>
      <p>
        Nombre: <input type="text" v-model="deporte.nombre" />
        <button @click="agregar">Agregar</button>
      </p>
      <li v-for="dep in listaDeportes" :key="dep.nombre">
        {{ dep.nombre }}

        <button style="margin: 5px" @click="llamarAEditar(dep.nombre)">
          Editar
        </button>
        <button style="margin: 5px" @click="eliminar(dep.nombre)">
          Eliminar
        </button>
      </li>
    </div>
  </div>
</template>

<script>
import apiClient from "../services/deporteService.js";

export default {
  data() {
    return {
      listaDeportes: {},
      deporte: { nombre: "" },
    };
  },

  created() {
    this.cargarLista();
  },

  methods: {
    async cargarLista() {
      try {
        const datos = await apiClient.getDeportes();
        this.listaDeportes = datos.data;
      } catch (error) {
        console.log(error);
      }
    },

    async agregar() {
      try {
        const deporte = { ...this.deporte };
        const data = await apiClient.addDeporte(deporte);
        this.listaDeportes.push(deporte);
      } catch (error) {
        console.log(error);
      }
    },

    async eliminar(nombre) {
      try {
        const data = await apiClient.deleteDeporte(nombre);
        console.log(data);
        const listaNombres = this.listaDeportes.map((e) => {
          return e.nombre;
        });
        const indice = listaNombres.indexOf(nombre);
        this.listaDeportes.splice(indice, 1);
      } catch (error) {
        console.log(error);
      }
    },

    //Arreglar
    async llamarAEditar(nombre) {
      try {
        // this.$router.push('/EditDeporte/' + nombre);
        // console.log("llega");
        // const data = await apiClient.putDeporte(nombre);
        // // console.log(data);
        // const listaNombres = this.listaDeportes.map((e) => {
        //   return e.nombre;
        // });
        // const indice = listaNombres.indexOf(nombre);
        // const obj = {... this.deporte}
        // this.listaDeportes[indice].push(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>