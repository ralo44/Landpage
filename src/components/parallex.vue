<template>
<section>
      <v-parallax :src="sectionImg" height="500"></v-parallax>
    </section>  
</template>
<script>
export default {
    name:"parallex",
    props: {
    large: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
              sectionImg: require("../assets/operacion.jpg"),

    }
  }
}
</script>