import { Weapon } from './weapon.js';

class Sword extends Weapon
{
    pommelStrikeDamages;
    
    constructor(name, hand, damage, pommelStrikeDamages)
    {
        super(name, hand, damage);
        this.pommelStrikeDamages = pommelStrikeDamages;
    }
    get pommelStrikeDamages ()
    {
        return this.pommelStrikeDamages;
    }
    set pommelStrikeDamages (pommelStrikeDamages)
    {
        this.pommelStrikeDamages = pommelStrikeDamages;
    }
}

export { Sword }; 