<template>
  <div class="container">
      <h2>Registro de usuario</h2>
      <form>
        <div class="row">
          <div class="col-6">
            <div class="mb-3">
              <label for="emailProfesor" class="form-label">Correo electronico</label>
              <input type="email" class="form-control" id="emailProfesor" aria-describedby="emailProfesorHelp" v-model="profesor.email">
            </div>
            <div class="mb-3">
              <label for="passwordProfesor" class="form-label">Contraseña</label>
              <input type="password" class="form-control" id="passwordProfesor" v-model="profesor.password">
            </div>
            <div class="mb-3">
              <label for="confirmPasswordProfesor" class="form-label">Confirme la contraseña</label>
              <input type="password" class="form-control" id="confirmPasswordProfesor" v-model="profesor.confirmPassword">
            </div>
            <div class="mb-3">
              <label for="categoryProfesor" class="form-label">Categoria de deporte</label>
              <DeportesDropdown id="categoryProfesor"></DeportesDropdown>
            </div>
            <button type="submit" class="btn btn-primary">Registrarse</button>
          </div>
          <div class="col-6">
            <div class="mb-3">
              <label for="nameProfesor" class="form-label">Nombre</label>
              <input class="form-control" id="nameProfesor" v-model="profesor.name">
            </div>
            <div class="mb-3">
              <label for="lastnameProfesor" class="form-label">Apellido</label>
              <input class="form-control" id="lastnameProfesor" v-model="profesor.lastname">
            </div>
            <div class="mb-3">
              <label for="phoneProfesor" class="form-label">Telefono</label>
              <input class="form-control" id="phoneProfesor" v-model="profesor.phone">
            </div>
          </div>
        </div>
      </form>
  </div>
</template>

<script>
import DeportesDropdown from './DeportesDropdown.vue'
    export default {
        name: 'Registro',
        data() {
          return {
            profesor: {
                name: "",
                lastname: "",
                email: "",
                password: "",
                confirmPassword: "",
                phone: ""
            }
          }
        },
        components: {
          DeportesDropdown
        }
    }
</script>

<style scoped>

</style>