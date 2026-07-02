class Animal {
  sound() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Dog barks");
  }
}

const dog = new Dog();

dog.sound();


//other example
class Employee {
  constructor(name) {
    this.name = name;
  }

  display() {
    console.log(`Employee Name: ${this.name}`);
  }
}

class Manager extends Employee {
  constructor(name, department) {
    super(name);
    this.department = department;
  }

  display() {
    console.log(`Manager Name: ${this.name}`);
    console.log(`Department: ${this.department}`);
  }
}

const manager1 = new Manager("Priya", "IT");

manager1.display();

