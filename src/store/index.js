import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import User from './modules/User';
import Loading from './modules/Loading';
import Job from './modules/Job';
import Follow from './modules/Follows';
import Commercial from './modules/Commercial';
import Notifications from './modules/Notifications';
import Tutorial from './modules/Tutorial';

Vue.use(Vuex)

const persisteceData = createPersistedState({
  paths: ['User.user', 'User.jwt', 'User.token', 'User.auth', 'Commercial.notice']
})

export default new Vuex.Store({
  modules: {
    User,
    Loading,
    Job,
    Follow,
    Commercial,
    Notifications,
    Tutorial
  },
  plugins: [persisteceData]
})
