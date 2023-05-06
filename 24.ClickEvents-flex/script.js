let sectoin = document.querySelector(".sec1");
let card = document.querySelector(".card");
let startBtn = document.querySelector("#start");
let centerBtn = document.querySelector("#center");
let endBtn = document.querySelector("#end");
let stretchBtn = document.querySelector("#stretch");
let rowBtn = document.querySelector("#row");
let columnBtn = document.querySelector("#column");
let box = document.querySelector(".box");

rowBtn.addEventListener("click",function(){
    card.style.flexDirection = "row";
startBtn.addEventListener("click", function () {
  card.style.alignItems = "start";
});
centerBtn.addEventListener("click", function () {
  card.style.alignItems = "center";
});
endBtn.addEventListener("click", function () {
  card.style.alignItems = "flex-end";
});
stretchBtn.addEventListener("click", function () {
  card.style.alignItems = "stretch";
});
})

columnBtn.addEventListener("click",function(){
    card.style.flexDirection = "column";
startBtn.addEventListener("click", function () {
  card.style.alignItems = "start";
});
centerBtn.addEventListener("click", function () {
  card.style.alignItems = "center";
});
endBtn.addEventListener("click", function () {
  card.style.alignItems = "flex-end";
});
stretchBtn.addEventListener("click", function () {
  card.style.alignItems = "stretch";
});
})
