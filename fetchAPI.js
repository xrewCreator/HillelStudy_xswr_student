let url = "https://jsonplaceholder.typicode.com/users/1";
let toDoUrl = "https://jsonplaceholder.typicode.com/todos/1";
let postUrl = "https://jsonplaceholder.typicode.com/posts";
// fetch певертатиме обєкт Promise

// GET запити за допомогою fetch
fetch(url)
  .then((response) => {
    console.log(response);
    // if (!response.ok) {
    //   console.log("Error occured", response.status);
    // }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Error occured! -", err);
  });

// POST request
fetch(postUrl, {
  method: "POST",
  body: { userId: 1, id: 199, title: "Mypost", body: "Some text" },
})
  .then((response) => {
    console.log("POST response");
    return response.text();
  })
  .then((text) => {
    console.log(text);
  });

// async await синтаксис
// await завжди повертає проміс
async function getUsers() {
  const response = await fetch(url);
  const data = await response.json();
  return data 
}

getUsers().then(data => console.log("Await Asinc Data Fetch", data));
