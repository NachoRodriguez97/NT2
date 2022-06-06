<template>
  <div>
    <div class=" container mt-5">
      <div @click="scrollToTop" class="row px-5">
        <div class="col-6 px-5">
          <div class="text-left">
            <h1
              class="
                display-1
                text-left
                pt-5
                animate__animated animate__flipInX
              "
              style="font-family: Akkurat Pro; font-weight: bold"
            >
              <strong
                >Llegó la <br />
                hora de <br />
                entrenar</strong
              >
            </h1>

            <div>
            <button
              id="button"
              class="mt-3"
              style="
                font-family: Akkurat Pro;
                font-weight: bold;
                color: white;
                font-size: 30px;
              "
            >
              Reservá tu clase
            </button>
            </div>
          </div>
        </div>

        <div class="col-6">
          <div class="text-center"></div>
          <img
            src="../assets/Reservas/Hombre.png"
            width="90%"
            height="90%"
          />
        </div>
      </div>
    </div>

    <div id="section2">
      <a id="formulario"></a>
      <div @click="scrollToTop" id="rectangle">
        <div class="text-center">
          <div class="row container-fluid">
            <p
              class="text-dark mt-5"
              style="font-family: Akkurat Pro; font-weight: bold"
            >
              Elegí tu deporte
            </p>
          </div>
          <div class="row container-fluid">
            <input id="date" class="mt-2" type="datalist" />
          </div>
          <div class="row container-fluid">
            <p
              class="text-dark mt-5"
              style="font-family: Akkurat Pro; font-weight: bold"
            >
              Elegí tu fecha
            </p>
          </div>

          <div class="row container-fluid">
            <input id="date" class="mt-2" type="date" />
          </div>
          <div class="row container-fluid">
            <p
              class="text-dark mt-5"
              style="font-family: Akkurat Pro; font-weight: bold"
            >
              Elegí tu profesor o profesora
            </p>
          </div>
          <div class="row container-fluid">
            <input id="date" class="mt-2" type="datalist" />
          </div>
           <button
              id="button"
              class="mt-5"
              style="
                font-family: Akkurat Pro;
                font-weight: bold;
                color: white;
                font-size: 30px;
              "
            >
              Reservá
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 
 methods:{
     scrollToTop() {
           window.scrollTo(0, 1000);
  }
 }
};

</script>

<style type="text/css" media="screen">
@import "../assets/gradient.css";
</style>