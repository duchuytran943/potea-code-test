import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';

Vue.use(Vuex);

const strictModeVuex = process.env.VUE_APP_ENV !== 'production';

export default new Vuex.Store({
  // Assign the modules to the store
  modules,

  // Root state
  actions: {},

  // Root state
  state: {},

  // Root mutations
  mutations: {},

  // If strict mode Vuex
  strict: strictModeVuex,
});
