


$("#btn1").click(function (e) {
  e.preventDefault();
  $("#box")
    .animate({
      left: 300,
    }, 1500)
    .animate({
      top: 150,
    }, 1500)
    .animate({
      left: 0,
    }, 1500)
    .animate({
      top: 0,
    }, 1500);
});

$("#btn2").click(function () {
  $("#box")
    .animate({
      left: 200,
      top: 200,
    }, 1500)
    .animate({
      left: -200,
    }, 1500)
    .animate({
      top: 0,
      left: 0,
    }, 1500);
});


const box = false;
let move = false;
$("#btn3").on("click", function () {
  $("#box").css("opacity", "0");
  if (!box) {
    $("#box").animate(
      {
        width: 400,
        height: 400,
        opacity: 1,
      },
      3000
    );
    box = true;
  } else {
    $("#box").animate(
      {
        width: 100,
        height: 100,
        opacity: 0,
      },
      3000
    );
    box = false;
  }
});


