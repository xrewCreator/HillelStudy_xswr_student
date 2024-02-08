$(document).ready(function () {
  $("#add-item").keyup(function (e) {
    // console.log(e);
    let code = e.which;
    if (code === 13 && e.target.value.includes("gmail")) {
      $("ul#lists").append("<li>" + e.target.value + "</li>");
      e.target.value = "";
    }
  });
});

let users = ["Bob", "Mike", "Alice", "Danny"];

// $.each(collection, function (indexInArray, valueOfElement) { });

// Наповнення списку в DOM
$.each(users, function(i, val){
    console.log(val);
    $("#users").append(`<li>${val}</li>`)
})

// Дістати текст зі сторінки
let newArr = $("ul#lists li").toArray();
console.log(newArr)

$.each(newArr, function (i, val) { 
     console.log(val.innerHTML);
});