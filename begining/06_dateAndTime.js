// date and time
const mydate = new Date();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toDateString());
// console.log(typeof mydate);   object

const myCreatedDate = new Date(2025 , 5 , 13);
console.log(myCreatedDate.toLocaleDateString());

const myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000)); // in second from 1 january 1970

let newdate = new Date()
console.log(newdate);
console.log(newdate.getTime());
console.log(newdate.getMonth()+1);







