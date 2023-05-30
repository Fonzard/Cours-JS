import { pizza } from './pizza.js';
import { toDoList } from './todolist.js';
window.addEventListener("DOMContentLoaded",function()
{
    let veggie = new pizza ("La Veggie","tomate", "fromage", "légumes");
    let meattie = new pizza ("La Meattie", "tomate", "fromage", "viande");
    let fishie = new pizza ("La Fishie", "tomate", "fromage", "poisson");
    
    let toDo = new toDoList (" ");
    
});

let toDo = new toDoList(" ");
// Création liste

//Ajoût d'une tâche à la liste 

let btnNewTask = document.getElementById("newTask");
let taskList = document.getElementById("task");


function addTask()
{
    let newTask = prompt("Choisi une tâche : ");
    
    if (newTask) 
    {
        toDo.tasks.push({nom : newTask});
        addElement(newTask);
    }
}

function addElement (content)
{
    let li = document.createElement('li');
    li.textContent = content;
    taskList.appendChild(li);   
}
btnNewTask.addEventListener("click", addTask);