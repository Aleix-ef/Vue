<script>
import BookItem from './BookItem.vue';
import { store } from '@/store';

export default {
    components:  {
        BookItem,
    },
    computed: {
        books() {
            return store.state.books;
        }
    },
    async mounted() {
        await store.getDBBooks();
    }
}
</script>

<template>
    <div id="list">
        <book-item v-for="book in books" :key="book.id" :book="book"></book-item>
    </div>
</template>