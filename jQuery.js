// $- скорочене посилання на всю бібліотеку
// $() - створює jQuery object

// Чекаємо завантаження DOM
$(document).ready(function () {
  console.log("Document Ready");
});

// Скорочений запис Чекаємо завантаження DOM
$(function () {
  console.log("Document Ready");
});

// Зміна втрибутів тегів
// Getter
console.log($("h1").css("color"));

// Setter
$("h1").css("color", "blue");

$("a").attr("targer", "_black");

$("span").css({
  color: "red",
  background: "orange",
});

console.log("jQuery h1 object: ", $("h1"));

console.log(document.querySelector("h1"));

//Selectors

$(document).ready(function () {
  $("ul#list li:first").css("color", "#4d4");
  $("ul#list li:last").css("color", "orange");
  $("ul#list li:even").css("background", "yellow");
  $("ul#list li:odd").css("background", "red");
  $("ul#list li:nth-child(3)").css("color", "green");
});

//  Додавати нові елементи
$(".newtext").html("<h2>Generated POST!</h2>");
$(".newtext").text("Generated POST!TEST");

// append prepend
$("ul").append("<li>Generated lst</li>");
$("ul").prepend("<li>Generated lst</li>");

// before after
$("ul").before("<h2>List of toDo:</h2>");
$("ul").after("<h2>The End of toDos:</h2>");

// Ф-ї для маніпуляції з classList
par2.addClass("par2-newcolor");
par2.removeClass("par2-newcolor");

// ---------------------- Event in jQuery ------------------------

let par2 = $("#par2");
$(":submit").click(function (e) {
  e.preventDefault();
  console.log("Submit");
  par2.toggleClass("par2-newcolor");
});

$("body").on('mousemove', function(e) {

  $("header").html(e.clientX);
});
