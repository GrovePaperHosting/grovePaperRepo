import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        finalValue: [],
        totalPrice: null,
        //cartItems: []
        cartItems:
        [
            {
                id: 'e2r3',
                price: 123,
                name: 'Bold type planner',
                amount: 2,
                imgUrl: "https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Big-Stripe-2.png?alt=media&token=5acde2ea-35ad-4864-9ef9-aa0dd94f9459"
            },
            {
                id: 'e2r32',
                price: 123,
                name: 'Paint Night planner',
                amount: 3,
                imgUrl: "https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Big-Stripe-2.png?alt=media&token=5acde2ea-35ad-4864-9ef9-aa0dd94f9459"
            }
        ]
    },
    mutations: {
        SET_FINAL_VALUE (state, payload)
        {
            state.finalValue = payload;
        },
        SET_CART_ITEMS (state, payload)
        {
            state.cartItems = payload;
        },
    },
    actions: {

    },
    getters: {
        getFinalValue (state)
        {
            return state.finalValue;
        },
        getCartItems (state)
        {
            return state.cartItems;
        }
    }
})

export default store;