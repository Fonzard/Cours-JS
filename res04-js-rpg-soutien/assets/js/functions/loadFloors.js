export default function loadFloors(map)
{
    let id = 0;
    
    for (let i = 0; i < 20; i++){
        for(let j = 0; j < 30; j++){
            
            let box = document.getElementById(id)
            if (map[i][j] === "G"){
                
                box.classList.add("grass");
            }
            else if (map[i][j] === "W"){
                box.classList.add("water");
            }
            else if (map [i][j] === "S"){
                box.classList.add("sand");
            }
            else if (map[i][j] === "D"){
                box.classList.add("dirt")
            }
            id++;
        }
    }
}