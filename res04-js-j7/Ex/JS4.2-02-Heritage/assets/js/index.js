import { User } from './assets/js/user.js';
import { Admin } from './assets/js/admin.js';

window.addEventListener("DOMContentLoaded", function(){
    
    let user1 = new User ();
    user1.fullName("Habibou", "De Débézède");
    console.log(User);
    let admin1 = new Admin ();
    admin1.fullName("Eddy", "Fental");
    console.log(admin1);
});