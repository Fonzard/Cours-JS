
function clickFiltersListener () {
    let ulFilters = document.getElementById("filters");
    let filtersDatas =document.querySelectorAll("#filters li");
    let liItems = document.querySelectorAll("#items li");
    let chooseColor = [];
    
    for (let filtersData of filtersDatas)
    {
        let filtersColor = filtersData.getAttribute("data-color");
        for (let liItem of liItems)
        {
            let itemColor = liItem.getAttribute("data-color");
            filtersData.addEventListener("click", function()
            {
                if ( filtersColor === itemColor)
                {
                    chooseColor.push(itemColor);
                    console.log(chooseColor); // Il faut maintenant vidé le tableau !!!!!
                }
            });  
        }
    }
    return chooseColor;
}

    
window.addEventListener("DOMContentLoaded", function(){
    clickFiltersListener();
});
