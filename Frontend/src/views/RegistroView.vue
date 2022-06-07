<template>
    <div class="container">
        <div class="row">
            <div class="col-6 mx-auto mt-4">
                <div class="form-check form-switch h4">
                    <input class="form-check-input" type="checkbox" role="switch" id="switchProfesor" :checked="esProfesor" @click="esProfesor = !esProfesor">
                    <label class="form-check-label" for="switchProfesor">Quiero ser profesor</label>
                </div>
            </div>
        </div>
        <RegistroAlumno v-if="!esProfesor"></RegistroAlumno>
        <RegistroProfesor v-else></RegistroProfesor>
    </div>
</template>

<script>
    import RegistroProfesor from '../components/RegistroProfesor.vue'
    import RegistroAlumno from '../components/RegistroAlumno.vue'
    export default {
        name: 'RegistroView',
        components: {
        RegistroProfesor,
        RegistroAlumno
        },
        data() {
            return {
                esProfesor: false
            }
        }
    }
</script>

<style scoped>

</style>