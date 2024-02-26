const getData = (url) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    let data = {};

    request.open("GET", url); // async
    request.send(); // async

    request.addEventListener("readystatechange", () => {
      // Запит виканоно успішно
      if (request.readyState === 4 && request.status === 200) {
        // console.log("DONE", request);
        data = JSON.parse(request.responseText);
        resolve(data);
      }
      // Щось пішло не так ...
      else if (request.readyState === 4) {
        // console.log("Error with status code", request.status);
        reject("Error with status code", request.status);
      }
    });
  });
};

let url = "https://jsonplaceholder.typicode.com/users/1";
let toDoUrl = "https://jsonplaceholder.typicode.com/todos/1";

// Method .then

// function dorequest() {
//   getData(url).then(
//     (data) => {
//       console.log("Success! Promise resolved!");
//       console.log(data);
//     },
//     error => {
//       console.log(error);
//       dorequest();
//     }
//   );
// }
// dorequest();

// Method .catch

// getData(url)
//   .then((data) => {
//     console.log("Success! Promise resolved!");
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Chaining промісів
getData(url)
  .then((data) => {
    console.log("Success! Promise resolved!");
    console.log(data);
    return getData(toDoUrl);
  })
  .then((task) => {
    console.log(task);
    return JSON.stringify(task);
  })
  .then((todo_text) => {
    console.log("Users todo list: ", todo_text);
  })
  .catch((err) => {
    console.log(err);
  });
