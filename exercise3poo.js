const Person = require("./person.js");
const Car = require("./car.js");
const COLOR_GREEN = '\x1b[32m%s\x1b[0m';

const person1 = new Person();
const person2 = new Person();
const car1 = new Car();
const car2 = new Car();

person1.setName("John");
person1.setAge(30);

person2.setName("Mary");
person2.setAge(25);

car1.setMake("Toyota");
car1.setModel("Corolla");

car2.setMake("Ford");
car2.setModel("Mustang");

console.log(COLOR_GREEN, "Before the transaction:");
console.log("Person1:");
console.log("Name:", person1.getName());
console.log("Age:", person1.getAge());

console.log("Person2:");
console.log("Name:", person2.getName());
console.log("Age:", person2.getAge());

console.log("Car1:");
console.log("Make:", car1.getMake());
console.log("Model:", car1.getModel());

console.log("Car2:");
console.log("Make:", car2.getMake());
console.log("Model:", car2.getModel());

console.log(COLOR_GREEN, "After the transaction:");
person1.interactsWithCar(car1);
console.log("Person1:");
console.log("Name:", person1.getName());
console.log("Age:", person1.getAge());
console.log("Car1:");
console.log("Make:", car1.getMake());
console.log("Model:", car1.getModel());







