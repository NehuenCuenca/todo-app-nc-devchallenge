<template>
  <header>
    <h1>#todo</h1>
  </header>

  <main>
    <!-- StatesTodosList.vue -->
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

    <!-- InputTodo.vue -->
    <form class="input-todo">
      <input type="text">
      <button type="submit">Add</button>
    </form>

    <!-- TodoList.vue -->
    <ul class="todos-list">
      <li class="todo-item">
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
        <label for="vehicle1"> I have a bike</label><br>
        <!-- <button class="delete-btn">❌</button> -->
      </li>
    </ul>
    
    <!-- <button class="delete-all-btn">Delete all</button> -->
    Count : {{ countVuex }}
    <br>
    <button @click="useMutation">useMutation</button>
  </main>
</template>

<script>
import { computed, reactive, toRefs } from 'vue'
import store from './store'

export default {
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
