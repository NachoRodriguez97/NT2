<template>
  <div style="margin: 10px">
    <h1>Deportes</h1>
    <hr>
    <!--VISTA PARA USUARIOS-->
    <div>
    <h4>Vista de Usuarios</h4>
    <li v-for="dep in listaDeportes" :key="dep.nombre">
      {{ dep.nombre }}
      <button style="margin: 5px" class="btn btn-outline-primary">Ver Horarios</button>
    </li>
    </div>
  <hr>
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
      
      
        <button style="margin: 5px" @click="llamarAEditar(dep.nombre)">Editar</button>
        <button style="margin: 5px" @click="eliminar(dep.nombre)">Eliminar</button>
        
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
      deporte: { nombre: ""},
    };
  },

  created(){
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
    async llamarAEditar(nombre){
      try{
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
      }catch (error){
        console.log(error);
      }
    }
  },
}
</script>

<style>

</style>