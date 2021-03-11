import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

import router from '@/router';
import store from '@/store';
import i18n from '@/locales';
import { eventBus } from '@/utils/eventBus';
import vConfig from '@/config/vConfig';
import App from '@/App.vue';

import '@/assets/scss/style.scss';

// Register layouts
const HomePageLayout = () => import('./layouts/HomePageLayout.vue');
Vue.component('HomePageLayout', HomePageLayout);

// Config
Vue.config.productionTip = false;
Vue.prototype.$backendUrl = process.env.VUE_APP_API_BASE_URL;
Vue.prototype.$eventBus = eventBus;
Vue.prototype.$vConfig = vConfig;

Vue.use(VueLazyload, {
  attempt: 2,
  preLoad: 1.3,
  lazyComponent: true,
  error: vConfig.ERROR_ICON,
  loading: vConfig.SLOW_CONNECTION_ICON,
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
