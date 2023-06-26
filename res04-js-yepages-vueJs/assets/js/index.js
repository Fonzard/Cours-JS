import { Books } from "./classe/books.js";
import { Library } from "./classe/library.js";
import { bookData } from "./data/data-book.js";
import { App } from "./app.js";
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';  


window.addEventListener("DOMContentLoaded", function(){
    //Référence de la section
    // const section = document.getElementById("bookCollection");

    // let tabBook = new Library();
    // tabBook.load(bookData);
    // for (let book of tabBook.shelf) {
        
    //     const bookInfo = document.createElement("article");
    //     bookInfo.classList.add("book-item");
    //     section.appendChild(bookInfo);
        
    //     const couv = document.createElement("img");
    //     const title = document.createElement("h4");
    //     const theme = document.createElement("h5");
    //     const auteur = document.createElement("p");
    //     const btn = document.createElement("button");
        
    //     bookInfo.appendChild(couv);
    //     couv.src = book.img;
    //     couv.setAttribute("alt", couv.title)
        
        
    //     bookInfo.appendChild(title);
    //     title.textContent=book.title;
        
    //     bookInfo.appendChild(theme);
    //     theme.textContent = book.category;
        
    //     bookInfo.appendChild(auteur);
    //     auteur.textContent = book.author;
        
    //     bookInfo.appendChild(btn);
    //     btn.textContent = "Découvrir le livre";
    //     console.log("wesh")
        
    // }
    
    createApp(App).mount('#bookCollection');  
    
    
});  