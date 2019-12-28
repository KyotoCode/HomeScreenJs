
let hdate = document.getElementById('time');
let body = document.querySelector('body');
let bgM = document.getElementsByClassName('bgMorning');
let gmGn = document.getElementById("gmgn");

//vreme
<<<<<<< HEAD
let tm = function (){
=======
function timeF(){
>>>>>>> 09a5909a43eb8abcc69a388b880d2d0346cb329d
let today = new Date();
let date = today.getFullYear() +'-'+ (today.getMonth()+1)+'-' + today.getDate();
let time = today.getHours() + ":" + today.getMinutes() + ":";
let sec = today.getSeconds();

if (sec < 10){
  sec = '0' + sec;
}
  
let dateTime = date +' '+ time + '' + sec;

hdate.textContent = dateTime;
}
<<<<<<< HEAD
setInterval(tm,1000);

//slideshow 
let slides = function(){
=======

timeF();
setInterval(timeF,1000);

//slideshow 
function slides(){
>>>>>>> 09a5909a43eb8abcc69a388b880d2d0346cb329d
const nowDate = new Date();
const mgDate = new Date();
mgDate.setHours(7);

const ngDate = new Date();
ngDate.setHours(16);


if(mgDate < nowDate && nowDate < ngDate){
    body.classList.add("bgMorning");
    gmGn.textContent = "Good Morning";
}else{
    body.classList.add("bgNight");
    gmGn.textContent = "Good afternoon";
}
console.log(nowDate);
}
<<<<<<< HEAD
slides();
console.log('connected');
=======
slides();
>>>>>>> 09a5909a43eb8abcc69a388b880d2d0346cb329d
