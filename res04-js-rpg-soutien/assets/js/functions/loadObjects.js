export default function loadObjects(objects)
{
    for (let object of objects){
        
        let type = object.type;
        let posX = object.posX;
        let posY = object.posY;
        
        // Je selectionne une cellule en fonction valeur posY/posX du tableau
        let objectCell = document.querySelector(`.row-${posY}.col-${posX}`);
        if (type === "tree"){
             
             if (objectCell){
                 objectCell.classList.add("tree");
             }
        }
        else if (type === "stump"){
           
            if(objectCell){
                objectCell.classList.add("stump");
            }
            
        }  
        else if (type === "rock"){
            
            if(objectCell){
                objectCell.classList.add("rock");
            }
        }
    }
}