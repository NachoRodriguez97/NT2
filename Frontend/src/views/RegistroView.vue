<template>
    <div>
        <p>Eres un {{ msg }} ? Haz click<a class="btn btn-primary" href="#" role="button">aqui</a></p>
        <Registro></Registro>
        <RegistroProfesor :v-show="esProfesor"></RegistroProfesor>
    </div>
</template>

<script>
    import RegistroProfesor from '../components/RegistroProfesor.vue'
    import Registro from '../components/Registro.vue'
    export default {
        name: 'RegistroView',
        components: {
        RegistroProfesor,
        Registro
        },
        data() {
            return {
                msg: "profesor",
                esProfesor: false
            }
        }
    }
</script>

<style scoped>

</style>