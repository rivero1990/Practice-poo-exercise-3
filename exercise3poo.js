const Person = require("./person");
const Car = require("./car");


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

console.log("Person 1:");
console.log("Name:", person1.getName());
console.log("Age:", person1.getAge());

console.log("Person 2:");
console.log("Name:", person2.getName());
console.log("Age:", person2.getAge());

console.log("Car 1:");
console.log("Make:", car1.getMake());
console.log("Model:", car1.getModel());

console.log("Car 2:");
console.log("Make:", car2.getMake());
console.log("Model:", car2.getModel());


/* Interaction and alteration of object states */
console.log(person1.getName() + " buys a " + car2.getMake() + " " + car2.getModel());
console.log("Car 2:");
car2.setMake("Sold"); 
car2.setModel("Sold");
console.log("Make:", car2.getMake());
console.log("Model:", car2.getModel());

 
console.log(person1.getName() + " ages 5 years");
person1.setAge(person1.getAge() + 5);
console.log("Person 1:");
console.log("Name:", person1.getName());
console.log("Age:", person1.getAge());


