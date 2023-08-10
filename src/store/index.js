
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
          dateTime: 1234462133,
        },
        {
          content: "I AM A HARCODED-TODO and completed",
          isCompleted: true,
          dateTime: 1234462134,
        }
      ],
      
      currentStateTodosGetter: "All"
    }
  },


  mutations: {
    addNewTodo(state, newTodo) {
      state.todos.push(newTodo)
    },

    increment (state) {
      state.count++
    },

    changeGetter (state, newGetter) {
      state.currentStateTodosGetter = newGetter
    }
  },

  
  getters: {
    getTodosByCurrentState() {
      let todos = [];

      switch (store.state.currentStateTodosGetter) {
        case "All":
          todos = store.getters.allTodos
        break;
        case "Active":
          todos = store.getters.activeTodos
        break;
        case "Completed":
          todos = store.getters.completedTodos
        break;
      }
      
      return todos;
    },
    allTodos (state) {
      return state.todos
    },
    activeTodos (state) {
      return state.todos.filter(todo => !todo.isCompleted)
    },
    completedTodos (state) {
      return state.todos.filter(todo => todo.isCompleted)
    },
  }
})

export default store;