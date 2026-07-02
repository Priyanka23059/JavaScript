class Animal {
  eat() {
    console.log("Animal is eating");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog is barking");
  }
}

const dog1 = new Dog();

dog1.eat();
dog1.bark();



//other example
class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`My name is ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  study() {
    console.log(`My age is ${this.age}`);
  }
}

const student1 = new Student("Priya",23);

student1.introduce();
student1.study();