////////////////////////////////////////////////////////////////////////     

////////////////////////////////////////////////////////////////////////     
    //COLOR PICKER
    
    //Recupération de la couleur à enregistrer
    let colorP = document.getElementById("color-picker");
    
    //Vérification de l'existence d'une donnée enregistrée auparavant
    if (sessionStorage.getItem("color"))
    {   
        //Restauration de la couleur
        colorP.value = sessionStorage.getItem("color")
    }
    
    // Ecoute des changements de valeur du champ
    colorP.addEventListener("change", function colorPicker() 
    {
        //Enregistrement de la couleur choisi dans le stockage de la session
        sessionStorage.setItem("autosave", colorP.value)
        isEraserSelected = false;
        let eraserBtn = document.getElementById("eraserBtn");
        eraserBtn.style.color = "";
    });
    
    let color = sessionStorage.getItem(colorP.value);
////////////////////////////////////////////////////////////////////////     
    // Ajouter Retirer cellule
    //Ne pas oublier oninput="function()" dans le HTML
    
    //Récupère les éléments du <input type="number">

    let rowCountInput = document.getElementById("indexRows");
    let columnCountInput = document.getElementById("indexColumns");
    let gridContainer = document.getElementById("scene");
    let cells = document.querySelectorAll("td");
    
    
    // Changer la création du tableau par celle d'un grid !!!!
    function addRowsAndColumns()
    {
        // Permet de recupérer les valeur du input 
        let rowCount = rowCountInput.value;
        let columnCount = columnCountInput.value;
        
        //Supprime les anciennes lignes et colonnes
    
        gridContainer.innerHTML = "";
        
        //Ajouter Retirer les lignes et colonnes
        for (let r = 0; r < rowCount; r++) 
        {
            //Est utile pour rajouter de nouvelles lignes, insert ne peut être associé qu'a une id de tableau
            let row = gridContainer.insertRow();
            row.classList.add('row');
            
            for (let c = 0; c < columnCount; c++)
            {
                let cell = row.insertCell();
                cell.classList.add("column");
                
                // Ajoute un gestionnaire d'événement clic sur chaque cellule
                    cell.addEventListener("click", function select() 
                    {
                        // let cells = document.querySelectorAll(".column");
                        //Supprime la class .selected de toutes les cellules
                        cells.forEach(cell => cell.classList.remove("selected")); // n'est plus utile j'ai retiré la border du css
                    
                        // Ajouter la class selected au cellule selectionné
                        cell.classList.add("selected");
                        
                        // Ajoute la couleur du picker au cellule
                        cell.style.background = colorP.value;
                        //Ajoute les couleurs à l'historique Map()
                        colorHistory.set(cell, cell.style.backgroundColor);
                        
                        //Gomme déclare les BColor white à toute les cells colorées une fois cliqué dessus 
                        if (isEraserSelected)
                        {   
                            cell.style.backgroundColor = "white";
                            console.log("click1");
                        }
                        else if (selectedColor !== "")
                        {
                            cell.style.backgroundColor = selectedColor;
                            console.log("click2")
                        }
                    });
                    
                //Permet au mousemove de colorier
                cell.addEventListener("mousemove", function() {
                    if (isMouseDown) 
                    {
                        cell.classList.add("selected");
                        cell.style.background = colorP.value;
                        colorHistory.set(cell, cell.style.backgroundColor);
                    }
                });
                //permet au movemove d'effacer
                cell.addEventListener("mousemove", function() 
                {
                    if (isMouseDown) 
                    {
        
                        if (isEraserSelected) 
                        {
                            cell.style.backgroundColor = "";
                        } 
                        else if (selectedColor !== "") 
                        {
                            cell.style.backgroundColor = selectedColor;
                        }
                    }
                });
            }
        }
    }
////////////////////////////////////////////////////////////////////////     
    //GOMME
    let isEraserSelected = false;
    let selectedColor = "";
    
    //Fonction qui permet de selectionner et deselectionner la gomme, toute en changeant la couleur du bouton
    function toggleEraser()
    {
        isEraserSelected = !isEraserSelected;
        let eraserBtn = document.getElementById("eraserBtn");
        
        if (isEraserSelected)
        {
            eraserBtn.style.color = "red";
        }
        else 
        {
            eraserBtn.style.color = "";
        }
    }

////////////////////////////////////////////////////////////////////////    
    //Colorié en restant cliqué
    
    // Variable pour stocker l'état du clic
    let isMouseDown = false;
    
    // AGestionnaire d'événements mousedown pour enregistrer l'état du clic
    document.addEventListener("mousedown", function() {
        isMouseDown = true;
    });
    
    // Gestionnaire d'événements mouseup pour réinitialiser l'état du clic
    document.addEventListener("mouseup", function() {
        isMouseDown = false;
    });

//////////////////////////////////////////////////////////////////////// 
 	// UNDO Paint Faire un btn inverse. Et tenter de faire apparaitre le btn que s'il y a un historique 
	
	  let colorHistory = new Map();
    
    function undoColor()
    {
	 		// Vérifie si l'historique à des étapes précédentes
        if (colorHistory.size > 0)
        {	
		  		//Récupère la dernière cellule dnas l'historique
            let cell =[... colorHistory.keys()].pop();
				
				//Récupère la couleur précédente de la cellule
            let previousColor = colorHistory.get(cell);
				
				//Restaure la case précédente 
				cell.style.backgroundColor = previousColor;
				
				//Supprime la cellule de l'historique 
				colorHistory.delete(cell);
        }
        
    }
	let undoBtn = document.getElementById("undoBtn");
    undoBtn.addEventListener("click", function()
    {
        undoColor();
    });
////////////////////////////////////////////////////////////////////////    
window.addEventListener("DOMContentLoaded", function()
{
addRowsAndColumns();
});

rowCountInput.value = 10;
columnCountInput.value = 10;

        