import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import { state } from './states'
// import { getter } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'

export default new Vuex.Store({
  state,
  // getter,
  mutations,
  actions,
})
