import { Books } from "./classe/books.js";
import { Library } from "./classe/library.js";
import { bookData } from "./data/data-book.js";
import { Header } from "./components/header.js";

let App = {
    data () {
        return {
            bookData
        }
    },
    components : {
        Books,
        bookData,
        Library
    },
    template :`
        <Header/>
        <Books v-for="book in bookData" :title="book.title" :category="book.category" :author="book.author" :resume="book.resume" :image.src="book.image" />
    `
}

export { App };