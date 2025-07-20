let score = "87"
let inNumber = Number(score)
console.log(typeof score);
console.log(typeof inNumber);


let score2 = "87abd"
let inNumber2 = Number(score2)
console.log(typeof score2);
console.log( inNumber2); // NaN


let score3 = null
let inNumber3 = Number(score3)
console.log(typeof score3);
console.log(typeof inNumber3);

let isLogedIn = 1;

let booleanIsLogedIn = Boolean(isLogedIn)
console.log(booleanIsLogedIn);

let isLogedIn1 = "";

let booleanIsLogedIn1 = Boolean(isLogedIn1)
console.log(booleanIsLogedIn1);

// 1 -> true 0->false
// "" -> false
// "Athar" -> true
console.log(4/3) // 1.33333
console.log(5%3)
console.log(4%7);

console.log("1" +2)  // string
console.log(1 +"2")    // string
console.log("1" +2 + 3)  // string
console.log(1 +2 + "3")  // string


console.log(+true);
console.log("2" >1);  //2>1

console.log(null > 0);
console.log(null >= 0);
console.log(null == 0);


console.log(undefined == 0);
//console.log(null == 0);

console.log("2" === 2);



const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const heros = ["shatiman" , "ironman" , "thor" , "halk"];

let myObj = {
    name :"Athar" , 

    age :22
}
console.log(heros);
console.log(myObj);

// function
 const myfunction = function(){
    console.log("Hello world");
    
 }


 let myYoutubename = "Athar"

 let anotherName = myYoutubename

 anotherName  = "Ali";

 console.log(myYoutubename)
 console.log(anotherName);
 
let myInfo1 = {
    name :"sanjay",
    age :22
}

let myInfo2 = myInfo1
myInfo2.name = "AdhiRaj"
console.log(myInfo1);
console.log(myInfo2);





