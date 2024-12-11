<script>
export default {
props: ['book'],

}
</script>

<template>
    <div>
        <h3>{{ book.moduleCode  }} {{ book.id }}</h3>
        <h4>{{ book.publisher }}</h4>
        <p>{{ book.pages }} páginas</p>
        <p>Estado: {{ book.status }}</p>
        <p>En venta {{ book.soldDate }}</p>
        <p>{{ book.comments }}</p>
        <h4>{{ book.price?.toFixed(2) }} €</h4>
        <div class="book-actions">
            <button class="add-cart" data-id="${book.id}">
                <span class="material-icons">add_shopping_cart</span>
            </button>
            <button class="edit-book" data-id="${book.id}">
                <span class="material-icons">edit</span>
            </button>
            <button class="delete-book" data-id="${book.id}">
                <span class="material-icons">delete</span>
            </button>
        </div>
    </div>
</template>