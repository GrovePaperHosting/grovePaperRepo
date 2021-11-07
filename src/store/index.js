import Vue from 'vue';
import Vuex from 'vuex';
//import createPersistedState from 'vuex-persistedstate';


Vue.use(Vuex)

/*const persisteceData = createPersistedState({
  paths: ['User.user', 'User.jwt', 'User.token', 'User.auth', 'Commercial.notice']
})*/

export default new Vuex.Store({
/*  modules: {
    User,
    Loading,
    Job,
    Follow,
    Commercial,
    Notifications,
    Tutorial
  },
  plugins: [persisteceData]*/
})
