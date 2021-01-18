import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import auth from '@/modules/auth';
import socket from '@/modules/socket';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: null,
  },
  
  mutations: {
    setMessage(state,message){
      state.message = message;
    }
  },
  actions: {
    ShowMessage({commit},message){
      commit('setMessage',message);
    },
    
  },
  modules: {
    auth,
    socket
  },
  plugins: [createPersistedState()]
})
