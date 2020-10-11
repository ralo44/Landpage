<template>
  <!-- footer -->
  <section>
    <v-footer
      flat
      class="blue darken-2 white--text text-center"
      color="cyan darken-3"
      dark
      default
    >
      <div>
        <v-layout column align-center justify-center class="white--text">
          <img src="../assets/sellodam.jpg" alt="Vuetify.js" height="50" />
        </v-layout>
      </div>
      <v-spacer></v-spacer>
      <div class="text-center">
        <br />999 389 9382 <br />draneriorl@gmail.com <br />Cenit Medical Center
        piso 7, Consultorio #702, <br />Mérida, Yucatán
      </div>
      <v-spacer></v-spacer>
      <div>
        <v-flex xs12 sm6 justify="start">
          <v-card class="elevation-0 transparent">
            <v-btn
              icon
              mdi-facebook
              href="https://www.facebook.com/Otorrino-M%C3%A9rida-DraNeri-2087800781516991"
              x-large=""
              color="white darken-2"
            >
              <v-icon>mdi-facebook</v-icon>
            </v-btn>

            <v-btn
              icon
              mdi-phone
              href="https://www.instagram.com/dra_neri_otorrinomerida/?hl=es-la"
              x-large
              color="white darken-2"
            >
              <v-icon>mdi-instagram</v-icon>
            </v-btn>

            <v-btn
              icon
              mdi-mail
              href="mailto:draneriorl@gmail.com?subject=Buen día, Me interesan sus servicios, por favor envieme más información."
              x-large
              color="white darken-2"
            >
              <v-icon>mdi-mail</v-icon>
            </v-btn>

            <v-btn icon mdi-phone x-large color="white darken-2">
              <v-icon>mdi-phone</v-icon>
            </v-btn>
          </v-card>
        </v-flex>
      </div>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>Ralo</strong>
      </v-card-text>
    </v-footer>
  </section>
</template>