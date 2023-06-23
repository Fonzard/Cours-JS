function exercice1 ()
{
// On récupère l'id du canvas
let canvasDomCarre = document.getElementById("canvasCarre");
// On déclare le context ce qui me donne accès aux librairies de manipulatio 3d
let ctxCarre = canvasDomCarre.getContext('2d');

// Carré
// On trace les contours
ctxCarre.strokeRect(200,200,canvasDomCarre.width,canvasDomCarre.height);
// On définit la couleur de remplissage 
ctxCarre.fillstyle = "#bfb656";
ctxCarre.fill(); 
ctxCarre.beginPath();
}

function exercice2()
{
//Cercle
let canvasDomCercle = document.getElementById("canvasCercle");
let ctxCercle = canvasDomCercle.getContext("2d");
let circle = {
    color:"#3b738a",
    radius:10,
    x:20,
    y:20,
}

ctxCercle.fillStyle = circle.color;
ctxCercle.fillRect(0,0,canvasDomCercle.width,canvasDomCercle.height);
ctxCercle.beginPath();
ctxCercle.arc(circle.x,circle.y, circle.radius, 0, 2 * Math.PI);
ctxCercle.fill();

}

window.addEventListener("DOMContentLoaded", function(){
    exercice1();
    exercice2();
});