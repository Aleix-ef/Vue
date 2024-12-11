<script>
import { store } from '@/store';

export default {
  name: 'DeleteTodos',
  methods: {
    delAll() {
      if (confirm('Vas a borrar todas las tareas')) {
        alert('Borrando todas las tareas...');
        store.dellAllTodos();
      }
    },
  },
};
</script>

<template>
  <button @click="delAll">Borrar todo</button>
</template>
