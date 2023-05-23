// EXERCICE 1
// let student = {
//     name : "Dimitri",
//     age : 27,
//     grades : [8,16,11],
//     average : 0,
// }

//EXERCICE 2
// let total = 0;
// let count = 0;

// for (let i = 0; i < student.grades.length; i++) {
//         total += student.grades[i];
//         count++;

// }
// student.average = total / count;
// console.log("La moyenne est de : " + student.average);
// console.log(student);

// EXERCICE 3
let student = [
    {
        name : "Dimitri",
        age : 27,
        grades : [8,16,11],
        average : 11.66,
    },
    {
        name : "Doug",
        age : 24,
        grades : [17,18,11],
        average : 15.33, 
    },
    {
        name : "Lena",
        age : 29,
        grades : [5,19,14],
        average : 12.66,
    },
];

for (let i = 0; i < student.length; i++) {
    console.log(student[i]);
}
