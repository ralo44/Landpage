<template>
  <v-app>
    <v-app-bar color="cyan darken-3" dark>
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

      <v-spacer></v-spacer>
    </v-app-bar>
    <!-- Order of components -->
    <v-main>
      <Carrousel />, <WebPage />, <parallex />, <infoCards />, <foot />,
      <modalWebPage /> ,
    </v-main>
  </v-app>
</template>

<script>
//Import components
import Carrousel from "./components/Carrousel";
import WebPage from "./components/WebPage";
import modalWebPage from "./components/modalWebPage";
import infoCards from "./components/InfoCards";
import foot from "./components/foot";
import parallex from "./components/parallex";

export default {
  name: "App",

  components: {
    Carrousel,
    WebPage,
    modalWebPage,
    infoCards,
    foot,
    parallex,
  },

  data: () => ({}),
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
