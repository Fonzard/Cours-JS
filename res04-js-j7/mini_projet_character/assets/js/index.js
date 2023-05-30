import { Character } from './character.js';
import { Armor } from './armor/armor.js';
import { Shield } from './armor/shield.js';
import { Helmet } from './armor/helmet.js';
import { Weapon } from './weapon/weapon.js';
import { Axe } from './weapon/axe.js';
import { Sword } from './weapon/sword.js';

window.addEventListener("DOMContentLoaded", function(){
  let character = new Character();
  
  let helmetBtn = document.getElementById("helmet-btn");
  let axeBtn = document.getElementById("axe-btn");
  let shieldBtn = document.getElementById("shield-btn");
  let swordBtn = document.getElementById("sword-btn");
    
    helmetBtn.addEventListener("click", function(event)
    {
       if (!character.helmet)
       {
           character.helmet = new Helmet ("GoldHelmet","1","100");
       }
       else 
       {
           character.helmet = false;
       }
    });
    
    axeBtn.addEventListener("click", function(event)
    {
        if (!character.axe)
        {
            character.axe = new Axe ("AxeRoutier","left", "12", "15");
        }
        else
        {
            character.axe = false;
        }
    });
    
    shieldBtn.addEventListener("click", function(event)
    {
       if (!character.shield)
       {
           character.shield = new Shield ("CartoonShield", "1", "100");
       }
       else
       {
           character.shield = false;
       }
    });
    
    swordBtn.addEventListener("click", function(event)
    {
       if (!character.sword)
       {
           character.sword = new Sword ("BiggestSwordNameInTheWorld", "right", "10", "15");
       }
       else 
       {
           character.sword = false;
       }
    });
});      