function makeBubble(){
var clutter = "";
for (var i = 1; i <= 68; i++) {
    var rn=Math.floor(Math.random()*10);
  clutter += ` <div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML=clutter;
}

var hit=0;
var timer=10;
var score=0;
function getScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
function getNewHit(){
     hit=Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent=hit;
 }
function runTimer(){
    var timerint= setInterval(() => {
        if(timer>0)
        timer--;
    else{
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML=`<h1 >Game Over</h1>`;
    }
       document.querySelector("#timerval").textContent=timer;
       
    }, 1000);
}
  document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum=Number(dets.target.textContent);
    if(clickednum==hit)
    getScore();
    getNewHit();
  })
 

runTimer();
makeBubble();
getNewHit();
getScore();
