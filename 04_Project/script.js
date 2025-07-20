
const randomNumber = parseInt(Math.random()*100)+1;

function checkGuess(){
    const userInput = document.getElementById("userGuess").value
    const message  = document.getElementById("message");

    if(userInput == ""){
        message.innerText = "Please Enter The Number"
        return ;
    }

    const guess = parseInt(userInput)

    if(guess < 1 || guess > 100){
        message.innerText = "Number Must be between 1 and 100";
    }
    else if(guess < randomNumber){
        message.innerText = "Too Low ! Try Again"
    }
    else if(guess > randomNumber){
        message.innerText = "Too High! Try Again"
    }
    else{
        message.innerText = `correct the number ! Good Job The Number Was ${randomNumber}`;
    }
}