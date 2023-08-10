<template>
    <ul class="states-todos-list">
      <li class="state-todo-item active">
        <button>All</button>
      </li>
      <li class="state-todo-item">
        <button>Active</button>
      </li>
      <li class="state-todo-item">
        <button>Completed</button>
      </li>
    </ul>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    name: "StatesTodosList",
    setup () {}
}
</script>

<style scoped>
.states-todos-list {
  width: 70%;
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid var(--greyBorder);
  border-radius: 1%;
}
.states-todos-list .state-todo-item {
  min-width: 15%;
  text-align: center;
  padding: 1rem 0;
}
.states-todos-list .state-todo-item.active { 
  border-bottom: 3.5px solid var(--blueContrast);
}
.states-todos-list .state-todo-item button {
  background-color: white;
  border: none;
  font: 600 14px 'Montserrat', sans-serif;
}
</style>