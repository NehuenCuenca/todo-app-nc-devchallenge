<template>
  <ul class="states-todos-list">
    <li class="state-todo-item" v-for="( _, getterName, getterIndex) in getters" :key="getterName"
        :class="getterName === currentGetter ? 'active': ''"  
    >
      <button @click="changeGetter(getterName)">{{ getterName }}</button>
    </li>
  </ul>
</template>

<script>
import { reactive, toRefs, computed } from 'vue'
import { mapGetters } from 'vuex'
import store from '../store';

export default {
  name: "StatesTodosList",
  setup() {
    const currentGetter = computed(() => store.state.currentStateTodosGetter)

    const getters = {
      ...mapGetters({
        All: 'allTodos',
        Active: 'activeTodos',
        Completed: 'completedTodos',
      })
    }

    const changeGetter = (newGetter) => store.commit('changeGetter', newGetter)

    return {
      currentGetter,
      getters,
      changeGetter
    }
  }
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