class Kotik {
  constructor(name, age, poroda, gender, color, status, foto) {
    this.name = name;
    this.age = age;
    this.poroda = poroda;
    this.gender = gender;
    this.color = color;
    if (typeof status == "string") {
      status = false;
    }
    this.status = status;
    this.foto = foto;
  }

  catSleap = function () {
    if (this.status == true) {
      console.log(this.name, "Спит");
    } else {
      console.log(this.name, "пошол спать");
      this.status = true;
    }
  };
  iAmWakeUp = function () {
    if (this.status == true) {
      console.log(this.name, "Проснулся");
      this.status = false;
    } else {
      console.log(this.name, "Не спит щас");
    }
  };
  iAmEat = function () {
    if (this.status == true) {
      console.log(this.name, "Не могу спать щас");
    } else {
      console.log(this.name, "Кушает");
    }
  };
}
let Kotiki = [];
$(document).ready(function (e) {
  Kotiki = [
    new Kotik(
      "Канаані",
      4,
      "male",
      "Сірий",
      "Чапік",
      false,
      "Img/KotikMurkotik.jpg"
    ),
    new Kotik(
      "Канаані",
      2,
      "female",
      "Сірий",
      "Хані",
      true,
      "Img/kitten-sleeps.jpg"
    ),
    new Kotik(
      "Канаані",
      7,
      "male",
      "Сірий",
      "Чешик",
      false,
      "Img/KushatsXachu.jpg"
    ),
  ];
});

// let currentKotik = 0;
// const nextKotik = document.querySelector(".btn");
// const kotikDosie = document.querySelector("#kotikDosie");
// const kotikFoto = document.querySelector("#img");

// nextKotik.addEventListener("click", (e) => {
//   e.target.classList.add(".active_btn");
//   currentKotik = (currentKotik + 1) % Kotiki.length;
//   const curKotik = Kotiki[currentKotik];
//   kotikDosie.innerHTML = `<li>Возраст: ${curKotik.age}</li>
//     <li>Кличка: ${curKotik.name}</li>
//     <li>Стать: ${curKotik.gender}</li>
//     <li>Колір шерсті: ${curKotik.color}</li>
//     <li>Статус: ${curKotik.status}</li>`;
//   kotikFoto.innerHTML = `<img src="${curKotik.url_of_img}" alt="cat"`;
// });

$(".btns").click(function (e) {
  let cat_id = e.target.id;
  let btns = document.querySelectorAll(".btns input");
  btns.forEach((btn) => {
    btn.classList.remove("active_btn");
  });
  e.target.classList.add("active_btn");
  console.log("Cat number:", cat_id);
  cat_id = parseInt(e.target.id) - 1;
  chooseCat(Kotiki[cat_id]);
});

function chooseCat(cat) {
  $("#img").html(`<img src="${cat.foto}" alt="">`);
  $("#name").html("Name: " + cat.name);
  $("#gender").html("Gender: " + cat.gender);
  $("#color").html("Color: " + cat.color);
  $("#poroda").html("Poroda: " + cat.poroda);
  $("#age").html("Age: " + cat.age);
  $("#status").html("Status: " + (cat.status ? "Sleeping" : "No sleep"));
}
