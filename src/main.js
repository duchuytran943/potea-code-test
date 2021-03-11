import Vue from 'vue';

import router from '@/router';
import store from '@/store';
import i18n from '@/locales';
import { eventBus } from '@/utils/eventBus';
import App from '@/App.vue';

import '@/assets/scss/style.scss';

// Register layouts
const HomePageLayout = () => import('./layouts/HomePageLayout.vue');
Vue.component('HomePageLayout', HomePageLayout);

// Config
Vue.config.productionTip = false;
Vue.prototype.$backendUrl = process.env.VUE_APP_API_BASE_URL;
Vue.prototype.$eventBus = eventBus;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
