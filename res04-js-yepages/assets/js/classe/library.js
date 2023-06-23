import { Books } from "./books.js";
import { bookData } from "../data/data-book.js";
class Library {
    #shelf;
    
    constructor()
    {
        this.#shelf = [];
    }
    
    get shelf (){
        return this.#shelf;
    }
    
    set shelf (shelf){
        this.#shelf = shelf;
    }
    
    load(bookData){
        for (let book of bookData){
            let newBook = new Books(book.title, book.category, book.author, book.summary, book.img);
            this.shelf.push(newBook);
        }
    }
    
    addBook(book){
        this.shelf.push(book);
    }
    
    removeBook(book){
        // J'itere chaque élément du tableau, pour vérifier si il n'existe pas déjà
        // Gràce à findIndex je peux parcourir le tableau et si un élément répond à nos paramètre, alors on récupère son index
        let index = this.shelf.findIndex( function (item) {
            return item === book;
        });
        // Si l'élément à été trouvé on le retire du tableau
        if (index !== -1){
            this.shelf.splice (index, 1);
        }
    }
    
    findBookByTitle(title){
        // find itère chaque élément du tableau et renvoie le première objet qui répond au paramètre
        return this.shelf.find(book => book.title === title);
    }
    
    findBooksByAuthor(author){
        //Une autre façon d'écrire la functiion que dans la méthode findBookByTitle
        return this.shelf.find( function(book){
            book.author === author;
        })
    }
    
    findBooksByCategory(category){
        return this.shelf.find( function(book){
            book.category === category;
        })
    }
}

export { Library }; 