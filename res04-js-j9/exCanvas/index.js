function exercice6()
{

    let canvasDom = document.getElementById("ex6");
    let ctx = canvasDom.getContext("2d");
    let x = canvasDom.width/2;
    let y = canvasDom.height/2;
    canvasDom.style.backgroundColor ="#808080";
    let circle = {
        radius:100,
    }
    
    let pacman = new Image();
    pacman.src = "pacman.png";
    
    pacman.onload = function (){
        ctx.drawImage(pacman,x - pacman.naturalWidth/2, y - pacman.height/2, pacman.naturalWidth, pacman.naturalHeight );
    }
    
    let isMouthOpen = false;
    pacman.onload = function ()
    {
        function pacmanEat ()
        {
            ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);
            ctx.beginPath();
            if (isMouthOpen)
            {
                ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);
                ctx.drawImage(pacman,x - pacman.naturalWidth/2, y - pacman.height/2, pacman.naturalWidth, pacman.naturalHeight );
                
                console.log("weshhhhh")
            }
            else
            {
                ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);
                ctx.fillStyle = "#FFD65B";
                ctx.arc(x, y, circle.radius, 0, 2 * Math.PI);
                
                console.log("yoooo");
            }
            
            ctx.fill();  
            
            isMouthOpen = !isMouthOpen;
        }
    setInterval(pacmanEat,1000);
    }
}

function exercice5()
{
    let canvasDom = document.getElementById("ex5");
    let ctx = canvasDom.getContext("2d");
    let x = canvasDom.width/2;
    let y = canvasDom.height/2;
    let radiusIncrementation = 10;

    let radius = 10;
    function growCircle ()
    {
        ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "#02e8af";
        ctx.fill();
        ctx.closePath();
        
        radius  += radiusIncrementation;
        
        let smallestDimensions = Math.min(canvasDom.height, canvasDom.width);
        if (radius >= smallestDimensions / 2)
        {
            clearInterval(intervalId);
        }
    }
let intervalId = setInterval(growCircle,100);
    
}

function exercice4()
{
    let canvasDom = document.getElementById("ex4");
    let ctx = canvasDom.getContext("2d");
    
    let x = canvasDom.width/2;
    let y = canvasDom.height/2;
    let circle = 
    {
        color:"#bfb656",
        radius:100
    }
    
    function moveCircle ()
    {
        ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);
        
        ctx.beginPath();
        ctx.arc(x, y, circle.radius, 0, 2 *Math.PI);
        ctx.fillStyle = circle.color;
        ctx.fill();
        x -= 10;
    }
    setInterval(moveCircle,100);
}

function exercice3()
{
    let canvasDom = document.getElementById("ex3");
    let ctx = canvasDom.getContext("2d");
    
    ctx.font = "bold 68px Montserrat";
    ctx.fillStyle = "black";
    ctx.fillText("Geometry.io",50, 250);
}

function exercice2()
{
    //Cercle
    let canvasDomCercle = document.getElementById("ex2");
    let ctxCercle = canvasDomCercle.getContext("2d");
    let circle = 
        {
        color:"#3b738a",
        width:200,
        height:200,
        radius:100,
        x:canvasDomCercle.width/2,
        y:canvasDomCercle.height/2
        }
    ctxCercle.fillStyle = circle.color;
    ctxCercle.beginPath();
    ctxCercle.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctxCercle.fill();
}

function exercice1()
{
    // On récupère l'id du canvas
    let canvasDomCarre = document.getElementById("ex1");
    // On déclare le context ce qui me donne accès aux librairies de manipulatio 3d
    let ctxCarre = canvasDomCarre.getContext('2d');
    
    // Carré
    canvasDomCarre.width = 200;
    canvasDomCarre.height = 200;
    canvasDomCarre.x = canvasDomCarre.width/2,
    canvasDomCarre.y = canvasDomCarre.height/2

    // On trace les contours
    ctxCarre.fillRect(canvasDomCarre.x, canvasDomCarre.y,canvasDomCarre.width,canvasDomCarre.height);
    // On définit la couleur de remplissage 
    ctxCarre.fillStyle = "#bfb656";
    ctxCarre.beginPath();
}

function initCanvasSize()
{
    // setting the size of the canvas
    let canvasList = document.querySelectorAll("canvas");

    for(canvas of canvasList)
    {
        let section = canvas.parentNode;

        canvas.width = section.clientWidth;
        canvas.height = section.clientHeight;
    }
}

window.addEventListener("DOMContentLoaded", function(){
   initCanvasSize();
   exercice1();
   exercice2();
   exercice3();
   exercice4();
   exercice5();
   exercice6();
});