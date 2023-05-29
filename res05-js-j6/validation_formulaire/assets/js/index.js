import { user } from './user.js';



let form = document.getElementById("container");

    let lastName = document.getElementById("lastName").value;
    let firstName = document.getElementById("firstName").value;
    let nickName = document.getElementById("nickName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let bio = document.getElementById("bio").value;
    
function submit (event)
{
    event.preventDefault();
    
    // Vérifie si tous les champs sont remplit correctement
    if (Validate() == true)
    {
        form.submit();
        form.reset();
        console.log("yoooo");
    }
    else
    {
        alert("t'a pas tout remplit chacal !!")
    }

    
    let newUser = new user (lastName, firstName, nickName, email, password, confirmPassword, bio);
    console.log(newUser);

}
// Ca ne marche pas la function bloque à Lastname
function Validate()
{
    let lastNameRequired = document.getElementById("lastName");
    let firstNameRequired =document.getElementById("firstName");
    let nickNameRequired = document.getElementById("nickName");
    let emailRequired = document.getElementById("email");
    let passwordRequired = document.getElementById("password");
    
    function validationLastName()
    {
        let x = lastName;
        if (x.length > 2 && 64 > x.length)
        {
            alert("T'ira pas plus loin miskine, T'as pas donné ton lastName.");
            lastNameRequired.classList.add("error");
            return false;
            console.log("false lName");
        }
        else
        {
            lastNameRequired.classList.remove("error");
            return true;
            console.log("true lName");
        }
    }
    function validationFirstName()
    {
        let x = firstName;
        if (x.length > 2 && 64 > x.length)
        {
            alert("T'ira pas plus loin miskine, T'as pas donné ton firstName.");
            firstNameRequired.classList.add("error");
            return false;
            console.log("false FName");
        }
        else
        {
            firstNameRequired.classList.remove("error");
            return true;
            console.log("true FName");
        }
    }
    function validationNickName()
    {   
        let existingNickname = ["Nick1","Nick2"]; // à rajouter en condition, pour voir si le pseudo n'existe pas dans la liste. 
        let x = nickName;
        if (x.length > 2 && 64 > x.length && )
        {
            alert("T'ira pas plus loin miskine, T'as pas donné ton nickName.");
            nickNameRequired.classList.add("error");
            return false;
            console.log("false NName");
        }
        else
        {
            nickNameRequired.classList.remove("error");
            return true;
            console.log("true NName");
        }
    }
    function validationEmail()
    {
        let x = email;
        if (x == "")
        {
            alert("T'ira pas plus loin miskine, T'as pas donné ton email.");
            emailRequired.classList.add("error");
            return false;
            console.log("false email");
        }
        else
        {
            emailRequired.classList.remove("error");
            return true;
            console.log("true email");
        }
    }
    function validationPassword()
    {
        let x = password;
        if (x == "")
        {
            alert("T'ira pas plus loin miskine, T'as pas donné ton MDP.");
            passwordRequired.classList.add("error");
            return false;
            console.log("false password");
        }
        {
            passwordRequired.classList.remove("error");
            return true;
            console.log("true password");
        }
    }
    // Vérifie si les deux mdp sont identique
    function samePasseword()
    {
        if (password !== confirmPassword)
        {
            alert("Miskine tu tes gouré, les mdp sont pas les mêmes.")
            return false;
        }
        else
        {
            return true;
        }
    }
    if(samePasseword() == true && validationLastName() == true && validationFirstName() == true &&  validationNickName() == true && validationEmail() == true && validationPassword() == true)
    {
        Validate() == true;
    }
    
}

window.addEventListener("DOMContentLoaded", function(){
   
       form.addEventListener("submit", submit);
});   