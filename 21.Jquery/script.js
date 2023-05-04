$("#show").click(function () {
  $("#text").show();
});
$("#hide").click(function () {
  $("#text").hide();
});
$("#toggle").click(function () {
  $("#text").toggle();
});
// $("#change").click(function(){
//     $("#title").css("color","red")
// })
let colors = ["green", "grey", "yellow", "brown", "blue", "orange", "pink"];
$("#change").click(function () {
  $("#title").css("color", colors[Math.floor(Math.random() * colors.length)]);
});
$("#fadein").click(function () {
  $("#text2").fadeIn("slow");
  $("#text2").css("color", "red");
});
$("#fadeout").click(function () {
  $("#text2").fadeOut(5000);
  $("#text2").css("color", "green");
});
$("#fadetoggle").click(function () {
  $("#text2").fadeToggle();
});
$("#fadeto").click(function () {
  $("#text2").fadeTo("slow", 0.2);
});

$("#slideup").click(function () {
  $("#text3").slideUp();
  $("#text3").css({ color: "red" });
});
$("#slidedown").click(function () {
  $("#text3").slideDown();
  $("#text3").css("color", "green");
});
$("#slidetoggle").click(function () {
  $("#text3").slideToggle();
  $("#text3").css("color", "violet");
});
$("#stop").click(function () {
  $("#text2").stop()
});
$("#animation").click(function () {
  $("#box").animate({ left: "300px" });
  $("#box").animate({ top: "0px" });
});
// $("#animation").click(function () {
//   $("#box").animate({ top: "0px" });
// });
// $("#animation").click(function () {
//   $("#box").animate({ left: "300px",bottom:"100px",opacity: "0.5" ,width:"200px"} );
// //   $("#box").animate({ bottom: "10px" });
// });
// $("#animation").click(function () {
//   $("#box").animate({ left: "300px", bottom: "0px",opacity: "0.9",backgroundColor: "red" });
// });
// $("#html").click(function () {
//   $("#title").text("Hello jQuery")
// });
$("#html").click(function () {
  $("#title").html("Hello jQuery")
});
// $("#html").click(function () {
//   $("#title").val("Hello jQuery")     ////this don't work,beacause this is not input
// });
