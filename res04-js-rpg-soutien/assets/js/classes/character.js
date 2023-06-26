
class Character {  
    #posX;
    #posY;
    #hasAxe;
    
    constructor(){
        this.#posX = 19;
        this.#posY = 15;
        this.#hasAxe = false;

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
    moveUp(){ 
        if((this.#posY -1)>= 0){
            let targetCell = document.querySelector(`.row-${this.#posY - 1}.col-${this.#posX}`)
            if(godMode || !targetCell.classList.contains("water") && !targetCell.classList.contains("rock") && !targetCell.classList.contains("stump") && !targetCell.classList.contains("tree")){
                this.#posY -= 1;
                this.render();
            }
        }
    }
    moveDown(){
        if((this.#posY + 1) <= 19) {
            let targetCell = document.querySelector(`.row-${this.#posY + 1}.col-${this.#posX}`)
            if(godMode || !targetCell.classList.contains("water") && !targetCell.classList.contains("rock") && !targetCell.classList.contains("stump") && !targetCell.classList.contains("tree")){
                this.#posY +=1,
                this.render();
            }
        }
    }
    moveLeft(){
        if((this.#posX -1) >= 0){
            let targetCell = document.querySelector(`.row-${this.#posY}.col-${this.#posX - 1}`)
            if(godMode || !targetCell.classList.contains("water") && !targetCell.classList.contains("rock") && !targetCell.classList.contains("stump") && !targetCell.classList.contains("tree")){
                this.#posX -= 1;
                this.render();
            }
        }
    }
    moveRight(){
        if((this.#posX + 1) <= 29){
            let targetCell = document.querySelector(`.row-${this.#posY}.col-${this.#posX + 1}`)
            if(godMode || !targetCell.classList.contains("water") && !targetCell.classList.contains("rock") && !targetCell.classList.contains("stump") && !targetCell.classList.contains("tree")){
                this.#posX += 1;
                this.render();
            }
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
/*    pickUpAxe() {
        this.#hasAxe = true;
        console.log('The character picked up an axe!');
        // Effectuer d'autres actions nécessaires, comme mettre à jour l'interface utilisateur
    }
    function isTreeCell(posX, posY) {
        // Vérifiez si la case aux coordonnées (posX, posY) contient un arbre
        // Retournez true si c'est le cas, sinon false
    }
    function removeTree(posX, posY) {
        // Supprimez l'arbre de la case aux coordonnées (posX, posY)
        // Par exemple, en retirant la classe CSS correspondante de la case
    }*/
  
}
/*function isCellOccupied(row, col) {

  for (const object of objects) {
    if (object.posX === col && object.posY === row) {
      return true; 
    }
  }
  return false; 
}*/
let godMode = false;
function enableGodMod(){
    godMode = true;
    console.log("God Mode activated !!!");
}
function disableGodMode(){
    godMode = false;
    console.log("God Mode desactivated !!!")
}
document.addEventListener('keydown', (event) => {
if (event.key === "o"){
    if(godMode){
        disableGodMode();
    }
    else{
        enableGodMod();
    }
}
});
export { Character };

