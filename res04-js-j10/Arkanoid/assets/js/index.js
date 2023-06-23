// Notre context et notre Canvas sont définis dans le Scope global pour un accès par nos fonctions
let canvasDom;
let ctx;


// Dès que le DOM est chargé on commence
document.addEventListener('DOMContentLoaded', function () {
     initCanvasSize();
    // L'objet du DOM Canvas
    canvasDom = document.querySelector('#ex1');

    // Le context utilisé avec Canvas qui donne accès aux librairies de manipulation 2D
    ctx = canvasDom.getContext('2d');

        // On dessine notre cercle la première fois
        displayGame();
        // On lance notre jeu
        playGame();
        
        initGame();

});

let boardGame =
{
    width: 800,
    height:600,
    directionY: -1,
    color:"#ac97ad",
    speed:5,
}
let circle = 
{
    color:"#e3b129",
    width:50,
    height:50,
    radius:10,
    x:boardGame.width/2,
    y:boardGame.height/2,
}

let plateau = 
{
    width:100,
    height:15,
    x:350,
    y:550,
    color:"#961517",
    speed:20,
    directionG:-1,
    directionD:1,
}

function displayGame ()
{
    
    ctx.clearRect(0, 0, boardGame.width, boardGame.height);
    //On déclare un rectangle qui va servir de background
    ctx.fillStyle = boardGame.color;
    // On déclare le cercle
    ctx.fillRect(0, 0, boardGame.width, boardGame.height);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = circle.color;
    ctx.fill();
    
    //plateau
    ctx.fillRect(plateau.x, plateau.y, plateau.width, plateau.height);
    ctx.fillStyle = plateau.color;
    ctx.fill();
}

function playGame ()
{
    detectCollisions();
    let boardGameTop = 0;
    circle.y += boardGame.directionY;
    
    if (circle.y - circle.radius === boardGameTop ) 
    // Si le cercle atteint le haut du board game, alors il redescend
    {
        boardGame.directionY *= -1;
        circle.y += boardGame.directionY * boardGame.speed;
        // On incrémente la position du cercle par la vitesse et la direction du boardGame, pour lui permettre de bouger
    }
    // On dessine notre cercle
    displayGame();
    
    // On demande à Js de relancer l'animation à chaque boucle
    let animationID = requestAnimationFrame(playGame); 
    // Une variable est déclaré pour se permettre de gérer l'animation, possibilité de l'arréter
}
function initGame()
{
    let plateauX = 0;

    
    window.addEventListener("keydown", function(event){
        
            if(event.code === "ArrowRight" || event.code === "ArrowUp")
            {
                if(plateau.x + plateau.width > boardGame.width)
                {//si le bout droit du plateau arrive au bord droit, alors il s'arrete et ne peux aller plus loin
                    plateau.x = boardGame.width - plateau.width;
                    
                }
                plateau.x += plateau.directionD * plateau.speed;
                

            }
            else
            {
                if(plateau.x < 0)
                {// Si le bout gauche du plateau arrive au bord gauche, alors il s'arrete
                    plateau.x = 0 ;
                }
                plateau.x += plateau.directionG * plateau.speed;
            }
    })
}
function msgGameOver()
{
    let gameOver = document.getElementById("gameOverMessage");
    gameOver.style.display = 'block';
    let Unshowgame = document.getElementById("game");
    Unshowgame.style.display = 'none';
    // ctx.font = "bold 68px";
    // ctx.fillstyle = "black";
    // ctx.fillText("GameOver !",boardGame.width/2, boardGame.height/2 );
    // ctx.fill(); A finir !!!!!!
    
}
function detectCollisions()
{
    
    if (circle.y + circle.radius >= plateau.y && circle.y <= plateau.y + plateau.height)
    {
        if (circle.x + circle.radius >= plateau.x && circle.x - circle.radius <= plateau.x + plateau.width)
        {
            boardGame.directionY *= -1;
            circle.y += boardGame.directionY * boardGame.speed;
            console.log("yoooooooooo")
        }
    }
    if(circle.x == plateau.x)
    {
        boardGame.directionY *= -1;
        circle.y += boardGame.directionY * boardGame.speed;
    }
    if(circle.y + circle.radius >= boardGame.height)
    {
        msgGameOver();
        console.log("weshhhhhhhhhsh")
    }

}
function initCanvasSize()
{
    // Gère la taille des canvas à les associant au propriété css des sections
    let canvasList = document.querySelectorAll("canvas");

    for(canvas of canvasList)
    {
        let section = canvas.parentNode;

        canvas.width = section.clientWidth;
        canvas.height = section.clientHeight;
    }
}
