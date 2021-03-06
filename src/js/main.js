import DefaultLayout from 'js/layouts/default';
import BlankLayout from 'js/layouts/blank';

import 'js/vue-resource-config';

import router from 'js/router.js';
import store from 'js/vuex.js';
import i18n from 'js/i18n.js';
import Icon from 'vue-awesome';

import {addIcons} from 'ionicons';
import {logIn, list, menuSharp} from 'ionicons/icons';

/* https://github.com/ionic-team/ionic-docs/issues/446#issuecomment-583018126 */
import {defineCustomElements} from '@ionic/core/loader';

defineCustomElements(window).then(() => { /* Ionic is loaded! */ });

addIcons({
  'log-in': logIn,
  'list': list,
  'menu-sharp': menuSharp,
});

require('scss/main.scss');

Vue.router = router;
Vue.store = store;
Vue.i18n = i18n;
Vue.config.ignoredElements = [/^ion-/];

new Vue({
  router,
  store,
  i18n,
  components: {
    DefaultLayout,
    BlankLayout
  }
}).$mount('#app');
