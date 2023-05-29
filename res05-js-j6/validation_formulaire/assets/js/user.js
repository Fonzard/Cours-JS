class user {
    lastName;
    firstName;
    nickName;
    email;
    password;
    confirmPassword;
    bio;
    
    constructor(lastName, firstName, nickName, email, password, confirmPassword, bio="null")
    {
        this.lastName = lastName;
        this.firstName = firstName;
        this.nickName = nickName;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.bio = bio;
    }
    get lastName (){
        return this.lastName;
    }
    set lastname (lastName){
        this.lastName = lastName;
    }
    get firstName (){
        return this.firstName;
    }
    set firstName (firstName){
        this.firstName = firstName;
    }
    get nickName (){
        return this.nickName;
    }
    set nickName (nickName){
        this.nickName = nickName;
    }
    get email (){
        return this.email;
    }
    set  email(email){
        this.email = email;
    }
    get password (){
        return this.password;
    }
    set password (password){
        this.password = password;
    }
    get confirmPassword (){
        return this.confirmPassword;
    }
    set confirmPassword (confirmPassword){
        this.confirmPassword = confirmPassword;
    }
    get bio (){
        return this.bio;
    }
    set bio (bio){
        this.bio = bio;
    }
}

export { user };