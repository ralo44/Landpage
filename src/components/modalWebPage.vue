<template>
  <v-layout column nowrap>
    <v-col>

      <v-btn fab dark large class="primary" fixed right bottom @click="dialog= true">
        <v-icon size="17" dark>Info</v-icon>
    </v-btn>

      <!-- Agregar Modal Agregar Evento -->
      <v-dialog v-model="dialog" max-width="500">
        <v-card>
          <v-container >       
            <v-form @submit.prevent="addEvent" >
                <div >
                <h3>Contactános</h3>
                </div>
              <v-text-field v-model="name" type="text" :rules="nameRules" label="Nombre del paciente"></v-text-field>
              <v-text-field v-model="phone" type="phone" :rules="phoneRules" label="Telefono"></v-text-field>
              <v-text-field v-model="email" type="email" :rules="emailRules" label="Email"></v-text-field>
              <v-text-field v-model="details" type="text" label="Comentario"></v-text-field>
              <v-select
                v-model ="select"
                :items="items"
                :menu-props="{ maxHeight: '400' }"
                label="¿Que información necesita?"
                multiple
                persistent-hint
              ></v-select>
              <v-btn type="submit" color="primary" class="mr-4" @click.stop="dialog = false" >Enviar</v-btn>
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
    name:null,
    nameRules: [
      (v) => !!v || "Campo obligatorio",
      (v) => (v && v.length >= 6) || "Debe ser mayor a 6 caracteres",
    ],
    email: null,
    emailRules: [
      (v) => !!v || "Campo obligatorio",
      (v) => /.+@.+\..+/.test(v) || "Ingrese Email valido.",
    ],
    phone: null,
    phoneRules: [
      (v) => !!v || "Campo obligatorio",
      (v) => (v && v.length >= 10) || "Minimo de 10 caracteres",
    ],
    details: null,
    items: ["Oido", "Cirugía", "Tratamiento", "Revisión"],
    select: null,
  }),
  
  methods:{
      addEvent(){
          try{
            if(this.name && this.email){
              alert('Te enviaremos información.');
            }else{
              alert('Ingresa datos completos.');
            }
          }catch(error){
              console.log(error);
          }
      }
    }
}
</script>