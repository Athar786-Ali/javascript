

const clock =document.getElementById('clock')

function showTime(){
    let date = new Date()
    const time  =  date.toLocaleTimeString();
    clock.innerHTML = time;
}
setInterval(showTime , 1000)

showTime();
