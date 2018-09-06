console.log('start')





class User{
    constructor(userName){
        this.name = userName;
    }
    sayHi(){
        console.log (this.name);
    }
}

let user = new User('Taras');
user.sayHi();


