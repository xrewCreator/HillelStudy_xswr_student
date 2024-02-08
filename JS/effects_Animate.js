$(document).ready(function () {
  $("#btn-f-out").click(function () {
    $(".box").fadeOut(1000, "swing", function () {
      $("#btn-f-out").text("animeDone");
    });
  });

  $("#btn-f-in").click(function () {
    $(".box").fadeIn(1000, "swing", function () {
      $("#btn-f-out").text("Fade Out");
    });
  });

  $("#btn-f-toggle").click(function () {
    $(".box").fadeToggle(500, "linear", function (e) {});
  });

  $("#btn-s-down").click(function () {
    $(".box").slideDown(300, "linear");
  });

  $("#btn-s-up").click(function () {
    $(".box").slideUp(300, "linear");
  });

  $("#btn-s-toggle").click(function () {
    $(".box").slideToggle(3000, "linear");
  });

  $("#btn-s-stop").click(function () {
    $(".box").stop();
  });

  // Animate function
  $("#btn-move-left").click(function (e) {
    $(".animate").animate({
    //   left: "500px",
    //   height: 200,
      width: 50,
    //   opacity: 0.4,
    });
  });

  $("#btn-move-right").click(function (e) {
    $(".animated").animate({
    //   right: "200px",
    //   height: 100,
      width: 100,
    //   opacity: 0.4,
    },);
  });

  $("#btn-move-around").click(function (e) {
    $(".animated")
      .animate({
        left: 200,
      })
      .animate({
        top: 100,
      })
      .animate({
        left: 0,
      })
      .animate({
        top: 0,
      });
  });
});
