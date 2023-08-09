<template>
    <ul class="states-todos-list">
      <li class="state-todo-item">
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

</style>