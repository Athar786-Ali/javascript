// Arrow and This keyword

// const user = {
//     userName : "Md Athar Ali",
//     Location :"Bhopal",

//     welcomeMessage: function(){
//         console.log(` Hey ${this.userName} ,  Welcome to my Website` ); 
//        // console.log(this);
        
//     } 
// }

// user.welcomeMessage();
// user.userName = "Sanjay"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     console.log(this);
    
// }
// chai()


// const chai = function(){
//     let username  = "Rahnuma"
//     console.log(this.username);
    
// }
// chai();



// const chai = () => {
//     let username  = "Rahnuma"
//     console.log(this.username);
    
// }
// chai();

// const chai = () => {
//     let username  = "Rahnuma"
//     console.log(this);
    
// }
// chai();

// const add = (num1 , num2) => {
//     return num1+num2;
// }
//const add = (num1 , num2) =>    num1+num2;
// const add = (num1 , num2) =>   ( num1+num2);  // parenthessis->best parctice



const add = (num1 , num2) =>   ({username :"Athar"});
console.log(add(6 , 8)); 



   


