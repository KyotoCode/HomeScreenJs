
var hdate = document.getElementById('time');
var body = document.querySelector('body');
var bgM = document.getElementsByClassName('bgMorning');
var gmGn = document.getElementById("gmgn");

//vreme
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes();

var dateTime = date+' '+time;

console.log(dateTime)
hdate.textContent = dateTime;

//slideshow 
var nowDate = new Date();
var mgDate = new Date();
mgDate.setHours(7);

var ngDate = new Date();
ngDate.setHours(16);


if(mgDate < nowDate && nowDate < ngDate){
    body.classList.add("bgMorning");
    gmGn.textContent = "Good Morning";
}else{
    body.classList.add("bgNight");
    gmGn.textContent = "Good afternoon";
}
console.log(nowDate);
