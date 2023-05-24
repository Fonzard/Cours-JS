//EXERCICE 1
// let numbers = [-23,42,21,90,54,362,-12,57,78,84,35,546,128,7,15,65,28];

// function sortCroissant(tab) {
//     var length = tab.length;
//     for (let i = 1; i < length; i++){
//         let valeurCourante = tab[i];
//         let j = i - 1;
//         while (j >= 0 && tab[j] > valeurCourante){
//             tab[j + 1] = tab[j];
//             j--;
//         }
//         tab[j + 1] = valeurCourante;
//     }
//     return tab;
// }
// function sortDescending(tab) {
//     var length = tab.length;
//     for (let i = 1; i < length; i++){
//         let valeurCourante = tab[i];
//         let j = i - 1;
//         while (j >= 0 && tab[j] < valeurCourante){
//             tab[j + 1] = tab[j];
//             j--;
//         }
//         tab[j + 1] = valeurCourante;
//     }
//     return tab;
// }
// let tableSortC = sortCroissant(numbers);
// console.log(tableSortC);
// let tableSortD = sortDescending(numbers);
// console.log(tableSortD);


// EXPLICATION :


// function triCroissant(tab) : Cela déclare une fonction appelée triCroissant qui prend un tableau tab en tant que paramètre. Cette fonction effectue le tri des éléments du tableau dans l'ordre croissant.

// var length = tab.length; : Cette ligne stocke la longueur du tableau dans la variable length. Cela permet de déterminer combien d'itérations seront nécessaires pour trier tous les éléments.

// for (var i = 1; i < length; i++) : C'est une boucle for qui itère à travers les éléments du tableau à partir de l'index 1 (car le premier élément est considéré déjà trié). La variable i est utilisée comme compteur pour parcourir les éléments du tableau.

// var valeurCourante = tab[i]; : Cette ligne stocke la valeur de l'élément courant du tableau dans la variable valeurCourante. Cela permet de conserver la valeur de l'élément pendant le processus de déplacement et d'insertion.

// var j = i - 1; : Cette ligne initialise la variable j à l'index précédent de l'élément courant. Cela permet de comparer l'élément courant avec les éléments précédents lors du processus d'insertion.

// while (j >= 0 && tab[j] > valeurCourante) : C'est une boucle while qui continue d'itérer tant que j est supérieur ou égal à 0 (pour ne pas sortir du tableau) et que l'élément à l'index j est plus grand que la valeurCourante. Cela permet de décaler les éléments plus grands vers la droite pour faire de la place à l'insertion de la valeurCourante à la bonne position.

// tab[j + 1] = tab[j]; : Cette ligne déplace les éléments plus grands vers la droite en écrasant la valeur de tab[j + 1] avec la valeur de tab[j].

// j--; : Cette ligne décrémente j pour passer à l'élément précédent du tableau.

// tab[j + 1] = valeurCourante; : Une fois que la bonne position pour l'insertion de valeurCourante est trouvée (lorsque tab[j] n'est plus plus grand que valeurCourante), cette ligne insère valeurCourante à l'index j + 1.

// return tab; : La fonction renvoie le tableau trié.

// EXERCICE 2
    let userAnswer;
    let scriptNbre;
function player(){
    let tryNbre = 0;
    userAnswer = parseInt((window.prompt("Choisi un chiffre le boss")));
    while (scriptNbre !== userAnswer) {
            scriptNbre = Math.floor(Math.random()*10001);
        if (scriptNbre < userAnswer) {
            scriptNbre = scriptNbre + 2; // Je multiplie par 2 pour indiquer au script que le nbre choisi est plus haut
            tryNbre++;
        }
        else if (scriptNbre > userAnswer) {
            scriptNbre = scriptNbre - 1; // Je divise par 2 pour indiquer au script que le nbre choisi est plus bas 
            tryNbre++;
        }
        else if (scriptNbre === userAnswer){
            window.alert("Bien ouej le script tu as trouver en " + tryNbre + " essais.");
            tryNbre=0;
        }
    } 
}
player(); // Appelle la function
