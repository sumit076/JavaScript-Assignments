let hrs =document.getElementById("hours");
let mins =document.getElementById("minutes");
let secs =document.getElementById("seconds");
let pr_btn =document.getElementById("pause");
let countdown;
var time;

for(i=0;i<24;i++){
 hrs.innerHTML+=`<option value="${i}">${(i>9) ? i : '0'+i}</option>`;
}

for(i=0;i<60;i++){
 mins.innerHTML+=`<option value="${i}">${(i>9) ? i : '0'+i}</option>`;
 secs.innerHTML+=`<option value="${i}">${(i>9) ? i : '0'+i}</option>`;
}

function display_timer(){
document.getElementById("cont_timer").style.display="inline-block";
document.getElementById("cont_stopwatch").style.display="none";
}

function display_stopwatch(){
document.getElementById("cont_stopwatch").style.display="inline-block";
document.getElementById("cont_timer").style.display="none";
}

function timer_cd(){
document.getElementById("start").style.display=`none`;
document.getElementById("restart").style.display=`flex`;
pr_btn.style.display=`flex`;
time=( (hrs.value*60*60) + (mins.value*60) + +secs.value );
countdown_time();
}

function countdown_time(){
countdown= setInterval(()=>{
time-=1;
if(time == -1){
  clearInterval(countdown);
  reset();
  return;
}
let seconds= time % 60;
let minutes= Math.floor(time/60);
let hours = Math.floor(minutes/60);
minutes %= 60;
hours %=60;
document.getElementById("timer").innerHTML=`${(hours>9)?hours:'0'+hours}:${(minutes>9) ? minutes:'0'+minutes}<span style="color: red">:${(seconds>9) ? seconds:'0'+seconds}</span>`
document.getElementById("timer_set").style.display=`none`;
document.getElementById("timer").style.display=`flex`;
},1000,time)
}

function reset(){
clearInterval(countdown);
pr_btn.className= "";
pr_btn.innerText="Pause";
document.getElementById("timer_set").style.display=`flex`;
document.getElementById("start").style.display=`inherit`;
document.getElementById("restart").style.display=`none`;
pr_btn.style.display=`none`;
document.getElementById("timer").style.display=`none`;
}

function pause(){
  if(pr_btn.className=="changed"){
    pr_btn.className= "";
    pr_btn.innerText="Pause";
    countdown_time();   
  }
  else{
    pr_btn.className="changed";
    pr_btn.innerText="Resume";
    clearInterval(countdown);
  }
}