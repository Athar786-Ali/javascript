
const btn1 = document.querySelector("#btn1")

// btn1.onclick = () => {
//     alert("btn1 was clicked");
// }

// best practice
btn1.addEventListener("click" , () => {
     alert("btn1 was clciked-handler1");
})
btn1.addEventListener("click" , () => {
     alert("btn1 was clciked- handler-2");
     
})
const handler3 = () => {
     alert("btn1 was clciked- handler-3");
     
};
btn1.addEventListener("click" , () => {
     alert("btn1 was clciked- handler-4");
     
})
btn1.removeEventListener("click" , handler3);
let box = document.querySelector("div")
box.onmouseover = () => {
     alert("Mouse is hoverd")
}

