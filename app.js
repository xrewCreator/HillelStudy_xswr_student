let url = "https://jsonplaceholder.typicode.com/users/1";
let toDoUrl = "https://jsonplaceholder.typicode.com/todos/1";
let postUrl = "https://jsonplaceholder.typicode.com/posts";
// fetch певертатиме обєкт Promise

// 1. Менше викликів then

// GET запити за допомогою fetch
// fetch(url)
//   .then((response) => {
//     console.log("FETCH rsponse", response);
//     if (!response.ok) {
//       console.log("Error occured", response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Error occured! -", err);
//   });

// Axios
// axios.get(url).then((response) => {
//   console.log("AXIOS response", response);
//   console.log(response.data);
// });

// 2. Auto stringify

// POST request
// fetch(postUrl, {
//   method: "POST",
//   body: JSON.stringify({
//     userId: 1,
//     id: 199,
//     title: "Mypost",
//     body: "Some text",
//   }),
// })
//   .then((response) => {
//     console.log("POST response");
//     return response.text();
//   })
//   .then((text) => {
//     console.log(text);
//   });

// axios.post(postUrl, {
//   data: {
//     userId: 1,
//     id: 199,
//     title: "Mypost",
//     body: "Some text",
//   }
// }).then(response => console.log(response));

// 3. Error handling

// fetch(url)
//   .then((response) => {
//     console.log("FETCH rsponse", response);
//     if (!response.ok) {
//       console.log("Error occured", response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Error occured! -", err);
//   });

//   axios.get(url).then(
//     response => {
//       console.log("AXIOS RESPONSE", response);
//       console.log(response.data);
//     }).catch(err => {
//       console.log(err.message);
//     })


//4 Interceptors
// axios.interceptors.request.use(config =>{
//   console.log("Request was send");
//   return config;
// })

// axios.get(url).then(
//   response => {
//     console.log("AXIOS RESPONSE", response);
//     console.log(response.data);
//   }).catch(err => {
//     console.log(err.message);
//   })

// 5. Timeout in Axios

// axios.get(url, {
//   timeout: 5000,
// }).then(
//   response => {
//     console.log("AXIOS RESPONSE", response);
//     console.log(response.data);
//   }).catch(err => {
//     console.log("Timeout exceeded", err.message);
//   })