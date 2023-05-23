// EXERCICE 1
function add(a, b) {
    return a + b;
}
console.log(add(21,21));

function sub(a,b) {
    return a - b;
}
console.log(sub(63,21));

function mult(a,b) {
    return a * b;
}
console.log(mult(21,2));

function div(a,b) {
    return a / b;
}
console.log(div(84,2));

function mod(a,b) {
    return a % b;
}
console.log(mod(42,2));

// EXERCICE 2

function askUserFirstNumber(){
    let firstNumber = parseFloat(prompt("Quels nombres souhaites tu utiliser en premier ?"));
    return firstNumber;
}
function askUserSecondNumber(){
    let secondNumber = parseFloat(prompt("Quels nombres souhaites tu utiliser en deuxième ?"));
    return secondNumber;
}
 function askUserOperation(){
    let operation = prompt("Quelles opérations souhaites tu utiliser ?");
    return operation;
}

//EXERCICE 3
let operationChoisie = askUserOperation();
let firstChoice = askUserFirstNumber();
let secondChoice = askUserSecondNumber();
let result


function calculator(){
    switch (operationChoisie) {
    case "+":
        result = firstChoice + secondChoice;
    break;
    case "-":
        result = firstChoice - secondChoice;
    break;
    case "*":
        result = firstChoice * secondChoice;
    break;
    case "/":
        result = firstChoice / secondChoice;
    break;
    default:
    alert("Operateur invalide !")
}
    return result;
}
let finalResult = calculator();
document.write("le calcul est : " + firstChoice + " " + operationChoisie + " " + secondChoice);
document.write("</br> le resultat est : " + finalResult);
