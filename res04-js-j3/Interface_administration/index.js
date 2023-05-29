//ASIDE MENU DROPDOWN
function toggleDropdown() {
    
    let h2s = document.querySelectorAll( "Main > aside h2");
    for ( h2 of h2s)
    {
        h2.addEventListener("click", function (event){
            let title = event.target;
            let datanav = title.getAttribute("data-nav");
            let ul = document.querySelector("ul[data-nav='" + datanav + "']");
            
            ul.classList.toggle("close");
            
        })
    }    
}
//ASIDE TOGGLE
function asideToggle() {
    let menuBtn = document.getElementById("side-menu-btn");
    
    menuBtn.addEventListener("click", function(event)
    {
        let header = document.querySelector(" body > header > section");
        header.classList.toggle("open");
        
        let aside = document.querySelector ("body > main > aside");
        aside.classList.toggle("open");
        
        let mainSections = document.querySelectorAll ("body > main > article");
        
        for (main of mainSections)
        {
            if (aside.classList.contains("open"))
            {
                main.style.gridColumn = "";
            }
            else 
            {
                main.style.gridColumn = "1/3";    
            }
        }
    });
}

//TABLEAU
let users = [  
    {  
        id: 0,  
        isActive: false,  
        age: 24,    
        name: "Marsh Obrien" 
    },  
    {  
        id: 1,  
        isActive: false,  
        age: 21,    
        name: "Rios Gibson" 
    },  
    {  
        id: 2,  
        isActive: false,  
        age: 29,  
        name: "Morgan Buchanan"
    },  
    {  
        id: 3,  
        isActive: true,  
        age: 25,    
        name: "Franklin Dyer" 
    },  
    {  
        id: 4,  
        isActive: false,  
        age: 30, 
        name: "Keller Pitts" 
    },  
    {  
        id: 5,  
        isActive: false,  
        age: 25,  
        name: "Davenport Maddox"  
    },  
    {  
        id: 6,  
        isActive: true,  
        age: 31,  
        name: "Judith Graves"
    },  
    {  
        id: 7,  
        isActive: true,  
        age: 26,  
        name: "Hoffman Hess" 
    },  
    {  
        id: 8,  
        isActive: true,  
        age: 22,  
        name: "Sheena Goff"
    },  
    {  
        id: 9,  
        isActive: false,  
        age: 39,  
        name: "Rose Lawrence" 
    }  
];

let tbody = document.querySelector("body > main > section table tbody");

    for (user of users)
    {
        let tr = document.createElement("tr");
        let tdId = document.createElement("td");
        let txtId = document.createTextNode(user.id);
        tdId.appendChild(txtId);
        tr.appendChild(tdId);
        
        let tdName = document.createElement("td");
        let txtName = document.createTextNode(user.name);
        tdName.appendChild(txtName);
        tr.appendChild(tdName);
        
        let tdAge = document.createElement("td");
        let txtAge = document.createTextNode(user.age);
        tdAge.appendChild(txtAge);
        tr.appendChild(tdAge);
        
        let tdActive = document.createElement("td");
        let txtActive = document.createTextNode(user.isActive);
    // Lier les états true et false au icone person fill up et person fill down
    // Chopper les icone sur bootstrap
        if (user.isActive === true)
        {
            txtActive.classList.add("bi-person-fill-up");
        }
        else
        {
            txtActive.classList.add("bi-person-fill-down");
        }
        
        tdActive.appendChild(txtActive);
        tr.appendChild(tdActive);
    }

window.addEventListener("DOMContentLoaded", function(){
    toggleDropdown();
    asideToggle();

});
