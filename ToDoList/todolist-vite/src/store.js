import { reactive } from 'vue'

export const store = {
    state: reactive({
        todos: [
            {
                done: false,
                title: "Aprender Vue.js",
            },
            {
                done: true,
                title: "Aprender Javascript",
            },
        ]
    }),
    addTodo: (todo) => {
        store.state.todos.push(todo)
    },
    delTodo: (index) => {
        store.state.todos.splice(index, 1)
    },
    dellAllTodos: () => {
        store.state.todos = []
    }
}