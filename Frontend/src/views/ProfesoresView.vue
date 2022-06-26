<template>
    <ProfesoresBanner></ProfesoresBanner>
    <div class="container-fluid my-4 px-8">
      <div class="row">
        <div class="col-8">
          <ProfesoresList></ProfesoresList>
        </div>
        <div class="col-4">
          <ProfesoresCard></ProfesoresCard>
        </div>
      </div>
    </div>
</template>

<script>
import ProfesoresBanner from '../components/Profesores/ProfesoresBanner.vue'
import ProfesoresList from '../components/Profesores/ProfesoresList.vue'
import ProfesoresCard from '../components/Profesores/ProfesoresCard.vue'

export default {
  name: "ProfesoresView",
  components: {
    ProfesoresBanner,
    ProfesoresList,
    ProfesoresCard
  }
}
</script>

<style>
.px-8 {
  padding-left: 3rem!important;
  padding-right: 3rem!important;
}
</style>