<script>
import AddTodo from './components/AddTodo.vue';
import AppTitle from './components/AppTitle.vue';
import DeleteTodos from './components/DeleteTodos.vue';
import TodoList from './components/TodoList.vue';
</script>

<template>
  <div>
    <app-title></app-title>
    <add-todo></add-todo>
    <delete-todos></delete-todos>
    <todo-list></todo-list>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
