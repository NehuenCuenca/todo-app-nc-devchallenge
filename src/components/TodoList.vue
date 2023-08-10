<template>
    <div class="todo-list-root">
        <ul class="todos-list" v-for="({ content, dateTime, isCompleted }, todoIndex) in todos" :key="todoIndex">
            <li class="todo-item">
                <input type="checkbox" :id="dateTime" name="dateTime" :checked="isCompleted">
                <label :for="dateTime">{{ content }}</label>
                <!-- <button class="delete-btn">❌</button> -->
            </li>
        </ul>

        <!-- <button class="delete-all-btn">Delete all</button> -->
    </div>
</template>

<script>
import { reactive, toRefs, ref, computed } from 'vue'
import store from '../store'

export default {
    name: "TodoList",
    setup() {
        const currentStateTodo = computed(() => store.state.currentStateTodosGetter )
        const todos = computed(() => store.getters.getTodosByCurrentState)

        return {
            currentStateTodo,
            todos
        }
    }
}
</script>

<style scoped>
.todo-list-root {
    width: 70%;
}

.todos-list {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.todos-list li.todo-item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0 .5vw;
}

li.todo-item input[type="checkbox"] {
    width: 24px;
    height: 24px;
    accent-color: var(--blueContrast);
    border-radius: 4px;
    cursor: pointer;

}

li.todo-item label {
    font: 500 1.25rem 'Montserrat', sans-serif;
    cursor: pointer;
}

.todo-item input[type="checkbox"]:checked+label {
    text-decoration: line-through;
    color: var(--titleBlackStrong);
}
</style>