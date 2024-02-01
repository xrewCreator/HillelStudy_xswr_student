function hello() {
  console.log("Це this зараз:", this);
}

window.hello;
console.dir(hello);

const employee1 = {
  // Властивості обєкта
  name_: "Oleg",
  age: 29,
  job: "Software Dev",
  salary: 20000,

  // методи обєкта
  sayName: function () {
    console.log(`Мене звати ${this.name_}`);
  },
  changeJob: function (newJob, salary) {
    this.job = newJob;
    this.salary = salary;
  },
  sayHello: hello,
};

window.hello;
console.dir(hello);

employee1.sayHello();
console.log(employee1.toString());

const employee2 = {
  // Властивості обєкта
  name_: "Oksana",
  age: 23,
  job: "Designer",
  salary: 20000,

  // методи обєкта
  changeJob: function (newJob, salary) {
    this.job = newJob;
    this.salary = salary;
  },
  sayHello: hello,
};

// employee2.sayHello();

// Метод  func_name.bind(thisArg, arg1, arg2, ...)
// з переданим контекстом

hello.bind(employee2)();

// Method call(thisArg, arg1, arg2, ...) - виклик ф-ї з заданим контекстом
employee1.changeJob.call(employee2, "Web Dev", 19000);
console.log(employee2);
// Method apply(thisArg, [масив аргументів]) - виклик ф-ї з заданим контекстом
employee1.changeJob.apply(employee2, ["UIX Designer", 21000])
