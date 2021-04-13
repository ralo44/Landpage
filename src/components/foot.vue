<template>
  <v-footer dark padless>
    <v-card flat tile class="secondary white--text text-center">
      <v-card>
        
      </v-card>
      <v-card-text>
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-4 white--text"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon size="24px">{{ icon.text }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0 text-center">
        <br />999 389 9382 <br />draneriorl@gmail.com <br />Cenit Medical Center
        piso 7, Consultorio #702, <br />Mérida, Yucatán
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>ralo44</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style scoped>
.v-card {
  width: 100%;
}
</style>

<script>
export default {
  data: () => ({
    icons: [
      {
        text: "mdi-facebook",
        link: "https://www.facebook.com/Otorrino-M%C3%A9rida-DraNeri-2087800781516991",
      },
      {
        text: "mdi-mail",
        link: "mailto:draneriorl@gmail.com?subject=Buen día, Me interesan sus servicios, por favor envieme más información.",
      },
      {
        text: "mdi-instagram",
        link: "https://www.instagram.com/dra_neri_otorrinomerida/?hl=es-la",
      },
      {
        text: "mdi-whatsapp",
        link: "",
      },
    ],
  }),
};
</script>