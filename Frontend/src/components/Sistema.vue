<template>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </head>

    <div class="container mt-5">
      <div class="row px-5">
        <div class="col-6 px-5">
          <div class="text-left">
            <h1
              class="
                display-1
                text-left
                pt-5
                animate__animated animate__flipInX
              "
              style="
                font-family: Akkurat Pro;
                font-weight: bold;
              "
            >
              <strong
                >Tu deporte favorito a
                <br> un click de distancia</strong
              >
            </h1>
            <p
              style="
                line-height: 30px;
                font-family: Akkurat Pro;
                font-size: 25px;
              "
              class="mt-3 animate__animated animate__fadeInLeft"
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
        class="display-2 text-left pt-5 text-center"
        style="line-height: 80px; font-family: Akkurat Pro; font-weight: bold"
      >
        <strong><i>ENTRENAR NUNCA FUE TAN FÁCIL</i></strong>
      </h1>
    </div>

    <div class="text-center">
      <h1
        class="display-5 pt-5"
        style="line-height: 80px; font-family: Akkurat Pro; font-weight: bold"
      >
        <strong>Deportes populares</strong>
      </h1>
    </div>

    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner mt-5">
    <div class="carousel-item active text-center">
      <img src="../assets/Home/Functional.png" width=50% height=50% alt="...">
    </div>
    <div class="carousel-item text-center">
      <img src="../assets/Home/Functional.png" width=50% height=50% alt="...">
    </div>
    <div class="carousel-item text-center">
      <img src="../assets/Home/Functional.png" width=50% height=50% alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
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