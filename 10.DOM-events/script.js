let btn = document.querySelector("#click");
let box = document.querySelector(".box");



////click
// btn.addEventListener("click",function(){
//     console.log("clicked");
// })
// box.addEventListener("click",function(){
//     console.log("clicked");
// })

// btn.addEventListener("contextmenu",function(){
//     console.log("contextmenu");
// })
// box.addEventListener("contextmenu",function(){
//     console.log("contextmenu");//don't work
// })

// btn.addEventListener("mousedown",function(){
//     console.log("mousedown");
// })
// box.addEventListener("mousedown",function(){
//     console.log("mousedown");
// })

// btn.addEventListener("mouseup",function(){
//     console.log("mouseup");
// })
// box.addEventListener("mouseup",function(){
//     console.log("mouseup");
// })

// btn.addEventListener("mouseenter",function(){
//     console.log("mouseenter");
// })
// box.addEventListener("mouseenter",function(){
//     console.log("mouseenter");
// })

// btn.addEventListener("mouseover",function(){
//     console.log("mouseover");
// })
// box.addEventListener("mouseover",function(){
//     console.log("mouseover");
// })

// btn.addEventListener("mousemove",function(){
//     console.log("mousemove");
// })
// box.addEventListener("mousemove",function(){
//     console.log("mousemove");
// })


// btn.addEventListener("mouseout",function(){
//     console.log("mouseout");
// })
// box.addEventListener("mouseout",function(){
//     console.log("mouseout");
// })



// window.addEventListener("keydown",function(){
//     console.log("keydown");
// })
// window.addEventListener("keydown",function(){
//     console.log("keydown");
// })

// window.addEventListener("keyup",function(){
//     console.log("keyup");
// })
// window.addEventListener("keyup",function(){
//     console.log("keyup");
// })


// btn.addEventListener("mousemove",function(){
//     console.log("mousemove");
// })
// box.addEventListener("mousemove",function(){
//     console.log("mousemove");
// })

















//mouse events

// btn.addEventListener("click", function () {
//   console.log("clicked");
// });

// btn.addEventListener("contextmenu", function () {
//   console.log("contextmenu event worked");
// });

// box.addEventListener("mousedown", function () {
//   console.log("mousedown event worked");
//   this.style.backgroundColor = "red";
// });
// box.addEventListener("mouseup", function () {
//   console.log("mouseup event worked");
//   this.style.backgroundColor = "teal";
// });

// box.addEventListener("mouseenter", function () {
//   console.log("mouseenter event worked");
// });
// box.addEventListener("mouseover", function () {
//   console.log("mouseover event worked");
// });

// box.addEventListener("mousemove", function () {
//   console.log("mousemove event worked");
// });

// box.addEventListener("mouseout", function () {
//   console.log("mouseout event worked");
// });

// keyboard events

// window.addEventListener("keydown", function (event) {
//   //   console.log(event);
//   console.log(event.code);
//   console.log(event.key);
// });

// let alpha = 0;
// window.addEventListener("keyup", function (e) {
//   if (alpha == 0) {
//     document.body.style.backgroundColor = "red";
//   }

//   if (alpha < 1) {
//     if (e.code === "KeyA") {
//       alpha += 0.1;
//     }
//   }
//   if (alpha > 0) {
//     if (e.code === "KeyB") {
//       alpha -= 0.1;
//     }
//   }

//   document.body.style.backgroundColor = `rgba(0,0,0, ${alpha})`;
// });