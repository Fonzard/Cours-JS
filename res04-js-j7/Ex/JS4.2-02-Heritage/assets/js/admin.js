import { User } from './user.js';

class Admin extends User {
    
    constructor (name, firstName)
    {
        super(name, firstName); 
    }
    canEditArticles()
    {
        return true
    }
}

export { Admin };