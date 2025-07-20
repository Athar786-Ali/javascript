

const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter( (num) => num > 5);
// console.log(newNums);

// const newNums = myNums.filter( (num) => {
//     return num > 7
// });

const arr = [];
myNums.forEach((num) => {
    if(num >4){
        arr.push(num);
    }
})
console.log(arr);

const people = [
  { name: "Athar", age: 22 },
  { name: "Ali", age: 17 },
  { name: "Sanjay", age: 19 },
];

const adults = people.filter((person) => person.age > 18);

console.log(adults);
// Output: [ { name: 'Athar', age: 22 }, { name: 'Sanjay', age: 19 } ]


 const number  = [1 , 1  , 0 , 4 ,5 ,6, 7, 10];

const result = number.filter((num) => {
  return num > 2;
});



