import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        finalValue: []
    },
    mutations: {
        SET_FINAL_VALUE (state, payload)
        {
            state.finalValue = payload;
        },
    },
    actions: {

    },
    getters: {
        getFinalValue (state)
        {
            return state.finalValue;
        }
    }
})

export default store;