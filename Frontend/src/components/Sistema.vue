<template>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </head>

    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-6">
          <div class="text-left px-5">
            <h1
              class="
                display-1
                text-left
                pt-5
                animate__animated animate__flipInX
              "
              style="
                line-height: 80px;
                font-family: Akkurat Pro;
                font-weight: bold;
              "
            >
              <strong
                >Tu deporte favorito a <br />
                un click de distancia</strong
              >
            </h1>
            <p
              style="
                line-height: 30px;
                font-family: Akkurat Pro;
                font-size: 25px;
              "
              class="animate__animated animate__fadeInLeft"
            >
              Contactá profesores cercanos <br />
              a tu zona y practicá tu disciplina <br />
              favorita de manera fácil y segura
            </p>
          </div>
        </div>

        <div class="col-6">
          <div class="text-center"></div>
          <img
            src="../assets/Home/Imagen.png"
            class="animate__animated animate__fadeInRight"
            width="495"
            height="625"
          />
        </div>
      </div>
    </div>

    <div id="section" class="mt-5 pt-2">
      <h1
        class="display-1 text-left pt-5 text-center"
        style="line-height: 80px; font-family: Akkurat Pro; font-weight: bold"
      >
        <strong><i>ENTRENAR NUNCA FUE TAN FÁCIL</i></strong>
      </h1>
    </div>

    <div class="container text-center">
      <h1
        class="display-5 text-left pt-5"
        style="line-height: 80px; font-family: Akkurat Pro; font-weight: bold"
      >
        <strong>Deportes populares</strong>
      </h1>
    </div>
  </html>
</template>



<script>
export default {
  components: {},
};
</script>

<style type="text/css" media="screen">
@import "../assets/gradient.css";
</style>