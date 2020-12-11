import axios from 'axios';
import store from '@/store';

const state = {
    user: null,
};

const getters = {
    isAuthenticated: state => !!state.user,    
    StateUser: state => state.user,
};
const actions = {
    async SignUp({dispatch}, form) {
            const res = await axios.post('/auth/sign-up', form)
            let UserForm = {};
            UserForm.email = form.email;
            UserForm.password = form.password;
            console.log(res);
            if(!res.data.status && res.data.statusCode){
                return store.dispatch('ShowMessage',res.data.message);
            }
            
            await dispatch('SignIn', UserForm);
            
    },

    async SignIn({commit}, User) {
        const res = await axios.post('/auth/sign-in', User);
        if(!res.data.status && res.data.statusCode){
            return store.dispatch('ShowMessage',res.data.message);
        }
        await commit('setUser', res.data);
        axios.defaults.headers.common['x-access-token'] = res.data.accessToken;
        // router.push('/');
      },
      
    async LogOut({commit}){
        let user = null;
        commit('LogOut', user)
    },

    // async Test({commit}){
    //     const all = await axios.get('test/all');
    //     console.log(all);
    //     const priv = await axios.get('test/user');
    //     console.log(all);
    // }
};
const mutations = {
    setUser(state, user){
        state.user = user;
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