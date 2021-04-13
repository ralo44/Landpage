<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      class="secondary"
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="@/assets/sellodam.jpg" alt="Logo" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title accent--text">Catálogo</v-list-item-title>
            <v-list-item-subtitle></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          link
          @click="$vuetify.goTo(link)"
          
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
              text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    

    <v-app-bar
      app
      :color="color"
      :flat="flat"
      secondary
      class="px-15"
      :class="{ expand: flat }"
    >
      <v-toolbar-title >
        <v-img src="@/assets/sellodam.jpg" max-width="50px" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />
      <div v-else>
        <v-btn text @click="$vuetify.goTo('#hero')">
          <h2 class="mr-2 accent--text">Inicio</h2>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#features')">
          <h2 class="mr-2 accent--text">Servicios</h2>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#mapa')">
          <h2 class="mr-2 accent--text">Ubicacion</h2>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<style scoped>
.v-toolbar {
  transition: 0.8s;
}
.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>

<script>
export default {
  name: "navigation",
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Inicio", "#hero"],
      ["mdi-information-outline", "Servicios", "#features"],
      ["mdi-download-box-outline", "Ubicacion", "#mapa"]
    ],
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },
  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>