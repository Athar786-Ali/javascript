

class User {
    constructor(usnername , email , password){
        this.usnername = usnername
        this.email = email
        this.password = password
    }
        encryptPassword(){
            return `${this.password} athar`
        }
        chageUser(){
            return `${this.usnername.toUpperCase()}`
        }
    }


const chai  = new User("Athar" , "nitw@gmail.com" , 23456)
console.log(chai.chageUser());
