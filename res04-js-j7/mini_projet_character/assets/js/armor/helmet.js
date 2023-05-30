import { Armor } from './armor.js';

class Helmet extends Armor
{
    visibility;
    
    constructor(name, resistance, visibility)
    {
        super(name, resistance)
        this.visibility = visibility;
    }
    get visibility ()
    {
        return this.visibility;
    }
    set visibility (visibility)
    {
        this.visibility = visibility;
    }
}

export { Helmet }; 