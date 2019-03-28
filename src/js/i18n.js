import VueI18n from 'vue-i18n';

const context = require.context('locales', true, /\.json$/);

const locales = {};

context.keys().forEach(filename => {
  _.merge(locales, context(filename));
});

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'es',
  messages: locales
});
