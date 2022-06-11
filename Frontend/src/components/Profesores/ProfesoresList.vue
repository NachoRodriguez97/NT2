<template>
    <div class="list-group w-auto">
        <ProfesoresListItem v-for="n in 5"></ProfesoresListItem>
    </div>
</template>

<script>
import ProfesoresListItem from './ProfesoresListItem.vue'
export default {
    name: "ProfesoresList",
    components: {
        ProfesoresListItem
    }
}
</script>

<style scoped>

</style>