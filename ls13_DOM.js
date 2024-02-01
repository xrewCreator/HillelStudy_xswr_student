// ---------------------- Element selectors --------------------

let form_ = document.querySelector("#my-form");

console.log(form_);
console.dir(form_);

form_ = document.getElementById("my-form");

console.log(document.querySelectorAll("label"));

// перевірка NodeList

document.querySelectorAll("label").forEach((item) => {
  console.log(item);
  console.dir(item);
  item.style.color = "blue";
});

// HTML Collection
let items = document.getElementsByClassName("item");
console.dir(items);

let arrOfItems = Array.from(items);
console.dir(arrOfItems);

// Вибірка дочірніх елементів
let ul_list = document.querySelector(".items");
console.log(ul_list.children[0]);
console.dir(ul_list.children);

//
ul_list.children[0].textContent = "Це перший елемент"
ul_list.children[0].innerHTML = "<strong>First</strong>"

let btn = document.querySelector(".btn");
btn.addEventListener("click", (event)=>{
    event.preventDefault();
    let emailInput = document.querySelector("#email");
    let textInput = document.querySelector("#name");

    let new_li = document.createElement("li");
    new_li.className = "item";
    new_li.classList.add("error");
    new_li.textContent = `${textInput.value} ${emailInput.value}`

    ul_list.appendChild(new_li);
})
let img = document.querySelector("#img");
img.src = "./img/react.jpg"