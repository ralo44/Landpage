
<template>
  <v-container grid-list-xl>
    <v-layout row wrap justify-center class="my-5">
      <v-flex xs12 sm4>
        <v-card class="mx-auto" max-width="344">
          <v-img src="../assets/rino3.jpg" height="200px"></v-img>

          <v-card-title> Rinoplastia 
          </v-card-title>

          <v-card-actions>
            <v-btn color="blue lighten-2" text> Conoce más </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                La Rinoplastia es una técnica que mejora esteticamente la nariz, es realizada con anestesia local o general, depende la valoración.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-flex>

      <v-flex xs12 sm4>
        <v-card class="mx-auto" max-width="344">
          <v-img src="../assets/bbotox.jpg" height="200px"></v-img>

          <v-card-title> Botox </v-card-title>

          <v-card-actions>
            <v-btn color="blue lighten-2" text> Conoce más </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show1 = !show1">
              <v-icon>{{
                show1 ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show1">
              <v-divider></v-divider>

              <v-card-text>
                Es un tratamiento estético utilizado para eliminar las arrugas de expresión.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-flex>

      <v-flex xs12 sm4>
        <v-card class="mx-auto" max-width="344">
          <v-img src="../assets/oido1.jpg" height="200px"></v-img>

          <v-card-title> Otoplastia </v-card-title>

          <v-card-actions>
            <v-btn color="blue lighten-2" text> Conoce más </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show2 = !show2">
              <v-icon>{{
                show2 ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show2">
              <v-divider></v-divider>

              <v-card-text>
                La otoplastia es una técnica que permite resolver
                quirúrgicamente estos casos y es una cirugía que se puede
                realizar desde los 6 años.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-flex>

      <v-flex xs12 sm4>
        <v-card class="mx-auto" max-width="344">
          <v-img src="../assets/perfil.jpg" height="200px"></v-img>

          <v-card-title> Perfiloplastia </v-card-title>

          <v-card-actions>
            <v-btn color="blue lighten-2" text> Conoce más </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show4 = !show4">
              <v-icon>{{
                show4 ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show4">
              <v-divider></v-divider>

              <v-card-text>
               Es un conjunto de técnicas quirúrgicas destinadas a armonizar la cara, buscando la máxima belleza. Las partes que fundamentalmente se modifican son la NARIZ y el MENTON (la barbilla), pero podemos acompañar también con pequeños retoques en frente, labios y papada.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-flex>

      <v-flex xs12 sm4>
        <v-card class="mx-auto" max-width="344">
          <v-img src="../assets/blefo.jpg" height="200px"></v-img>

          <v-card-title> Blefoplastia </v-card-title>

          <v-card-actions>
            <v-btn color="blue lighten-2" text> Conoce más </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show5 = !show5">
              <v-icon>{{
                show5 ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show5">
              <v-divider></v-divider>

              <v-card-text>
                Es la cirugía que busca rejuvenecer los párpados mediante la remodelación de los tejidos perioculares, existen diferentes técnicas, una que es minimamente invasiva y sin cicatrices.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data: () => ({
    show: false,
    show1: false,
    show2: false,
    show4: false,
    show5: false,
  }),
};
</script>