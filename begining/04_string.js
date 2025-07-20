const name = "Athar"
let count = 90

console.log(name + count +" value");

console.log(`my name is ${name} and my count is ${count}`);

const gameName = new String("Athar");

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__)
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString  = gameName.slice(-4 , 4); // negative value
console.log(anotherString);

const newStringOne = "     Athar    "
console.log(newStringOne);
console.log(newStringOne.trim())

const koi = "Athar%24Ali"
console.log(koi.replace('%24','-'));
console.log(koi.includes('ath'));









