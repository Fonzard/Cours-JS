class User {
    #lastName; // # signale que les attributs sont en privés et accessible uniquement à l'intérieur de la class
    #firstName;
    #nickName;
    #email;
    #password;
    #confirmPassword;
    #biography;
    #errors;
    
    constructor(lastName, firstName, nickName, email, password, confirmPassword, biography="null")
    {
        this.#lastName = lastName;
        this.#firstName = firstName;
        this.#nickName = nickName;
        this.#email = email;
        this.#password = password;
        this.#confirmPassword = confirmPassword;
        this.#biography = biography;
        this.#errors = [];
    }
    get lastName (){
        return this.#lastName;
    }
    set lastname (lastName){
        this.#lastName = lastName;
    }
    get firstName (){
        return this.#firstName;
    }
    set firstName (firstName){
        this.#firstName = firstName;
    }
    get nickName (){
        return this.#nickName;
    }
    set nickName (nickName){
        this.#nickName = nickName;
    }
    get email (){
        return this.#email;
    }
    set  email(email){
        this.#email = email;
    }
    get password (){
        return this.#password;
    }
    set password (password){
        this.#password = password;
    }
    get confirmPassword (){
        return this.#confirmPassword;
    }
    set confirmPassword (confirmPassword){
        this.#confirmPassword = confirmPassword;
    }
    get biography (){
        return this.#biography;
    }
    set biography (biography){  
        this.#biography = biography;
    }
    get errors()
    {
        return this.#errors;
    }
    set errors (errors)
    {
        this.#errors = errors;
    }
    addError(errors)
    { // Créer class erreur et l'attribuer à tous les validates 
        this.#errors.push(errors);
    }
    resetError(errors)
    {
        this.#errors = [];
    }
    checkMinMaxChars(min, max, str) { //fonction utile pour encadrer la nbr min et max de caractère et surtout réutilisable par d'autre fonction
        if(str.length >= min && str.length <= max)
            return true;
        else
            return false;
    }
    // Ici on déclare les conditions nécessaire à la validation des différents input du formulaire
    validateFirstName() {
        return this.checkMinMaxChars(2, 64, this.#firstName);
    }

    validateLastName() {
        return this.checkMinMaxChars(2, 64, this.#lastName);
    }

    validateNickName(nameList) {
        if(!this.checkMinMaxChars(2, 64, this.#nickName))
        {
            this.addError({
                field : "nickName",
                message : "Name have to be between 2 and 64 characters"
            });
            return false;
        }

        if(nameList.includes(this.#nickName))
        {
            this.addError({
                field : "nickName",
                message : "Nickname already exists"
            });
            return false;
        }


        return true;
    }

    validateEmail() {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Permet de vérifier si il y a bien des caractères spéciaux

        return regex.test(this.#email);
    }

    validatePassword() {
        if(this.#password !== this.#confirmPassword)
        {
            this.addError({
                field : "password",
                message : "Passwords do not match"
            });
            return false;
        }


        if (this.#password.length < 12)
            {
                this.addError({
                    field : "password",
                    message : "Wrong password format"
                });
                return false;
            }

        if (!/[A-Z]/.test(this.#password)) {
            this.addError({
                field : "password",
                message : "Wrong password format"
            });
            return false;
        }

        if (!/\d/.test(this.#password)) {
            this.addError({
                field : "password",
                message : "Wrong password format"
            });
            return false;
        }

        if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(this.#password)) {
            this.addError({
                field : "password",
                message : "Wrong password format"
            });
            return false;
        }

        return true;
    }

    validateBiography() {
        return this.checkMinMaxChars(128, 512, this.#biography);
    }
    // On reprend les fonctions déclaré à partir de la ligne 87, pour les assembler avec un message d'erreur et récupérer leur état (true or false). Pour au final accepter la validation du formulaire
    validate() {
        if(!this.validateFirstName())
        {
            this.addError({
                field : "firstName",
                message : "Name have to be between 2 and 64 characters"
            });
        }


        if(!this.validateLastName())
        {
            this.addError({
                field : "lastName",
                message : "Name have to be between 2 and 64 characters"
            });
        }

        this.validateNickName(["titi", "toto", "tutu", "tata"]);

        if(!this.validateEmail())
        {
            this.addError({
                field : "email",
                message : "Wrong email format"
            });
        }

        this.validatePassword();

        if(!this.validateBiography())
        {
            this.addError({
                field : "biography",
                message : "biography has to be between 128 and 512 characters"
            });
        }

        if(this.#errors.length > 0)
            return false;

        return true;
    }
}


export { User };