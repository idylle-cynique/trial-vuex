import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      message: 'the message in vuex',
      count: 0,
      cartItems: ['Docker', 'Vue.js', 'Rails', 'PostgresSQL'],
    }
  },
  getters: {
    getCartLength(state){
      return state.cartItems.length
    }
  },
  mutations: { // 同期的に行う処理をここに書く
    increment(state,step){
      state.count += step
    },
    decrement(state,step){
      state.count -= step
    }

    

  },
  actions: {

  },
})

export default store