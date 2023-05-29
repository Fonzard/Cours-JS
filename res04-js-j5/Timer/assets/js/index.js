//EXERCICE 1
function timer()
{
    alert("hello world");
}

setTimeout(timer, 4200); // Dans 4,2sec

//EXERCICE 2

// let date = new Date();
// let hours = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();

// function ex2()
// {
//     alert(date,hours,minutes,seconds);
// }
// let intervelId = setInterval(ex2,4200);


//EXERCICE 3

let times = [1,2,3];

setTimeout(function ()
{
    console.log(times[0]);
    setTimeout(function()
    {
      console.log(times[1]);
      setTimeout(function()
      {
          console.log(times[2]); 
      }, times[2] * 1000);
    },times[1] * 1000);
},times[0] * 1000);

//EXERCICE 4

let numbers = [32,43,56,24,78,42];
let decompteIndex = 0;


function decompte()
{
        if (decompteIndex < numbers.length)
        {
            console.log(numbers[decompteIndex]);
            decompteIndex++;
        }
        else
        {
            clearInterval(intervalId);
            console.log("ça continue")
        }
}

let intervalId = setInterval(decompte,1000)


//Tentative avec une boucle for of
//Ca ne marche pas il bloque sur 42 le derniers nbres du tableau

// function decompte ()
// {
//     for (number of numbers)
//     {
//         setTimeout(function()
//         {
//             console.log(number);
//             decompteIndex++;
//         if (decompteIndex === numbers.length)
//         {
//             clearTimeout(timeOutId);
//         }
//         },decompteIndex * 1000);
//     }
// }
// let timeOutId = setTimeout(decompte,0);