// EXERCICE 1
let btnChangeColor = document.getElementById("btn-change-color");
let etatCarre = "red";

btnChangeColor.addEventListener("click", function exercice1()
{
     let box = document.getElementById("box1");
     
    if (  etatCarre === "red"){
        box.style.backgroundColor = "blue";
        etatCarre = "blue"; // On créer l'état carré pour avoir deux modes, ça nous permet de demander au js de switch entre ces deux états
    }
    else {
        box.style.backgroundColor = "red";
        etatCarre = "red";
    }
});

//EXERCICE 2
let btnMove = document.getElementById("btn-move");
let circlePosition = "initiale"

btnMove.addEventListener("click", function exercice2()
{
    let box = document.getElementById("box2");
    if (circlePosition === "initiale") {
        box.classList.add("move");
        circlePosition = "rolled";
    }
    else {
        box.classList.remove("move");
        circlePosition = "initiale";
    }
    
});

// EXERCICE 3
let btnAddIngredients = document.getElementById("btn-add-ingredients");

btnAddIngredients.addEventListener( "click", function exercice3()
{
    let ingredients = document.createTextNode(["Salade", "Tomate", "Oignon"]);
    let ul = document.querySelector ("#ex3 ul");
    let li = document.createElement("li");
    // let salade = document.createTextNode("Salade");
    // let tomate = document.createTextNode("Tomate");
    // let oignon = document.createTextNode("Oignon");
    
    for (let ingredient of ingredients ){
        ul.appendChild(li);
        li.appendChild(ingredient);
    }
});

// function exercice4()
// {
//     let heroes = [
//         {
//             name : "Clark Kent",
//             secret : "Superman"
//         },
//         {
//             name : "Diana Prince",
//             secret : "Wonder Woman"
//         },
//         {
//             name : "Tony Stark",
//             secret: "Iron Man"
//         }
//     ];
// }

// function exercice5()
// {

// }

// function exercice6()
// {

// }