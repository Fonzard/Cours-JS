const urlUsers = "https://jsonplaceholder.typicode.com/users";
const userList = document.getElementById("userList");


fetch(urlUsers)
.then(function(response) {
    return response.json();
})
.then(function(users){
    
    for(let user of users){
        const liUser = document.createElement("li");
        liUSer.textContent = user.name;
        userList.appendChild(liUser);
     }
     console.log(users);
})
