
import { nextTick } from 'vue';
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      todos: [
        {
          content: "I AM A HARCODED-TODO",
          isCompleted: false,
          dateTime: 1234462131,
        },
        {
          content: "I AM A HARCODED-TODO and completed1",
          isCompleted: false,
          dateTime: 1234462132,
        },
        {
          content: "I AM A HARCODED-TODO and completed2",
          isCompleted: true,
          dateTime: 1234462133,
        },
        {
          content: "I AM A HARCODED-TODO and completed3",
          isCompleted: true,
          dateTime: 1234462134,
        },
        {
          content: "I AM A HARCODED-TODO and completed4",
          isCompleted: true,
          dateTime: 1234462135,
        }
      ],
      
      currentStateTodosGetter: "All"
    }
  },


  mutations: {
    addNewTodo(state, newTodo) { state.todos.unshift(newTodo) },

    updateTodo(state, { id }) {
      const todoToEdit = state.todos.find(({dateTime}) => dateTime === id)
      todoToEdit.isCompleted = !todoToEdit.isCompleted
    },

    deleteTodo(state, { id }) {
      state.todos = [ ...state.todos.filter(t => t.dateTime != id)]
    },

    changeGetter (state, newGetter) {
      state.currentStateTodosGetter = newGetter
    }
  },

  
  getters: {
    getTodosByCurrentState() {
      switch (store.state.currentStateTodosGetter) {
        case "All":
          return store.getters.allTodos
        break;
        case "Active":
          return store.getters.activeTodos
        break;
        case "Completed":
          return store.getters.completedTodos
        break;
      }
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