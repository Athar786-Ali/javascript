// object Literals

const key = Symbol("myKey")
const JsUser = {
    name: "Athar",
    Age: 22,
    Location : "Bhoapal",
    email :"athar@gmail.com",
    isLoggedIn : false,
    lastLoginDays :["Monday" , "Tuesday" , "Wednesday"],
    [key] :"myBigKey"

}
console.log(JsUser)
console.log(JsUser.Location);
console.log(JsUser["email"]) // another Way->suqare notation
console.log(JsUser["Location"])
console.log(JsUser[key])

JsUser.email = "chat@gmail.com"
console.log(JsUser.email);

// Object.freeze(JsUser)
JsUser.email = "sanjay@gmail.com"
console.log(JsUser.email);    // no change after freeze
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js User");
    
}

JsUser.greetingTwo = function(){
    console.log(`hello Js User , ${this.name}`);
    
}
JsUser.greeting = function(){
    console.log("hello Js User");
    
}
console.log(JsUser.greeting());
console.log(JsUser.greeting);

console.log(JsUser.greetingTwo());


// object singleton

const tinder = new Object()
// const tinder  = {}
tinder.id = "12334as"
tinder.name = "Athar Ali"
tinder.isLoggedIn = false;

console.log(tinder);


const regularuser = {
    user : {
        fullName:{
            firstName:"Athar",
            lastName:"Ali"
        }
    }
}

console.log(regularuser.user.fullName.firstName);
console.log(regularuser);

const obj1  = {1 : "a" , 2 : "b"}
const obj2 = {3 : "c" , 4: "d"}

// const obj = Object.assign(obj1 , obj2)
// console.log(obj);
// const obj = Object.assign({} , obj1 , obj2)
const obj = {...obj1 , ...obj2}
console.log(obj);

const mainUser = [
    {
        name:"Athar",
        Age :90
    },
    {
        Location:"Maharastra",

    }
]
console.log(mainUser[1].Location);
console.log(tinder);
console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));
console.log(tinder.hasOwnProperty('isLoggedIn')); 

const course = {
    courseName :"Js in hindi ",
    price : 999,
    instrictor : " Md Athar Ali "
}

const {instrictor:Teacher} = course

console.log(Teacher);













