
let url = "https://jsonplaceholder.typicode.com/posts/1";
const postArticle = document.getElementById("postArticle");

fetch(url)
.then(function(response){
    return response.json()
})
.then(function(post){
        
        let header = document.createElement("header");
        
        let title = document.createElement("h2");
        title.textContent = post.title;
        header.appendChild(title);

        let body = document.createElement("p");
        body.textContent = post.body;

        let footer = document.createElement("footer");

        url = `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`;

        fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function(post){

            let dl = document.createElement("dl");
            
            for (let i = 0; i < post.length; i++)
            {
                let dt = document.createElement("dt");
                let dd = document.createElement("dd");

                dt.appendChild = post[i].name;
                dd.textContent = post[i].body;
                dl.appendChild(dt);
                dl.appendChild(dd);
            }
            footer.appendChild(dl);
        });

        postArticle.appendChild(header);
        postArticle.appendChild(body);
        postArticle.appendChild(footer);
})
