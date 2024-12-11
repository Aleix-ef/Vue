<script>
import { store } from '../store.js';

export default {
    name: 'AddTodo',
    computed:  {
        todos() {
            return store.state.todos;
        },
    },
    methods: {
        addTodo() {
            if(this.newTitle.trim()) {
                store.addTodo({
                    done: false,
                    title: this.newTitle,
            })
            this.newTitle = '';
            } else {
                alert('Inserta una tarea');
            }
        }
    },
    data() {
        return {
            newTitle: "",
        }
    },
};
</script>

<template>
    <form @submit.prevent="addTodo">
    <input type="text" v-model="newTitle" placeholder="Nueva tarea" />
    <button type="submit">Añadir</button>
  </form>
</template>