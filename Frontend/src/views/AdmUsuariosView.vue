<template>
  <div>
    <h2>Usuarios</h2>
    <button @click="cargarlista">Cargar usuarios</button>
    <li v-for="usuario in lista" :key="usuario.mail">
      {{ usuario.mail }} {{ usuario.nombre }} {{ usuario.apellido }}
      <button @click="eliminar(usuario.mail)">Eliminar</button>
    </li>
    <p>
      Mail <input type="text" v-model="usuario.mail" /> Nombre
      <input type="text" v-model="usuario.nombre" /> Apellido
      <input type="text" v-model="usuario.apellido" />
      <button @click="agregar">Agregar</button>
    </p>
  </div>
</template>

<script>
import apiClient from "../services/usuarioService.js";

export default {
  data() {
    return {
      lista: {},
      usuario: { mail: "", nombre: "", apellido: ""},
    };
  },

  methods: {
    async cargarlista() {
      try {
        const datos = await apiClient.getUsuarios();
        this.lista = datos.data;
      } catch (error) {
        console.log(error);
      }
    },

    async agregar() {
      try {
        const usuario = { ...this.usuario };
        const data = await apiClient.setUsuario(usuario);
        this.lista.push(usuario);
      } catch (error) {
        console.log(error);
      }
    },

    async eliminar(mail) {
      try {
        const data = await apiClient.deleteUsuario(mail);
        console.log(data);
        const listaMails = this.lista.map((e) => {
          return e.mail;
        });
        const indice = listaMails.indexOf(mail);
        this.lista.splice(indice, 1);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>


























<!-- Persistencia Usuario Store Pinia -->
<!--
<template>
  <div>
      <h2>Usuario</h2>
      {{nombre}}
      {{apellido}}
      <button @click="cerrarSesion" > Cerrar Sesión</button>
  </div>
</template>

<script>
import { useStore } from "../Store/store.js";
import { storeToRefs } from 'pinia'
export default {
  setup(){
    const store = useStore();
    const { nombre, apellido } = storeToRefs(store); 
    const { cerrarSesion } = store;  
    return{
      store, nombre, apellido, cerrarSesion
    };
  },
};
</script>

<style>
</style>-->