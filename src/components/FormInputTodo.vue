<template>
    <form class="input-todo">
      <input type="text" placeholder="add details">
      <button type="submit">Add</button>
    </form>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    name: "FormInputTodo",
    setup () {}
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