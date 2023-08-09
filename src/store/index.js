
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0,
      todos: [
        {
          content: "I AM A HARCODED-TODO",
          isCompleted: false,
          dateTime: 1234462134,
        }
      ]
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store;