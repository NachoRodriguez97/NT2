<template>
    <div class="background">
        <div class="container row mx-4 align-middle my-auto">
            <div class="col-6 mx-auto">
                <div class="h1 text-white">Tenemos a los mejores profesores</div>
                <p class="h5 text-white">
                    Diseñamos un proceso para seleccionar a los mejores profesionales entre una 
                    larga lista de candidatos. Animate a probar una clase ¡La primera es gratis!
                </p>
                <button id="button" class="mt-3 btn btn-primary">Ver lista de profesores</button>
            </div>
            <div class="col-4"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProfesoresBanner"
}
</script>

<style scoped>
.background {
  background-image: url("./src/assets/img/img8.jpg"); /* The image used */
  background-color: #cccccc; /* Used if the image is unavailable */
  height: 500px; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  display: flex;
  align-items: center;
}

.btn-primary {
    font-family:Akkurat Pro;
    font-weight:bold;
    color:white;
    font-size:26px;
}

.h5
{
    font-weight: normal;
}
</style>