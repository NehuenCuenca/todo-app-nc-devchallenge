<template>
    <li class="todo-item">
        <!-- {{ todoInfo }} -->
        <input type="checkbox" :id="todoInfo.dateTime" :value="todoInfo.content" :checked="todoInfo.isCompleted"
            @change="toggleIsCompleteTodo(todoInfo.dateTime)" />
        <label :for="todoInfo.dateTime" :class="todoInfo.isCompleted ? 'completed' : ''">{{ todoInfo.content }}</label>
        <button class="delete-btn" @click="deleteTodo(todoInfo.dateTime)" v-if="currentStateTodo === 'Completed'">
            ❌
        </button>
    </li>
</template>

<script>
import { computed, reactive, toRef, toRefs } from "vue";
import store from "../store";

export default {
    name: "TodoItemList",
    props: {
        todoInfo: Object,
    },
    setup(props) {
        const currentStateTodo = computed(
            () => store.state.currentStateTodosGetter
        );

        const toggleIsCompleteTodo = (idDateTime) => {
            store.commit("updateTodo", { id: idDateTime });
        };

        const deleteTodo = (idDateTime) => {
            store.commit("deleteTodo", { id: idDateTime });
        };

        return {
            currentStateTodo,
            toggleIsCompleteTodo,
            deleteTodo,
        };
    },
};
</script>

<style scoped>
.todos-list li.todo-item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0 0.5vw;
}

.todo-item input[type="checkbox"] {
    width: 24px;
    height: 24px;
    accent-color: var(--blueContrast);
    border-radius: 4px;
    cursor: pointer;
}

.todo-item label {
    font: 500 1.25rem "Montserrat", sans-serif;
    cursor: pointer;
}

/* .todo-item input[type="checkbox"]:checked + label, */
.completed {
    text-decoration: line-through;
    color: var(--titleBlackStrong);
}
</style>
