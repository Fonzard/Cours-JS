// EXERCICE 1
// let numbers = [12, 33, 56, 77, 48, 76, 29];

// console.log("avant la modif", numbers)


//Ne marche pas, car ils ne changent sans doute pas les valeurs de numbers 
// for (let number of numbers )
// {
//     if (number % 2 == 0)  
//     {
//         number += 1;
//         console.log("yooooo")
//     }
//     else 
//     {
//         number -= 1;
//     }
// }

//Bonne réponse !!!
// for (let i = 0; i < numbers.length; i++)
// {
//     if (numbers[i] % 2 == 0)
//     {
//         numbers[i] += 1;
//     }
//     else 
//     {
//         numbers[i] -= 1; 
//     }
// }

// console.log("après la modif",numbers);

//EXERCICE 2
let mixed = [34, 657, 38, 56, 90, 24, 98, 103, 934];
let filterNbrePair = mixed.filter((mixed) => mixed % 2 ==0);

console.log(filterNbrePair);

//EXERCICE 3 

let names = [
    [
        "Barack",
        "Joe",
        "Hillary"
    ],
    [
        "Obama",
        "Biden",
        "Clinton"
    ]
];

let surname = names[0];
let name = names[1];
let surnameName = [surname[0] + " " + name[0], surname[1] + " " + name[1], surname[2] + " " + name[2]];
console.log(surnameName);

//EXERCICE 4

// let numbers = [123, 32, 56, 43, 28, 97, 16, 845, 67, 34];
// let words = ["Tartampion", "Carabistouille", "MÃ©chanisme", "Vote", "Ã‰limination", "Scrogneugneu", "Gaffe", "Alambic"];

// let maxNumbers = Math.max(...numbers);
// let smallestWords = words.reduce((smallest,current) => {
//     return current.length < smallest.length ? current : smallest;
// }, words[0]);

// console.log(maxNumbers);
// console.log(smallestWords);

//EXERCICE 5

let numbers = [34, 56, 456, 28, 42, 543, 846, 432, 33, 806, 92, 11, 37];


numbers.sort(function(a,b)
{
    return a - b;
});
console.log(numbers);

// //EXERCICE 6

let map1 = [
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "1", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "2", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
];

let elementToMove = "1";
let targetElement = "2";




let x1;//Ligne 1 element
let x2;//Ligne 2 target
let y1;//Colonne 1 element
let y2;//Colonne 2 target

for (let i = 0; i < map1.length; i++)
{
    for (let j = 0; j < map1.length; j++)
    {
        if (map1[i][j] === elementToMove)
        {
            x1 = i;
            y1 = j;
        }
        else if (map1[i][j] === targetElement)
        {
            x2 = i;
            y2 = j;
        }

    }

    console.log(x1);
    console.log(y1);
    console.log(x2);
    console.log(y2);
    
    let newRow = x1;
    let newColumn = y1;
    
    let inMove = true;
    while(inMove)
    {
    // Boucle qui paramètre les différents mouvement possible d'Element
        if (x1 !== x2)
        {
            if (y1 < y2) // Vérifie où se situe la target,si x1 < x2 alors il faut que x1 se déplace à droite 
            {
               newColumn = y1 + 1; 
            }
            else if (y1 > y2) // x1 se décale à gauche
            {
                newColumn = y1 - 1;
            }
            else 
            {
                inMove = false;//point d'arrêt sur point 2
            }
        }
        
        else if (x1 < x2) //Déplacement vers le bas ou diagonal bas/gauche
        {
            if (y1 === y2)
            {
                newRow = x1 + 1;//se déplace vers le bas 
            }
            else if (y1 < y2)
            {
                newRow = x1 + 1;//Se déplace vers la droite 
                newColumn = y1 + 1;
            }
            else 
            {
                newRow = x1 + 1;//Se déplace vers la gauche
                newColumn = y1 - 1;
            }
        }
        
        else if (x1 > x2) // Se déplace vers le haut ou diagonal haut/gauche/droite
        {
            if (y1 === y2) //Déplace vers le haut 
            {
                newRow = x1 - 1;
            }
            else if (y1 < y2) //Se déplace vers la droite
            {
                newRow = x1 - 1; 
                newColumn = y1 + 1;
            }
            else // Se déplace vers la gauche
            {
                newRow = x1 - 1;
                newColumn = y1 - 1;
            }
        }
        if (newColumn === y2 && newRow === x2)
        {
            
        }
        else
        {
            map1[x1][y1] = "0";
            map1[newRow][newColumn] = "1";
             
        }
        
    x1 = newRow;
    y1 = newColumn;
        
    console.log(x1,y1);
    console.log(map1);
    }

}// ON peut mieux optimiser nos déplacement en mettant les déplacements en diagonal en premier dans l'ordre de cascade.
let map2 = [
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["2", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "1", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
];

let map3 = [
    ["1", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "2"]
];

let map4 = [
    ["0", "0", "0", "0", "0", "0", "0", "0", "1", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "2"]
];

let map5 = [
    ["1", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "2", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
];