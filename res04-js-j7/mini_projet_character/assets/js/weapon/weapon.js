
class Weapon
{
    name;
    hand;
    damage;
    
    
    constructor(name, hand, damage)
    {
        this.name = name;
        this.hand = hand;
        this.damage = damage;
    }
    get name ()
    {
        return this.name;
    }
    set name (name)
    {
        this.name = name;
    }
    get hand ()
    {
        return this.hand;
    }
    set hand (hand)
    {
        this.hand = hand;
    }
    get damage ()
    {
        return this.damage;
    }
    set damage (damage)
    {
        this.damage = damage;
    }
}

export { Weapon }; 