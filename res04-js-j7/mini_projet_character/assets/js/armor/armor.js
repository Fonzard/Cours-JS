class Armor
{
    name;
    resistance;
    
    constructor (name, resistance)
    {
        this.name = name;
        this.resistance =resistance;
    }
    get name ()
    {
        return this.name;
    }
    set name (name)
    {
        this.name = name;
    }
    get resistance ()
    {
        return this.resistance;
    }
    set resistance (resistance)
    {
        this.resistance = resistance;
    }
}

export { Armor };