//CLASS WITH CONSTRUCTOR WE ARE USING CONSTRUCTOR TO INITIALIZE THE PROPERTIES OF THE CLASS

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  display() {
    console.log(this.name);
    console.log(this.salary);
  }
}

const emp1 = new Employee("Priya", 50000);

emp1.display();


class BankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  showBalance() {
    console.log(`Balance: ${this.balance}`);
  }
}

const account = new BankAccount("Priya", 10000);

account.deposit(2000);

account.showBalance();



class Products {
  constructor(name, price, rating) {
    this.name = name;
    this.price = price;
    this.rating = rating;
  }

  displayProduct() {
    console.log(`${this.name} - ₹${this.price} (Rating: ${this.rating})`);
  }
}

const product1 = new Products("Laptop", 50000, 4.5);

product1.displayProduct();


//CLASS WITHOUT CONSTRUCTOR(WE ARE  NOT USING THIS CONSTRUCTOR WHEN WE ARE NOT INITIALIZING THE PROPERTIES OF THE CLASS)

class Car {
  start() {
    console.log("Car started");
  }
  stop() {
    console.log("Car stopped");
  }
}

const car1 = new Car();
car1.start();
car1.stop();


class Student {
  study() {
    console.log("Student is studying");
  }
  takeExam() {
    console.log("Student is taking an exam");
  }
}
const student1 = new Student();
student1.study();
student1.takeExam();
