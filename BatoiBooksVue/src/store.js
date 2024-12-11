import { reactive } from 'vue'
import axios from 'axios'

const SERVER = 'http://localhost:3000'

export const store = {
    state: reactive({
        books: [],
        modules: [],
        users: [],
    }),
    async getDBUsers() {
        try {
            const response = await axios.get(SERVER + '/users')
            this.users = response.data
        } catch (response) {
            alert('Error: ' + response.message)
            this.users = []
        }
    },
    async getDBBooks() {
        try {
            const response = await axios.get(SERVER + '/books')
            this.state.books = response.data;
        } catch (response) {
            alert('Error: ' + response.message)
        }
    },
    async getDBModules() {
        try {
            const response = await axios.get(SERVER + '/modules')
            this.state.modules = response.data
        } catch (response) {
            alert('Error: ' + response.message)
            this.modules = []
        }
    },
    async addDBUser(user) {
        try {
            const response = await axios.post(SERVER + '/users', user)
            this.users = response.data
        } catch (response) {
            alert('Error: ' + response.message)
            this.users = []
        }
    },
    async addDBBook(book) {
        try {
            const response = await axios.post(SERVER + '/books', book)
            this.books.push(response.data)
        } catch (response) {
            alert('Error: ' + response.message)
        }
    },
    async getDBUser(id) {
        try {
            const response = await axios.get(SERVER + '/users/' + id)
            return response.data
        } catch (response) {
            alert('Error: ' + response.message)
            return null
        }
    },
    async getDBBook(id) {
        try {
            const response = await axios.get(SERVER + '/books/' + id)
            return response.data
        } catch (response) {
            alert('Error: ' + response.message)
            return null
        }
    },
    async removeDBUser(id) {
        try {
            const response = await axios.delete(SERVER + '/users/' + id)
            this.users = response.data
        } catch (response) {
            alert('Error: ' + response.message)
            this.users = []
        }
    },
    async removeDBBook(id) {
        try {
            const response = await axios.delete(SERVER + '/books/' + id)
            this.books = response.data
        } catch (response) {
            alert('Error: ' + response.message)
            this.books = []
        }
    },
    async changeDBUser(updatedUser) {
        try {
            const response = await axios.put(SERVER + '/users/' + updatedUser.id, updatedUser)
            this.users = response.data
        } catch (response) {
            alert('Error: ' + response.message)
            this.users = []
        }
    },
    async changeDBBook(updatedBook) {
        try {
            const response = await axios.put(SERVER + '/books/' + updatedBook.id, updatedBook
            )
            this.books = response.data
        } catch (response) {
            alert('Error: ' + response.message)
            this.books = []
        }
    },
    async changeDBUserPassword(id, newPassword) {
        try {
            const response = await axios.put(SERVER + '/users/' + id + '/password', newPassword
            )
            this.users = response.data
        } catch (response) {
            alert('Error: ' + response.message)
            this.users = []
        }
    },
    renderMessage(type, message) {
        const messageUI = document.createElement('div');
        messageUI.className = type + ' alertmalert-danger alert-dismissible';
        messageUI.innerHTML = `
          ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="this.parentElement.remove()">x</button>
      `;
        this.messages.appendChild(messageUI);
    },
}
