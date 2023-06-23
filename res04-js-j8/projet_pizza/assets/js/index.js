import { Ingredient } from './classe/ingredient.js';
import { Pizza } from './classe/pizza.js';

//Décalarion du tableau d'ingrédient 
let availableIngredients = [];

//Fonction qui ajoute les ingrédients au tableau
function generateTableIngredients ()
{
    //Ajout des différents ingrédients au tableau
    let bacon = new Ingredient("Bacon", "assets/img/bacon.png");
    availableIngredients.push(bacon);
    
    let carotte = new Ingredient("Carotte", "assets/img/carrots.png");
    availableIngredients.push(carotte);
    
    let fromage = new Ingredient("Fromage", "assets/img/cheese.png");
    availableIngredients.push(fromage);
    
    let oeuf = new Ingredient("Oeuf", "assets/img/egg.png");
    availableIngredients.push(oeuf);
    
    let aubergine = new Ingredient("Aubergine", "assets/img/eggplant.png");
    availableIngredients.push(aubergine);
    
    let fromage_de_chevre = new Ingredient("Fromage de chèvre", "assets/img/goat-cheese.png");
    availableIngredients.push(fromage_de_chevre);
    
    let miel = new Ingredient("Miel", "assets/img/honey.png");
    availableIngredients.push(miel);
    
    let champignon = new Ingredient("Champignon", "assets/img/mushroom.png");
    availableIngredients.push(champignon);
    
    let olive = new Ingredient("Olive", "assets/img/olive.png");
    availableIngredients.push(olive);
    
    let piment = new Ingredient("Piment", "assets/img/pepper.png");
    availableIngredients.push(piment);
    
    let pomme_de_terre = new Ingredient("Pomme de terre", "assets/img/potato.png");
    availableIngredients.push(pomme_de_terre);
    
    let tomate = new Ingredient("Tomate", "assets/img/tomato.png");
    availableIngredients.push(tomate);
}

//Fonction de génération d'HTML pour les ingrédients
function generateHtmlIngredients(availableIngredients)
{
    //Appeler la référence de la section  
    let stage = document.getElementById("stage");
    
    //J'appelle la balise qui va englober les autres ul 
    let ul = document.createElement("ul");
    let h2 = document.createElement("h2");
    stage.appendChild(h2);
    h2.textContent = "Choix des ingrédients";
   
    
    //Création du HTML
    for (let availableIngredient of availableIngredients)
    { 
        
        let ingredient = document.createElement("li")
        let article = document.createElement("article");
        let header = document.createElement("header");
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        let h3 = document.createElement("h3");
    
        //Je donne sa source à l'image 
        img.src = availableIngredient.file;
        img.setAttribute("alt", availableIngredient.name)
        
        //Je place chaque element dans son parent et j'ajoute le texte du titre 
        ingredient.appendChild(article);
        article.appendChild(header);
        header.appendChild(figure);
        figure.appendChild(img);
        header.appendChild(h3);
        h3.textContent = availableIngredient.name;
        ul.appendChild(ingredient);

    }
    //Ils sont placés à l'exterieur de la boucle for pour être sur qu'ils ne soient créés qu'une fois
    stage.appendChild(ul);
    
}

//Fonction pour ajouter / retirer la class "selected"
function toggleIngredients ()
{
    let ingredients = document.querySelectorAll("#stage li article");
    
    //Ne pas oublier de déclarer un élément pour garder un trace de la selection
    let selected = false; 
    
    ingredients.forEach(function(ingredient)
    {
        ingredient.addEventListener("click", function(event)
        {
            if(!selected)
            {
                ingredient.classList.add("selected");
                selected = true;
                console.log("c'est select")
            }
            else
            {
                ingredient.classList.remove("selected");
                selected = false;
            }
        });
    });
}


//Fonction pour ajouter ingrédients à la pizza 
const pizza = new Pizza();
function addIngredientsToPizza ()
{
    let articleIngredients = document.querySelectorAll("#stage li article");
    
    articleIngredients.forEach(function(articleIngredient)
    {
        articleIngredient.addEventListener("click", function(event)
        {
            if (articleIngredient.classList.contains("selected"))
            {
                pizza.addIngredient(articleIngredient);
                console.log("add ingredient");
            }
            else
            {
                pizza.removeIngredient(articleIngredient);
                console.log("remove ingredient");
            }
        });
    });
}


window.addEventListener("DOMContentLoaded", function(){
    generateTableIngredients();
    generateHtmlIngredients(availableIngredients);
    toggleIngredients();
    addIngredientsToPizza();
    
});  
    