import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#729eb1",
                secondary: "#4d92b1",
                accent: "#95bde7"
            }
        }
    }
});
