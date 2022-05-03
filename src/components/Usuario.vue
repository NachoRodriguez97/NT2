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
</style>