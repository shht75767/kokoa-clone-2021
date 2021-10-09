const span = document.querySelector(".status-bar__column:nth-child(2) span")


function clock (){
const date = new Date();
const hours = String((date.getHours())).padStart(2,"0");
const minutes = String((date.getMinutes())).padStart(2,"0");
span.innerText = `${hours}:${minutes}`
}
clock()
setInterval(clock,1000)