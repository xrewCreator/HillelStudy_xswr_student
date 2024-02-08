// JSON       JavaScriptObjectNotation
// data.json
//

let user1 = {
  user: "Nick",
  age: 22,
  isSmart: true,
  pets: ["cat", "dog"],
};

let json_string = JSON.stringify(user1);
console.log(json_string);

let obj = JSON.parse(json_string);
console.log(obj);

// AJAX - async JS and XML (JSON)

// $(selector).load("url", "data", function (response, status, request) {
//     this; // dom element

// });

// $(".result").load("test.html", function () {});

// $(".result").load("test.html", function (response, status, request) {
//   if (status == "success") {
//     // alert("OK response is GOOD" + request.statusText);
//   } else if (status == "error") {
//     $(".result").html("<h2>Something went wrong!...</h2>");
//   }
// });

// GET AJAX запит
// $.get(
//   "https://jsonplaceholder.typicode.com/posts",
//   function (data, textStatus, jqXHR) {
//     console.log(data);
//   }
// );

// $.ajax({
//   type: "GET",
//   url: "https://jsonplaceholder.typicode.com/posts",
//   dataType: "json",
// }).done(function(data){
//     $.map(data, function (post, i) {
//         $(".result").append(`<h3>${post.title}</h3> <p>${post.body}</p>`);
//     });
// })

// --------------------------- POST REQUEST ------------------------

$("#postForm").submit(function (e) {
  e.preventDefault();
  let title = $("#title").val();
  let body = $("body").val();
  let url = $(this).attr("action");

  // post ajax
  $.post(url, {title: title_text, body: body_text}).done((data) => {
    console.log("Succesful POST to server!");
    console.log(data);
  });
});
