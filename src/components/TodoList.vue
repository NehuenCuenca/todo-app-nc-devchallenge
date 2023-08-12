<template>
  <div class="todo-list-root">
    <ul class="todos-list">
      <TodoItemList v-for="(todo, todoIndex) in todos" :key="todoIndex" :todoInfo="todo" />
      <li class="no-todos" v-if="!haveTodosAvailable && currentStateTodo != 'Completed'">You don't have todo's, until you write one 😏.</li>
      <li class="no-todos" v-if="!haveTodosAvailable && currentStateTodo === 'Completed'">You don't have completed todo's, until you completed one 😁.</li>
    </ul>

    <button class="delete-all-btn" v-if="currentStateTodo === 'Completed' && haveTodosAvailable" @click="deleteTodos">
      ❌ Delete all
    </button>
  </div>
</template>

<script>
import { computed, watch, } from "vue";
import store from "../store";
import TodoItemList from '../components/TodoItemList.vue'

export default {
  name: "TodoList",
  components: { TodoItemList },
  setup() {
    const currentStateTodo = computed(
      () => store.state.currentStateTodosGetter
    );

    const todos = computed(() => store.getters.getTodosByCurrentState);
    const haveTodosAvailable = computed(() => todos.value.length > 0 );

    const deleteTodos = () => { 
      store.commit('deleteAllTodos')
      store.commit('saveTodosOnLS')
    }

    return {
      currentStateTodo,
      todos,
      haveTodosAvailable,
      deleteTodos
    };
  },
};
</script>

<style scoped>
.todo-list-root {
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 5vh 0;
}

.todos-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5vh 0;
}

.delete-all-btn {
  width: 124px;
  height: 40px;
  background-color: #eb5757;
  color: white;
  border-radius: 4px;
  border: none;
  font: 600 12px "Montserrat", sans-serif;
  align-self: flex-end;
}

li.no-todos {
  font-size: 1.1rem;
  color: rgb(96, 96, 96);
  font-style: italic;
}
</style>
