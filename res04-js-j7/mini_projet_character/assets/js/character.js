class Character 
{
    #helmet;
    #axe;
    #shield;
    #sword;
    
    constructor ()
    {
        this.#helmet = false;
        this.#axe = false;
        this.#shield = false;
        this.#sword = false;
    }
    get helmet ()
    {
        return this.#helmet;
    }
    set helmet (helmet)
    {
        this.#helmet = helmet;
        this.render();
    }
    get axe ()
    {
        return this.#axe;
    }
    set axe (axe)
    {
        this.#axe = axe;
        this.render();
    }
    get shield ()
    {
        return this.#shield;
    }
    set shield (shield)
    {
        this.#shield = shield;
        this.render();
    }
    get sword ()
    {
        return this.#sword;
    }
    set sword (sword)
    {
        this.#sword = sword;
        this.render();
    }
    render ()
    {
        let rightHand = document.getElementById("right");
        let leftHand = document.getElementById("left");
        let head = document.getElementById("center");
        
        if (this.#helmet)
        {
            head.classList.add("helmet");
        }
        else
        {
            head.classList.remove("helmet");
        }
        
        if(this.#axe)
        {
            rightHand.classList.remove("sword");
            rightHand.classList.add("axe");
        }
        else
        {
            rightHand.classList.remove("axe");
        }
        
        if(this.#sword)
        {
            rightHand.classList.remove("axe");
            rightHand.classList.add("sword");
        }
        else
        {
            rightHand.classList.remove("sword");
        }
        
        if(this.#shield)
        {
            leftHand.classList.add("shield");
        }
        else
        {
            leftHand.classList.remove("shield");    
        }
    }
}

export { Character };