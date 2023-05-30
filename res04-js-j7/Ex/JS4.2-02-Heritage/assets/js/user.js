class User 
{
    name;
    firstName;
        fullName(name, firstName)
    {
        this.fullName = '${name} ${firstName}';
        return this.fullName;
    }
}

export { User };