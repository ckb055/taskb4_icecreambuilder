import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import ingredients from './modules/ingredients'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  state: {
    isPageLoading: true,
  },

  mutations: mutations,

  actions: {},

  modules: {
    ingredients
  }
})
