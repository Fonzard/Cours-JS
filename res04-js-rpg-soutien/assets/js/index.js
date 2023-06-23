import initMap from "./functions/initMap.js";
import { Character } from "./classes/character.js";

window.addEventListener("DOMContentLoaded", function(){
    initMap(20, 30);
    const FonzLaventurier = new Character();
    FonzLaventurier.render();
    document.addEventListener("keydown", (event) => {
        switch(event.key){
            case "z":
                FonzLaventurier.moveUp();
                break;
            case "s":
                FonzLaventurier.moveDown();
                break;
            case "d":
                FonzLaventurier.moveRight();
                break;
            case "q":
                FonzLaventurier.moveLeft();
                break;
            default:
                break;
        }
    });
});