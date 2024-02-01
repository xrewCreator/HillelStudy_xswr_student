// ------------ Construktor Function ---------

function Person(firstName, lastName, age = 1, birthDate = "2000-1-1") {
  // властивості
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.birthDate = new Date(birthDate);

  // методи
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
  this.addYear = function () {
    this.age++;
  };
}

// const user1 = new Person("Louis", "Genev", 19);
// const user2 = new Person("Rock", "Jonsan", 45);

// console.log(user1.firstName);
// console.log(typeof user1);

// const arr = new Array(1, 2, 3, 4);

// console.log(user1.getFullName());
// console.log(user1.age);
// user1.addYear();
// console.log(user1.age);
// console.log(user2);

// --------------------- Prototype -----------------------

Person.prototype.sayHello = function () {
  console.log(`Hi my name is ${this.firstName}`);
};

Object.prototype.sayObj = function () {
  console.log("I'm object in general");
};

const user2 = new Person("Rock", "Jonsan", 45);
console.dir(user2);
user2.sayHello();

window.sayObj();
user2.sayObj();

// Class syntax
class Employee {
  // Конструктор запускається при створенні об'єкта
  constructor(firstName, lastName, salary, birthDate = "2000-1-1") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
    this.birthDate = new Date(birthDate);
  }

  // Методи
  getYear() {
    return this.birthDate.getFullYear();
  }

  static CEO = "John White"
  static writeToConsole () {
    console.log("This is Employee class")
  }
}


// instance - екземпляр класу
// те що ми створюэмо за шаблоном визначеним у ласі

let emp1 = new Employee("Lore", "Vashington", 2000, '2009-1-1');
console.dir(emp1);
console.log(emp1.getYear());
Employee.writeToConsole();
console.log(Employee.CEO)