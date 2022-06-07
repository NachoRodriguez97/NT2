<template>
  <div class="container">
      <h2>Registro de alumno</h2>
      <form>
        <div class="row">
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
            <div class="mb-3">
              <label for="dni" class="form-label">DNI</label>
              <input class="form-control" id="dni" v-model="usuario.dni">
            </div>
          </div>
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
          </div>
          <div class="col-6">
            <label class="h5">Dias disponibles</label>
            <div class="row">
              <div class="col-4">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="1" id="lunesCheck">
                  <label class="form-check-label" for="lunesCheck">Lunes</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="2" id="martesCheck">
                  <label class="form-check-label" for="martesCheck">Martes</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="3" id="miercolesCheck">
                  <label class="form-check-label" for="miercolesCheck">Miercoles</label>
                </div>
              </div>
              <div class="col-6">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="4" id="juevesCheck">
                  <label class="form-check-label" for="juevesCheck">Jueves</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="5" id="viernesCheck">
                  <label class="form-check-label" for="viernesCheck">Viernes</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="6" id="sabadoCheck">
                  <label class="form-check-label" for="sabadoCheck">Sabado</label>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <label class="h5">Horarios disponibles</label>
            <select class="form-select">
              <option selected>Seleccione una horario</option>
              <option value="1">8:00 - 9:00</option>
              <option value="2">9:00 - 10:00</option>
              <option value="3">10:00 - 11:00</option>
              <option value="4">11:00 - 12:00</option>
              <option value="5">12:00 - 13:00</option>
            </select>
          </div>
        </div>
        <button type="submit" class="btn btn-primary mt-4">Registrarse</button>
      </form>
  </div>
</template>

<script>
import DeportesDropdown from './DeportesDropdown.vue'
    export default {
        name: 'Registro',
        data() {
          return {
            usuario: {
                name: "",
                lastname: "",
                email: "",
                password: "",
                confirmPassword: "",
                phone: "",
                dni: ""
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