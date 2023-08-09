<template>
  <header>
    <h1>#todo</h1>
  </header>

  <main>
    <StatesTodosList />
    <FormInputTodo />
    <TodoList />
    
    
    Count : {{ countVuex }}
    <br>
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

</style>
