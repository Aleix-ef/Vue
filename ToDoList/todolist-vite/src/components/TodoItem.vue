<script>
export default {
  name: "TodoItem",
  emits: ["delete-todo"],
  props: ["todo", "index"],
  methods: {
    deleteTodo() {
      if (confirm("Vas a borrar esta tarea")) {
        this.$emit("delete-todo", this.index);
      }
    },
  },
};
</script>

<template>
  <li @dblclick="deleteTodo">
    <input type="checkbox" v-model="todo.done" />
    {{ todo.title }}
  </li>
</template>
