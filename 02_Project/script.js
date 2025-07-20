

function calculateBMI(){
    const weight = document.getElementById("weight").value
    const height = document.getElementById("height").value

    if(weight === "" || height === ""){
        document.getElementById("result").innerText = "Please fill both fields"
        return;
    }

    const w = parseFloat(weight)
    const h = parseFloat(height)/100

    const bmi = w/(h*h)
    document.getElementById("result").innerText = "your BMI is :"+bmi.toFixed(2);

}