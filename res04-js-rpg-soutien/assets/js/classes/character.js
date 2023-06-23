const box = document.getElementById("id")
class Character {  
    #posX;
    #posY;
    
    constructor(){
        this.#posX = 19;
        this.#posY = 15;

    }
    get posX(){
        return this.#posX;
    }
    set posX(newPosX){
        this.#posX = newPosX;
    }
    get posY(){
        return this.#posY;
    }
    set posY(newPosY){
        this.#posY = newPosY;
    }
    moveUp(){ // Peut être While
        if((this.#posY -1)>= 0 && !box.classList.contains("water")){
            this.#posY -= 1;
            this.render();
        }
    }
    moveDown(){
        if((this.#posY + 1) <= 19) {
            
            this.#posY +=1,
            this.render();
        }
    }
    moveLeft(){
        if((this.#posX -1) >= 0){
            this.#posX -= 1;
            this.render();
        }
    }
    moveRight(){
        if((this.#posX + 1) <= 29){
            this.#posX += 1;
            this.render();
        }
    }
    render(){
        let previousCell = document.querySelector(`.character`);
        
        if (previousCell) {
          previousCell.classList.remove("character");
        }
        let box = document.querySelector(`.row-${this.posY}.col-${this.posX}`);
        box.classList.add("character");
        
        
    }
}


export { Character };