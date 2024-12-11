const myApp = Vue.createApp({
    data() {
        return {
        }
    },
    methods: {


        

        delTodo() {
            if (confirm('Vas a borrar la tarea' + item)) {
                this.toDo.splice(this.index, 1);
            }
        }
    }
})

myApp.component('AppTitle', {
    template: `
    <h1>{{ title }}</h1>
    `,
    data() {
        return {
            title: 'Cosas a hacer este año'
        }
    }
})

myApp.component('deleteTodo', {
    template: `
    <button @click="delAll">Borrar todo</button>
    `,
    methods: {
        delAll() {
            if (confirm('Vas a borrar todas las tareas')) {
                alert('Borrando todas las tareas...')
            }

        },

    }
})

myApp.component("todoList", {
    template: `
    <ul v-if="toDo.length">
        <todo-item v-for="(item, index) in toDo" :key="index" 
        :todo="item" 
        :index="index" 
        @delete-todo="delTodo"
        ></todo-item>
    </ul>
        <p v-else>No hay tareas que mostrar</p>
    `,
    data() {
        return {
            toDo: [
                { done: true, title: 'Ser pobre' },
                { done: false, title: 'Ser millonario' },
            ],
        }
    },
    methods: {
        delTodo(index) {
            this.toDo.splice(index, 1)
        }
    }
})

myApp.component('todoItem', {
    $emits: ['delete-todo'],
    props: ['todo', 'index'],
    template: `
        <li @dblclick="delTodo">
            <input type="checkbox" v-model="todo.done">
            {{todo.title}}
        </li>
    `,
    methods: {
        delTodo() {
            if(confirm("Vas a borrar esta tarea")) {
                this.$emit('delete-todo', this.index);
            }
        }
    }
})

myApp.component('addTodo', {
    template: `
    <form @submit.prevent="addTodo">
        <input type="text" v-model="newTitle">
        <button type="submit" >Añadir</button>
    </form>
    `,
    methods: {
        addTodo() {
            alert('Añadiendo tarea ' + this.newTitle)
            //this.toDo.push({
            //    done: false,
            //    title: this.newTitle
            //})
            this.newTitle = "";
        },
    },
    data() {
        return {
            newTitle: "",
        };
    }
})

myApp.mount('#app')