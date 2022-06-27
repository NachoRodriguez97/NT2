<template>
 <div style="margin: 10px">
      <h2>Mis Reservas</h2>
      <li v-for="res in listaReservas" :key="res.deporte">
        {{ res.deporte }} {{res.dia}} {{res.hora}}
        <button style="margin: 5px" @click="eliminar(res.deporte.nombre)">
          Cancelar
        </button>
      </li>
  </div>
</template>

<script>
import apiClient from "../services/reservaService.js";

export default {
  data() {
    return {
      listaReservas: {},
      reserva: { deporte: "" , dia:"", hora:"" },
    };
  },

  created() {
    this.cargarLista();
  },

  methods: {
    async cargarLista() {
      try {
        const datos = await apiClient.getAllReservas();
        this.listaReservas = datos.data;
      } catch (error) {
        console.log(error);
      }
    },

    async eliminar(nombre) {
      try {
        const data = await apiClient.deleteReserva(nombre);
        console.log(data);
        const listaMisReservas = this.listaReservas.map((e) => {
          return e.deporte.nombre;
        });
        const indice = listaMisReservas.indexOf(nombre);
        this.listaMisReservas.splice(indice, 1);
      } catch (error) {
        console.log(error);
      }
    }}
};
</script>

<style type="text/css" media="screen">
@import "../assets/gradient.css";
</style>