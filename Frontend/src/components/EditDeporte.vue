<template>
  <div style="margin: 10px">
    
    <h1>Edit Deportes</h1>
    <hr>

    
    <!-- {{$route.params.nombre}} -->
    {{nombreNuevo}}
    <input>
  </div>
</template>
<script>
export default {
    props: ['nombre'],

    created() {
        this.$watch(
        () => this.$route.params,
        (toParams, previousParams) => {
            nombreNuevo = toParams // $route.params.nombre
        }
        )
    },


    data(){
        return {
            nombreNuevo: ''
        }
    }
}
</script>