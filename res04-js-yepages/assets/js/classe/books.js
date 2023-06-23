class Books {
    #title;
    #category;
    #author;
    #summary;
    #img;
    
    constructor(title, category, author, summary, img)
    {
        this.#title = title;
        this.#category = category;
        this.#author = author;
        this.#summary = summary;
        this.#img =img;
    }
    
    get title (){
        return this.#title;
    }
    set title (title){
        this.#title = title;
    }
    
    get category (){
        return this.#category;
    }
    set category (category){
        this.#category = category;
    }
    
    get author (){
        return this.#author;
    }
    set author (author){
        this.#author = author;
    }
    
    get summary (){
        return this.#summary;
    }
    set summary (summary){
        this.#summary = summary;
    }
    
    get img (){
        return this.#img;
    }
    set img (img){
        this.#img = img;
    }
}

export { Books };