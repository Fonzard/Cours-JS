let url = "https://jsonplaceholder.typicode.com/users/1";
const userInfo = document.getElementById("userInfo");   

fetch(url)
.then(function(response){
    return response.json()
})
.then(function(result){

    url = 'https://jsonplaceholder.typicode.com/posts?userId=${result.id}';

    //J'affiche les infos de l'user
    addUserInfo("Nom", result.name);
    addUserInfo("Email", result.email);
    addUserInfo("Site Internet", result.website);

fetch(url)
.then(function(response){
    return response.json()
})
.then(function(result){

    let ul = document.getElementById("userPosts");
    // J'affiche la liste des articles
    for (let i = 0; i < result.length; i++){
        
        let li = document.createElement("li");
        let article = document.createElement("article");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let title = document.createTextNode(result[i].title);
        let body = document.createTextNode(result[i].body);
        // let li = document.createElement("li");
        // let article = document.createElement("article");
        // let h2 = document.createElement("h2");
        // let p = document.createElement("p");

        // p.textContent = result[i].body;
        // h2.textContent = result[i].title;

        h2.appendChild(title);
        p.appendChild(body);
        article.appendChild(h2);
        article.appendChild(p);
        li.appendChild(article);
        ul.appendChild(li);
    }
});
})

//Fonction pour ajouter les infos user au dl
function addUserInfo (label, value) {
    
    let dt = document.createElement("dt");
    dt.textContent = label;
    userInfo.appendChild(dt);

    let dd = document.createElement("dd");
    dd.textContent = value;
    dt.appendChild(dd);
}