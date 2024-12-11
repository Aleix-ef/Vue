<script>
import { store } from '../store.js';
import TodoItem from './TodoItem.vue'

export default {
    components: {
        TodoItem,
    },
    computed: {
        todos() {
            return store.state.todos;
        }
    },
    data() {
        
    },
    methods: {
        delTodo(index) {
            store.delTodo(index);
        },
    },
}
</script>

<template>
    <ul v-if="todos.length">
        <todo-item v-for="(item, index) in todos" :key="index" :item="item" :index="index" @delete-todo="delTodo"></todo-item>
    </ul>
    <p v-else>No hay tareas que mostrar</p>
</template>