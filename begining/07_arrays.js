// Arrays

const myArray = [3 , 5 , 6 , 7, true , "Athar"]
console.log(myArray[4])
console.log(myArray);
myArray.push(234)
console.log(myArray);
myArray.pop()
console.log(myArray);
myArray.unshift(2345)    // bekar hai time consuming  , sab ko ek se shift kr rha hai unshift -> add at front
console.log(myArray);
myArray.shift()    // shift -> remove at front
console.log(myArray);
console.log(myArray.includes(3));  // hai ya  nhi hai 
console.log(myArray.indexOf(7));




// deep copy and shallow copy

const myArray2 = new Array(2 , 5 , 7 , 9 , 10)
console.log(myArray2);

const newArray = myArray2.join() // string me change kr deta hai
console.log(myArray2);
console.log(newArray);
console.log(typeof newArray);

const array = [1,2,3,4,6,7,8,9]
console.log("orginal " , array);

const mny1 = array.slice(1,3)
console.log("slice" , array);
console.log("slice" , mny1);

const mny2 = array.splice(1,3)
console.log("splice" , array);
console.log("splice" , mny1);


const  marvel_heros = ["Ironaman" , "spider man" , "thor"]
const dc_heros = ["Batman" , "superman"  , "AuqaMan"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);

console.log(marvel_heros[3][1]);

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);

const all_new_heros =  [...marvel_heros , ...dc_heros]
console.log(all_new_heros);

const another_array = [2 ,3 ,5 ,7 ,8, [5 , 6, 7,] , [1 , 3 ,[4 ,6 , 20]]]
const new_another_array = another_array.flat(Infinity)
console.log(new_another_array);


console.log(Array.isArray("Athar"))
console.log(Array.from("Athar"))

console.log(Array.from({name : "Athar"})) // intersting

const score1 = 200
const score2 = 300
const score3 = 400

console.log(Array.of(score1 , score2 , score3));















