import axios from 'axios';
import store from '@/store';
import router from '@/router';
const state = {
    user: null,
};

const getters = {
    isAuthenticated: state => !!state.user,    
    StateUser: state => state.user,
    userId: state => state.user.id,
};
const actions = {
    async SignUp({dispatch}, form) {
            const res = await axios.post('/auth/sign-up', form)
            let UserForm = {};
            UserForm.email = form.email;
            UserForm.password = form.password;
            if(!res.data.status && res.data.statusCode){
                return store.dispatch('ShowMessage',res.data.message);
            }
            
            await dispatch('SignIn', UserForm);
            
    },

    async SignIn({commit}, User) {
        const res = await axios.post('/auth/sign-in', User);
        console.log(res);
        if(!res.data.status && res.data.statusCode){
            return store.dispatch('ShowMessage',res.data.message);
        }
        await commit('SetUser', res.data);
        axios.defaults.headers.common['x-access-token'] = res.data.accessToken;
        router.push({ name: 'profile', params: { id: res.data.id }});
      },
      
    async LogOut({commit}){
        let user = null;
        commit('LogOut', user)
    },

    async SetName({commit},username){
        commit('SetName', username)
    },

};
const mutations = {
    SetUser(state, user){
        state.user = user;
    },
    SetName(state,username){
        state.user.username = username;
    },
    LogOut(state){
        state.user = null;
        state.token = null;
    },
};
export default {
  state,
  getters,
  actions,
  mutations
};

