import { Armor } from './armor.js';

class Shield extends Armor
{
    block;
    
    constructor(name, resistance, block)
    {
        super(name, resistance);
        this.block = block;
    }
    
    get block ()
    {
        return this.block;
    }
    set block (block)
    {
        this.block = block;
    }
}

export { Shield };