<template>
    <div class="todo-list-root">
        <ul class="todos-list">
            <li class="todo-item">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                <label for="vehicle1"> I have a bike</label>
                <!-- <button class="delete-btn">❌</button> -->
            </li>
        </ul>
        
        <!-- <button class="delete-all-btn">Delete all</button> -->
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    name: "TodoList",
    setup () {}
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

.todo-item input[type="checkbox"]:checked + label {
    text-decoration: line-through;
    color: var(--titleBlackStrong);
}
</style>