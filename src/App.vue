<template>
  <header>
    <h1>#todo</h1>
  </header>

  <main>
    <StatesTodosList />
    <FormInputTodo />
    <TodoList />
    
    
    Count : {{ countVuex }}
    <button @click="useMutation">useMutation</button>
  </main>
</template>

<script>
import { computed, reactive, toRefs } from 'vue'
import store from './store'

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

    const useMutation = () => {
      console.log('usando el useMutation');
      store.commit('increment')
    }

    const countVuex = computed(() => store.state.count)
  
    return {
      useMutation,
      countVuex
    }
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
