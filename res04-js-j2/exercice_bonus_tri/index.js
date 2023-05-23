//EXERCICE 1
let numbers = [-23,42,21,90,54,362,-12,57,78,84,35,546,128,7,15,65,28];

function sortNumbers(tab) {
    var length = tab.length;
    for (let i = 1; i < length; i++){
        let valeurCourante = tab[i];
        let j = i - 1;
        while (j >= 0 && tab[j] > valeurCourante){
            tab[j + 1] = tab[j];
            j--;
        }
        tab[j + 1] = valeurCourante;
    }
    return tab;
}
let tableSort = sortNumbers(numbers);
console.log(tableSort);