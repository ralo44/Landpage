
<template>
<!-- Grid List -->
  <v-layout column nowrap>
    <v-divider class="mx-4" :inset="inset" vertical></v-divider>
    <v-spacer></v-spacer>
    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-2">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent"
>
              <v-card-text>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3384032305025!2d-89.58807648511673!3d21.019141486003615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f567720f716584b%3A0x68d534fa3ff1996e!2sC%C3%89NIT%20Medical%20Center!5e0!3m2!1ses-419!2smx!4v1602203117436!5m2!1ses-419!2smx"
                  width="400"
                  height="300"
                  frameborder="0"
                  style="border: 0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </v-card-text>
            </v-card>
          </v-flex>
          
          <v-flex xs12 sm6 justify="start">
            <v-card :loading="loading"
    class="mx-auto my-12"
    max-width="374">
              <v-spacer></v-spacer>
              <div></div>   
              <v-btn
                icon
                mdi-facebook
                href="https://www.facebook.com/Otorrino-M%C3%A9rida-DraNeri-2087800781516991"
                x-large=""
                color="blue darken-2"
              >
                <v-icon>mdi-facebook</v-icon>
                
              </v-btn>
              /Otorrino-Merida-DraNeri
              <v-spacer></v-spacer>

              <v-btn
                icon
                mdi-phone
                href="https://www.instagram.com/dra_neri_otorrinomerida/?hl=es-la"
                x-large
                color="orange darken-2"
              >
                <v-icon>mdi-instagram</v-icon>
                
              </v-btn>
              /dra_neri_otorrinomerida
              <v-spacer></v-spacer>

              <v-btn
                icon
                mdi-mail
                href="mailto:draneriorl@gmail.com?subject=Buen día, Me interesan sus servicios, por favor envieme más información."
                x-large
                color="yellow darken-2"
              >
                <v-icon>mdi-mail</v-icon>
              </v-btn>
              draneriorl@gmail.com

              <v-spacer></v-spacer>
              <v-btn
                icon
                mdi-phone
                x-large
                color="green darken-2"
              >
                <v-icon>mdi-phone</v-icon>
              </v-btn>
              9993899382
            </v-card>
          </v-flex>          
        </v-layout>
      </v-container>
    </section>
    <v-spacer></v-spacer>
    <v-divider class="mx-4" :inset="inset" vertical></v-divider>
 
  </v-layout>
  
</template>


<script>

export default {
  name: "WebPage",
  components: {
  },
  props: {
    large: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      title: "Your Logo",
      hidden: false,
      sectionImg: require("../assets/operacion.jpg"),
      items: [
        {
          name: "Facebook",
          icon: "mdi-facebook",
        },
        {
          name: "Email",
          icon: "mdi-email",
        },
        {
          name: "Phone",
          icon: "mdi-phone",
        },
      ],
      icons: ["mdi-facebook", "mdi-email", "mdi-phone"],
    };
  },
  mounted() {
    this.$locale = "es";
  },
  methods: {
    setLocaleToFr() {
      this.$locale = "es";
    },
  },
};
</script>
