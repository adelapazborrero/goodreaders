<template>
    <div class="container">
        <div class="row justify-content-end">
            <div class="col-2">
                <router-link :to="{ name: 'createbook' }">
                    <button>Add a book</button>
                </router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-4 book-list " v-for="book in books" :key="book.id">
                <router-link
                    :to="{
                        name: 'bookdetails',
                        params: { id: book.id }
                    }"
                >
                    <img
                        style="height: 100px;"
                        :src="`/storage/${book.image}`"
                    />
                </router-link>
                <h5>{{ book.title }}</h5>
                <p>{{ book.author }}</p>
                <p>Posted by {{ book.user.name }}</p>
                <img style="height: 100px;" :src="`/storage/${book.image}`"/>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Home",
    created() {
        axios
            .get("/api/books")
            .then(res => (this.books = res.data))
            .catch(err => console.log(err));
    },
    data() {
        return {
            books: Array
        };
    }
};
</script>

<style scoped>
.book-list {
    width: 300px;
    height: 300px;
    background-color: pink;
}
</style>
