<template>
    <div>
        <ul class="todos-list">
            <li class="todo-item">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                <label for="vehicle1"> I have a bike</label><br>
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

<style lang="scss" scoped>

</style>