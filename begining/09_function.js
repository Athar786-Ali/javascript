

// fuction

function saymyName(){
    console.log("A");
    console.log("T");
    console.log("H");
    console.log("A");
    console.log("R");
    
}
     //saymyName->refrence
     // saymyName() -> execution

   saymyName()  

// function addTwoNumber(num1 , num2){
//     console.log(num1+num2);
    
// } 
// addTwoNumber(5 , 7)

function addTwoNumber(num1 , num2){
   
    let result = num1+num2
    return result;
    console.log("Md Athar Ali");// return ke baad koi bhi cheej exicutes nhi hoti hai 

    
} 

const result = addTwoNumber(6 , 9)
console.log("Result :" , result);   

function loginUserMessage(username ="Sanjay "){
    if(username === undefined){
        console.log("please Enter username");
        return
        
    }
    return `${username} Just Login `;

}
console.log(loginUserMessage("Athar")) ;
console.log(loginUserMessage());  // it gives undifined  

function calculatePrice(  ...num){ // ...num -> rest operator
    return num
}
console.log(calculatePrice(200, 500 , 400));

const user = {
    Name: " Sanjay Kumar",
    Age :22

}
function handleObject(anyobject){
    console.log(`User Name Is ${anyobject.Name} and My Age is ${anyobject.Age} ` );
}
// handleObject(user)
handleObject({
    Name:"athar",
    Age : 90
})

const newArray = [200 , 500 , 600 , 900]

function returnArray(getArray){
    return getArray[3]
}
console.log(returnArray(newArray));
console.log(returnArray([300, 500 , 100 , 7000])); 



