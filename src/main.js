import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
// import DatetimePicker from 'vuetify-datetime-picker'
//import DatePicker from "vue2-datepicker";
//import * as VueGoogleMaps from 'vue2-google-maps'


Vue.config.productionTip = false;
// Vue.use(DatetimePicker)

new Vue({
  // router,
  // store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
