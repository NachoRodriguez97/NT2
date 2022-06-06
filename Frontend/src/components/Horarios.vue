<template>
  <div style="margin: 10px">
    <h1>Horarios</h1>
    <hr>
    <!--VISTA PARA USUARIOS-->
    <div>
    <h4>Vista de Usuarios</h4>
    <h4>Clases disponibles</h4>
    <li v-for="clas in listaClases" :key="clas.deporte">
        {{ clas.deporte }} {{clas.dia}} {{clas.hora}}
       
      </li>
    </div>
  <hr>
    <!--VISTA PARA ADMINISTRADOR-->
    <div>
      <h4>Vista de Profesores</h4>
      <h2>Agregar Horarios</h2>
      <p>
        <label for="deportes">Elije un deporte</label>
        <select name="deportes" id="deportes"  v-model="clase.deporte">
        <option v-for="dep in listaDeportes" :key="dep.nombre"> {{dep.nombre}} </option>
        </select>

        <label for="dias">Elije un día</label>
        <select name="dias" id="dias"  v-model="clase.dia">
        <option value="Lunes">Lunes</option>
        <option value="Martes">Martes</option>
        <option value="Miercoles">Miercoles</option>
        <option value="Jueves">Jueves</option>
        <option value="Viernes">Viernes</option>
        <option value="Sabado">Sabado</option>
        <option value="Domingo">Domingo</option>
        </select>
        Hora <input type="text" v-model="clase.hora" />
        <button @click="agregar">Agregar</button>
      </p>
      <li v-for="clas in listaClases" :key="clas.deporte">
        {{ clas.deporte }} {{clas.dia}} {{clas.hora}}
       
        <button style="margin: 5px" @click="eliminar(clas.deporte.nombre)">Eliminar</button>
        
      </li>
    </div>
  </div>
</template>

<script>
import apiClientDeportes from "../services/deporteService.js";
import apiClientClases from "../services/horarioService.js"

export default {
  data() {
    return {
      listaDeportes: {},
      deporte: {nombre: ""},
      listaClases: {},
      clase: { deporte: "", dia:"", hora:""},
    };
  },

  created(){
    this.cargarListaDeportes(), this.cargarListaClases();
  },

  methods: {
    async cargarListaDeportes() {
      try {
        const datos = await apiClientDeportes.getDeportes();
        this.listaDeportes = datos.data;
      } catch (error) {
        console.log(error);
      }
    },

    async cargarListaClases() {
      try {
        const datos = await apiClientClases.getClases();
        this.listaClases = datos.data;
      } catch (error) {
        console.log(error);
      }
    },

    async agregar() {
      try {
        const clase = { ...this.clase };
        const data = await apiClientClases.addClase(clase);
        this.listaClases.push(clase);
      } catch (error) {
        console.log(error);
      }
    },

    async eliminar(nombre) {
      try {
        const data = await apiClientClases.deleteClase(nombre);
        console.log(data);
        const listaNombres = this.listaClases.map((e) => {
          return e.deporte.nombre;
        });
        const indice = listaNombres.indexOf(nombre);
        this.listaClases.splice(indice, 1);
      } catch (error) {
        console.log(error);
      }
    },

  },
}
</script>

<style>

</style>