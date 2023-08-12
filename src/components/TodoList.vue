<template>
  <div class="todo-list-root">
    <ul class="todos-list">
      <TodoItemList v-for="(todo, todoIndex) in todos" :key="todoIndex" :todoInfo="todo" />
    </ul>

    <!-- <button class="delete-all-btn" v-if="currentStateTodo === 'Completed'">
      ❌ Delete all
    </button> -->
  </div>
</template>

<script>
import { computed, } from "vue";
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

    return {
      currentStateTodo,
      todos,
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
</style>
