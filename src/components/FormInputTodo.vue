<template>
    <form class="input-todo" @submit.prevent="addNewTodo">
      <input type="text" placeholder="add details" v-model="contentTodo">
      <button type="submit">Add</button>
    </form>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'
import store from '../store'

export default {
    name: "FormInputTodo",
    setup () {
      const contentTodo = ref("")

      const addNewTodo = () => {
        const newTodo = {
          dateTime: Date.now(),
          content: contentTodo.value,
          isCompleted: false,
        }

        store.commit('addNewTodo', newTodo)
        contentTodo.value = ""
      }

      return {
        addNewTodo,
        contentTodo
      }
    }
}
</script>

<style scoped>

form.input-todo {
  width: 70%;
  display: flex;
  justify-content: space-between;
}

.input-todo input {
  width: 75%;
  border-radius: 12px;
  border: 1px solid var(--greyBorder);
  padding: 1rem .5rem;
  font: 400 14px 'Montserrat', sans-serif;
}

.input-todo button[type="submit"] {
  font: 600 14px 'Montserrat', sans-serif;
  color: white;
  background-color: var(--blueContrast);
  box-shadow: 0px 2px 6px 0px #7FB1F366;
  border: none;
  border-radius: 12px;
  padding: 1rem 2rem;
}
</style>