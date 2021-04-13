<template>
  <section id="mapa">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col sm="4" >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3384032305025!2d-89.58807648511673!3d21.019141486003615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f567720f716584b%3A0x68d534fa3ff1996e!2sC%C3%89NIT%20Medical%20Center!5e0!3m2!1ses-419!2smx!4v1602203117436!5m2!1ses-419!2smx"
                  max-width="350"
                  height="300"
                  frameborder="0"
                  style="border: 0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                  class="d-block ml-auto mr-auto" 
                ></iframe>
            </v-col>
            <v-col cols="12" sm="8" class="primary--text text-left">
              <h1 class="font-weight-light display-2 mb-2">Nuestro domicilio</h1>
              <h1 class="font-weight-light">
                Estamos comprometidos con tu salud, Nos puedes encontrar en la torre Cenit, Mérida, Yucatán.
              </h1>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#mapa {
  background-image: url("~@/assets/wave.svg");
  background-attachment: fixed;
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
  height: 800px;
}
#mapa .container,
#mapa .row {
  height: 100%;
}
</style>