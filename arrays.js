// Оголошення масивів
let animals = new Array("dog", "eagle", "monkey", "fish"); // через конструктор
let arr = [1, 2, "Name1", "Name2", true, [], []]; // через літерал

console.log(arr);
arr[2] = "Mike";
console.log(arr[2]);

// особливість
// arr[101] = "new element";
// console.log(arr);

// console.log(arr.length);

// перевірка на масив
console.log("Перевірка", Array.isArray());

console.log(arr.toString());

// -------------------- Reduce ---------------------
// arr.reduce(function(acumulator, item, idnex, array), initialAccumulator)

let nums = [9, 6, 4, 2, 7, 10];

let result = 0;

// 1. acc = 1, x = 9
// 2. acc = 9, x = 6
// 3. acc = 54, x = 4
// 4. acc = 216, x = 2
// 5. acc = 432, x = 7
//Щоб перемножити елементи
result = nums.reduce((acc, x, index) => {
  if (index == 4) {
    return acc;
  } // виключили значення 7 з індексом 4
  return acc * x;
}, 1);

// ----------------------------------- MAP --------------------------------//--
// arr.map(function(item, index, array)) - повертає новий масив

let resultArray = animals.map((one_animal) => one_animal.length);

console.log("Довжина імен тваринок: ", resultArray);

// ------------------------------ Filter -------------------------------
// arr.filter(function(item, index, array, thisArg))

console.log(
  "Фільтр менше 5: ",
  resultArray.filter((num) => num <= 4)
);

console.log(
  "Фільтер розлого:",
  resultArray.filter(function (num) {
    if (num <= 4) {
      return true;
    } else {
      return false;
    }
  })
);

// Наповнення та вилучення елементів

let addArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(addArray);
addArray.push("End item"); // додаємо в кінець
console.log(addArray);

addArray.unshift("Start item"); //додаємо на початок
console.log(addArray);

console.log(addArray.pop()); // вилучаємо з кінця
console.log(addArray);

console.log(addArray.shift()); // вилучаємо з початку
console.log(addArray);

console.log(addArray.reverse());

delete addArray[7];
console.log(addArray);

// Позбавитись вкладених масивів
let arr3 = [1, 3, 4, ["a", "b", "c"]];
console.log(arr3.flat(Infinity));

// SPLIT
let s = "Lutsk, Nizhun, Zhutomyr, Dnipro";
let arr4 = s.split(", ");
console.log(arr4);

// Перебір масиву циклом

for (item of arr4) {
  console.log(item);
  document.write(`<h2>${item}</h2>`);
}

// continue break
for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] == "Zhutomyr") {
    continue;
  }
  console.log(arr4[i]);
}
