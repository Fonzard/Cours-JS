import { Weapon } from './weapon.js';

class Axe extends Weapon
{
    slashDamages;
    
    constructor(name, hand, damage, slashDamages)
    {
        super(name, hand, damage);
        this.slashDamages = slashDamages;
    }
    get slashDamages ()
    {
        return this.slashDamages;
    }
    set slashDamages (slashDamages)
    {
        this.slashDamages = slashDamages;
    }
}

export { Axe }; 