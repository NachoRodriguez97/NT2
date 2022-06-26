<template>
    <div class="list-group w-auto">
        <ProfesoresListItem v-for="profesor in profesores" 
        :key="profesor._id" 
        :name="profesor.nombre" 
        :lastname="profesor.apellido" 
        :email="profesor.mail"
        ></ProfesoresListItem>
    </div>
</template>

<script>
import ProfesoresListItem from './ProfesoresListItem.vue'
import apiClient from '../../services/profesoresService'

export default {
    name: "ProfesoresList",
    components: {
        ProfesoresListItem
    },

    data() {
        return {
            profesores: []
        }
    },

    methods: {
        async getProfesores() {
            try {
                const profesores = await apiClient.getAllProfesores();
                this.profesores = profesores.data;
                console.log(this.profesores);
            } catch(error) {
                console.log(error);
            }
        }
    },

    created() {
        this.getProfesores();
    }
}
</script>

<style scoped>

</style>