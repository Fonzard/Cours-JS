function toggleDropdown() {
    
    let h2s = document.querySelectorall( "Main > aside h2");
    for ( h2 of h2s)
    {
        h2.addEventListener("click", function (event){
            let title = event.target;
            let datanav = title.getAttribut("data-nav");
            let ul = document.querySelector("ul[data-nav='" + dataNav + "']");
            
            ul.classList.toggle("close");
            
        })
    }    
}


window.addEventListener("DOMContentLoaded", function(){
    toggleDropdown();

});

// ESSAI 1 

    // let toggleState = "close";
    // // down.style.display = down.style.display === "none" ? "block" : "none";
    //     down.addEventListener("click", function() 
    // {
    //     if (toggleState === "close"){
    //         down.style.display = "block";
    //         toggleState = "open";
    //     }
    //     else if (toggleState === "open"){
    //         down.style.display = "none";
    //         toggleState = "close";
    //     }
    // });