
const buttons = document.querySelectorAll(".btn")

buttons.forEach( function(button) {
     button.addEventListener("click" , function(){
        const color = button.classList[1]
        document.body.style.backgroundColor = color;
     });
});