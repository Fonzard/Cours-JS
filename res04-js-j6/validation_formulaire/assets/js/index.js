import { User } from './user.js';


window.addEventListener("DOMContentLoaded", function(){
    let form = document.getElementById("container");

    form.addEventListener("submit", function(event)
    {
        event.preventDefault();
    
        let lastName = document.getElementById("lastName").value;
        let firstName = document.getElementById("firstName").value;
        let nickName = document.getElementById("nickName").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        let biography = document.getElementById("biography").value;
        
        let user = new User (lastName, firstName, nickName, email, password, confirmPassword, biography);
        
        let ret = user.validate();
        
        // Vérifie si tous les champs sont remplit correctement
        if (!ret)
        {
            for(let error of user.errors)
            {
            let p = document.getElementById(`${error.field}-error`);
            p.innerHTML = "";
            let text = document.createTextNode(error.message);
            p.appendChild(text);
            }
        }
    });
  
});   