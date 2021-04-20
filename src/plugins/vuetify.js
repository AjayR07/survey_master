/* eslint-disable no-unused-vars */
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import Ripple from 'vuetify/lib/directives/ripple';

let systheme;
if (window.matchMedia) {
  // Check if the dark-mode Media-Query matches
  systheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
}

Vue.use(Vuetify, {
    directives: {
      Ripple,
    },
  });

export default new Vuetify({
  theme: { dark: false },
});
