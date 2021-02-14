import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import auth from '@/modules/auth';
import socket from '@/modules/socket';

Vue.use(Vuex);

const authState = createPersistedState({
  paths:['auth'],
})

export default new Vuex.Store({
  state: {
    message: null,
    isLoading: false,
  },
  getters:{
    getLoading:(state)=>state.isLoading,
  },
  mutations: {
    setMessage(state,message){
      state.message = message;
    },
    setLoader(state){
      state.isLoading = !state.isLoading;
    },
    hideLoader(state){
      state.isLoading = false;
    },
    showLoader(state){
      state.isLoading = true;
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
  plugins: [authState],
});
