let startBtn=document.querySelector(".start")
let rangeBtn=document.querySelector(".range")
let stopBtn=document.querySelector(".stop")
let incBtn=document.querySelector(".inc")
let decBtn=document.querySelector(".dec")
let resetBtn=document.querySelector(".reset")
let numBtn=document.querySelector(".num")
let stepBtn=document.querySelector(".step")

let count=0;
let interval;
startBtn.addEventListener("click",function(){
    interval=setInterval(() => {
        count++
        rangeBtn.innerText=count;
        
    }, 1000);

})
stopBtn.addEventListener("click",function(){
    clearInterval(interval)
    

})
 incBtn.addEventListener("click",function(){
    
    rangeBtn.innerText=count+=2;

 })
  decBtn.addEventListener("click",function(){
    --count;
    rangeBtn.innerText=count-=1;

})
resetBtn.addEventListener("click",function(){
    count=0
    rangeBtn.innerText=count;

})
let number=0
stepBtn.addEventListener("click",function(){
    numBtn.innerText=number+numBtn.stepUp(-3);

})
