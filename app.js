let subCookie = document.querySelector("#submit");
let form = document.querySelector("#forma");
let cookies = document.cookie.split(";");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.querySelector("#name").value;
  let age = Number(document.querySelector("#age").value);
  let days = parseInt(document.querySelector("#day").value);
  let expire = new Date();
  expire.setTime(expire.getTime() + days * 24 * 60 * 60 * 1000);

  console.log(name, age, days);
  document.cookie = `name=${name};max-age=${days * 24 * 60 * 60};age=${age}`;

  //   for (let i = 0; i < cookies.length; i++) {
  //     let part = cookies[i].split("="),
  //     //   days = part[0],
  //     //   name = part[1];

  //     document.write("Name:", name, "<br></br>");
  //     document.write("Age:", age, "<br></br>");
  //     document.write("Expires:", days);
  //   }
  document.write("Name:", name, "<br></br>");
  document.write("Age:", age, "<br></br>");
  document.write("Expires:", days);
});
