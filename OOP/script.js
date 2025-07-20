
const user1 = {
    username : "Md Athar Ali ",
    countLogin : 8,
    password : 34583475,

     getuserDetails : function(){
        console.log(`Username is ${this.username}`);
        console.log(this)
        
    }

}

console.log(user1.username);
console.log(user1.getuserDetails());

// constructor function 
function User(username , countLogin , password){
       this.username = username;
       this.countLogin = countLogin;
       this.password = password

       this.greet = function(){
         console.log(`welcome ${this.username} to the server`)
       }
}

const userOne = new User("Sanjay " , 9 , 124135)
console.log(userOne);
const userTwo = new User("Sanjay Kumar " , 10 , 45687)
console.log(userTwo); 
console.log(userTwo.greet()) 
console.log(userOne.constructor);


