<template>
  <header>
    <h1>#todo</h1>
  </header>

  <main>
    <StatesTodosList />
    <FormInputTodo />
    <TodoList />
  </main>
</template>

<script>

import StatesTodosList from './components/StatesTodosList.vue'
import FormInputTodo from './components/FormInputTodo.vue'
import TodoList from './components/TodoList.vue'

export default {
  components: {
    StatesTodosList,
    FormInputTodo,
    TodoList
  },

  setup () {
    return { }
  }
}
</script>

<style scoped>
main{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4vh 0;
}
</style>
