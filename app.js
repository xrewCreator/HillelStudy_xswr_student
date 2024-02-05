let first = document.querySelector(".first");
let container = document.querySelector(".container");

let printTag = function (event) {
  console.log("CurrentTarget: \n", event.currentTarget);
  console.log("Target: \n", event.target);
  console.dir(event.target);
  event.stopPropagation();
  

  if (event.target.classList.contains("content") ||
  event.target.classList.contains("inner")) {
    if (event.target.classList.contains("content")) {
        event.target.classList.remove("blue"); //видаляє клас
    } else {
        event.target.classList.toggle("blue"); // видаляє клас якщо такий є і додає якщо такого немає у списку
      }
  }
        
      
    

};

container.addEventListener("click", printTag);
first.addEventListener("click", (e)=> {
    first.classList.toggle("blue");
    console.log("Propagated")
});

// addEventListener(event, handler, [options]);

// { once: true } false по замовчюванню виконує один раз подію
// { capture: false} true вмикає-вимикає фазу занурення
// { passive: false} true - вмикає можливість блокування вспливання
