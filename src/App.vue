<template>
  <v-app>
   <navigation :color="color" :flat="flat" />
    <!-- <v-app-bar color="cyan darken-3" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-3"
          contain
          src="./assets/sellodam.jpg"
          transition="scale-transition"
          width="100"
        />
        <h4>Otorrinolaringóloga Médico Militar</h4>
      </div>

      <Carrousel />, 
    </v-app-bar> -->
    <!-- Order of components -->
    <v-main class="pt-0">
      <home/>,
      <WebPage />,  
      <modalWebPage /> ,
    </v-main>
    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        left
        color="secondary"
        @click="toTop"
      >
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
     </v-scale-transition>
    <foot />
  </v-app>
</template>

<script>
//Import components
import home from "./components/home";
import navigation from "./components/navigation";
import WebPage from "./components/WebPage";
import modalWebPage from "./components/modalWebPage";
import foot from "./components/foot";

export default {
  name: "App",

  components: {
    home,
    navigation,
    WebPage,
    modalWebPage,
    foot,
  },
  data: () => ({
    fab: null,
    color: "",
    flat: null,
  }),
  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "transparent";
      this.flat = true;
    }
  },
  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    },
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },

};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: primary;
  margin: 0px;
  margin-bottom: 0px;
}
</style>
