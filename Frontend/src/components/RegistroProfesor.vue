<template>
  <div class="container">
      <h2>Registro de profesor</h2>
      <form>
        <div class="row">
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
            <div class="mb-3">
              <label for="dniProfesor" class="form-label">DNI</label>
              <input class="form-control" id="dniProfesor" v-model="profesor.dni">
            </div>
          </div>
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
    name: "RegistroProfesor",
    data() {
        return {
            profesor: {
                name: "",
                lastname: "",
                email: "",
                password: "",
                confirmPassword: "",
                phone: "",
                dni: ""
            }
        };
    },
    components: { DeportesDropdown }
}
</script>

<style scoped>

</style>