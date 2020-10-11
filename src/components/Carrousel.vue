<template>
  <v-carousel cycle height="350">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      contain
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("../assets/rino2.jpg"),
        },
        {
          src: require("../assets/biche.jpg"),
        },
        {
          src: require("../assets/oido1.jpg"),
        },
      ],
    };
  },
};
</script>