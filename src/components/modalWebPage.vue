<template>
  <v-layout column nowrap>
    <v-col>

      <v-btn fab dark large color="green" fixed right bottom @click="dialog= true">
        <v-icon size="70" dark>mdi-plus</v-icon>
    </v-btn>

      <!-- Agregar Modal Agregar Evento -->
      <v-dialog v-model="dialog" max-width="500">
        <v-card>
          <v-container>
            <v-form @submit.prevent="addEvent">
                <div class="cyan">
                <h3>Contactanos</h3>
                </div>
              <v-text-field v-model="name" type="text" label="Nombre del paciente"></v-text-field>
              <v-text-field v-model="phone" type="phone" label="Telefono"></v-text-field>
              <v-text-field v-model="email" type="email" label="Email"></v-text-field>
              <v-text-field v-model="details" type="text" label="Otros"></v-text-field>

              <v-select
                v-model ="select"
                :items="items"
                :menu-props="{ maxHeight: '400' }"
                label="Lista de información"
                multiple
                persistent-hint
              ></v-select>

              <v-btn type="submit" color="cyan" class="mr-4" @click.stop="dialog = false" >Enviar

              </v-btn>
              <v-btn type="submit" color="secondary" class="mr-4" @click.stop="dialog = false">Cancelar</v-btn>
            </v-form>
          </v-container>
        </v-card>
      </v-dialog>
    </v-col>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    name: null,
    email: null,
    phone: null,
    details: null,
    items: ["Oido", "Cirugía", "Tratamiento", "Revisión"],
    select: null
  }),
  methods:{
      addEvent(){
          try{
            if(this.name && this.email)
              
              alert('Te contataremos pronto.');
            else
              alert('Ingresa datos completos.');

          }catch(error){
              console.log(error);
          }
      }
    }
  
  
}
</script>