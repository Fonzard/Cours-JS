import initMap from "./functions/initMap.js";
import { Character } from "./classes/character.js";




window.addEventListener("DOMContentLoaded", function(){
    initMap(20, 30);
    const FonzLaventurier = new Character();
    FonzLaventurier.render();
    document.addEventListener("keydown", (event) => {
        switch(event.key){
            case "z", "ArrowUp":
                FonzLaventurier.moveUp();
                break;
            case "s", "ArrowDown":
                FonzLaventurier.moveDown();
                break;
            case "d","ArrowRight":
                FonzLaventurier.moveRight();
                break;
            case "q","ArrowLeft":
                FonzLaventurier.moveLeft();
                break;
            default:
                break;
        }
    });
});