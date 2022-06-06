<template>
  <div class="container">
      <h2>Registro de profesor</h2>
      <form>
        <div class="row">
          <div class="col-6">
            <div class="mb-3">
              <label for="email" class="form-label">Correo electronico</label>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="usuario.email">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Contraseña</label>
              <input type="password" class="form-control" id="password" v-model="usuario.password">
            </div>
            <div class="mb-3">
              <label for="confirmPassword" class="form-label">Confirme la contraseña</label>
              <input type="password" class="form-control" id="confirmPassword" v-model="usuario.confirmPassword">
            </div>
            <div class="mb-3">
              <label for="category" class="form-label">Categoria de deporte</label>
              <DeportesDropdown id="category"></DeportesDropdown>
            </div>
            <button type="submit" class="btn btn-primary">Registrarse</button>
          </div>
          <div class="col-6">
            <div class="mb-3">
              <label for="name" class="form-label">Nombre</label>
              <input class="form-control" id="name" v-model="usuario.name">
            </div>
            <div class="mb-3">
              <label for="lastname" class="form-label">Apellido</label>
              <input class="form-control" id="lastname" v-model="usuario.lastname">
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Telefono</label>
              <input class="form-control" id="phone" v-model="usuario.phone">
            </div>
          </div>
        </div>
      </form>
  </div>
</template>

<script>
import DeportesDropdown from './DeportesDropdown.vue'
    export default {
    name: "RegistroProfesor",
    data() {
        return {
            usuario: {
                name: "",
                lastname: "",
                email: "",
                password: "",
                confirmPassword: "",
                phone: ""
            }
        };
    },
    components: { DeportesDropdown }
}
</script>

<style scoped>

</style>