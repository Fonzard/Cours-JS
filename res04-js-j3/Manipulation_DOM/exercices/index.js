// EXERCICE 1


function exercice1()
{
    let box = document.getElementById("box1");
    let btnChangeColor = document.getElementById("btn-change-color");
    let etatCarre = "red";
     
    btnChangeColor.addEventListener("click", function()
    { 
     
        if (  etatCarre === "red")
        {
            box.style.backgroundColor = "blue";
            etatCarre = "blue"; // On créer l'état carré pour avoir deux modes, ça nous permet de demander au js de switch entre ces deux états
        }
        else 
        {
            box.style.backgroundColor = "red";
            etatCarre = "red";
        }
});
}

//EXERCICE 2
function exercice2()
{
    let btnMove = document.getElementById("btn-move");
    let circlePosition = "initiale";
    
    btnMove.addEventListener("click", function(){
        
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
}

// EXERCICE 3


 function exercice3()
{
    let ingredients = ["Salade", "Tomate", "Oignon"];
    let btnAddIngredients = document.getElementById("btn-add-ingredients");

    btnAddIngredients.addEventListener( "click", function ()
    {
        
        let ul = document.querySelector ("#ex3 ul");
    
        for (let ingredient of ingredients )
        {
        
            let li = document.createElement("li");
            let txtIngredient = document.createTextNode(ingredient);
            li.appendChild(txtIngredient);
            ul.appendChild(li);

        }
    });
}
// EXERCICE 4
let btnAddHero = document.getElementById("btn-add-hero");

let tr = document.createElement("tr");
let td = document.createElement("td");
function exercice4()
{
    let heroes = [
        {
            name : "Clark Kent",
            secret : "Superman"
        },
        {
            name : "Diana Prince",
            secret : "Wonder Woman"
        },
        {
            name : "Tony Stark",
            secret: "Iron Man"
        }
    ];
    btnAddHero.addEventListener ("click", function(){
        let tbody = document.querySelector("#ex4 table tbody");
        
    for (let heroe of heroes ) {
        let txtHereos = document.createTextNode(heroe);
        tr.appendChild(td);
        td.appendChild(txtHereos);
    }
    });
}
// EXERCICE 5

function exercice5()
{
    let btnTurn = document.getElementById("btn-turn")
    
    btnTurn.addEventListener("click", function() 
    {
    
        let blue = document.getElementById("blue");
        let red = document.getElementById("red");
        let green = document.getElementById("green");
        
        red.id = "green";
        blue.id = "red";
        green.id = "blue";
    
    });
}

function exercice6()
{

}
window.addEventListener("DOMContentLoaded", function(){
    exercice1();
    exercice2();
    exercice3();
    exercice4();
    exercice5();
    exercice6();
});