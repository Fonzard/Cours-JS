class Pizza {
    ingredients;
    
    constructor()
    {
        this.ingredients = [];

    }
    
    get ingredients ()
    {
        return this.ingredients;
    }
    addIngredient(ingredientToAdd)
    {
        function addIngredient (ingredientToAdd)
        {
            for (let i = 0; i < this.ingredients.length; i++)
            {
                if (this.ingredients[i] !== ingredientToAdd)
                {
                    this.ingredients.push(ingredientToAdd);
                    this.display();                
                }
            }
        }
    }
    removeIngredient(ingredientToRemove)
    {
        function removeIngredient (ingredientToRemove) {
            
            let newIngredients = [];
            for (let i = 0; i < this.ingredients.length; i++)
            {
                if(this.ingredients[i] === ingredientToRemove)
                {
                    this.ingredients = newIngredients;
                    this.display();
                }
            }
        }
    }
    //Il faut que je chope l'ingredient dans le tableau de pizza.js pour afficher le html 
    display()
    {
        let ul = document.querySelectorAll("aside ul");
        let li = document.createElement("li")
        
        this.ingredients.forEach(function(ingredient)
        {
                let article = document.createElement("article");
                let header = document.createElement("header");
                let figure = document.createElement("figure");
                let img = document.createElement("img");
                let h3 = document.createElement("h3")
                            console.log("izi")
                img.src = ingredient.file;
                img.setAttribute("alt", ingredient.name)
                
                ul.appendChild(li);
                li.appendChild(article);
                article.appendChild(header);
                header.appendChild(figure);
                figure.appendChild(img);
                header.appendChild(h3);
                h3.textContent = ingredient.name;
            
        });
    }
}

export { Pizza };