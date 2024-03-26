$(document).ready(function () {
  $(".card .select").click(function () {
    $(".card").css("border", "2px solid #dddddd");
    $(".select").css("background", "none");
    $(".select").css("color", "#F53838");
    $(".select").css("box-shadow", "none");
    $(this).closest(".card").css("border", "2px solid #F53838");
    $(this).closest(".select").css("background", "#F53838");
    $(this).closest(".select").css("color", "white");
    $(this).closest(".select").css("box-shadow", "0px 15px 15px #F5383859");
  });
});

const sliders = document.querySelectorAll(".slide");
const slidesContent = document.querySelectorAll(".slider-content");

// Eлементи управління
const points_div = document.querySelector(".points");
let points = document.querySelectorAll(".point");
let arrowLeft = document.querySelector("#arrow-left");
let arrowRight = document.querySelector("#arrow-right");
//-------------------------------------------------

// order Array [, slide2, slide3...slide1]
let orderArray = Array.from(sliders);
let last = orderArray.length - 1;
let current = 0;

initSlider();

function highlightCurrent() {
  slidesContent[current].classList.add("active-slide");
  points[current].classList.add("active-point");
}

function reset() {
  ///Cкидає активні класи
  for (let i = 0; i < last + 1; i++) {
    slidesContent[i].classList.remove("active-slide");
    points[i].classList.remove("active-point");
  }
}

function initSlider() {
  // Початкові налаштування слайдера
  reset();
  highlightCurrent();
}

// Зміна порядку слайдів на сайті
function redoOrder() {
  for (let i = 0; i <= last; i++) {
    // order Array [ slide2, slide3...slide1]
    sliders[i].style.order = orderArray.indexOf(sliders[i]);
  }
}

// Рухаємо вправо та вліво
function goRight() {
  reset();
  //  [slide1, slide2, slide3]
  let prev = orderArray.shift(); //[ slide2, slide3] і повертає slide1
  orderArray.push(prev); //[ slide2, slide3, slide1]
  redoOrder();
  if (current == last) {
    current = 0;
    highlightCurrent();
    return;
  }
  current++;
  highlightCurrent();
}

function goLeft() {
  reset();
  //  [slide1, slide2, slide3]
  let prev = orderArray.pop(); //[slide,1 slide2, ] і повертає slide3
  orderArray.unshift(prev); //[slide3, slide1,  slide2, ]
  redoOrder();
  if (current == 0) {
    current = last;
    highlightCurrent();
    return;
  }
  current--;
  highlightCurrent();
}

// -----------------------       EVENTS ----------------------------
arrowLeft.addEventListener("click", goLeft);
arrowRight.addEventListener("click", goRight);

// ------------------------   Markers LOGIC
points_div.addEventListener("click", pointSlide);

function pointSlide(e) {
  let index = Array.from(points).indexOf(e.target);

  if (index == -1) return;
  reset();

  // [slide1, slide2, slide3, slide4]
  let tmp_slides = Array.from(sliders);
  if (index !== 0) {
    let tail = tmp_slides.splice(0, index); // вирізаємо [slide1, slide2]
    orderArray = [...tmp_slides, ...tail]; //[ slide3, slide4, slide1, slide2]
  } else {
    orderArray = tmp_slides;
  }
  current = index;
  highlightCurrent();
  redoOrder();
}

const menu = document.getElementById("nav");
const bgMenu = document.getElementById("burger-menu");

bgMenu.addEventListener("click", function () {
  if (menu.style.display === "none" || menu.style.display === " ") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});


