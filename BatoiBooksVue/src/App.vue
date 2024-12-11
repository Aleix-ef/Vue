<script>
import AppMenu from './components/AppMenu.vue';
import AppMessages from './components/AppMessages.vue'
import BooksList from './components/BooksList.vue'
import AboutView from './views/AboutView.vue';
import AddBook from './components/AddBook.vue';
import AppCart from './components/AppCart.vue';
import AppAbout from './components/AppAbout.vue';

export default {
  components: {
    AppMenu,
    AppMessages,
    BooksList,
    AddBook,
    AppCart,
    AboutView,
    AppAbout,
  },
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
    </a>
    <h1>BatoiBooks</h1>
    <app-menu></app-menu>
    <app-about></app-about>
    <app-messages></app-messages>
    <books-list></books-list>
    <add-book></add-book>
    <app-cart></app-cart>
    <footer>Aleix Escañuela - Batoibooks</footer>
  </div>
  
</template>