class BankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  showBalance() {
    console.log(this.balance);
  }
}

const acc = new BankAccount("Priya", 10000);

acc.deposit(5000);

acc.showBalance();

//example with private fields
class BankAccounts {
  #balance = 10000;

  deposit(amount) {
    this.#balance += amount;
  }

  showBalance() {
    console.log(this.#balance);
  }
}

const acc1 = new BankAccounts();

acc1.deposit(5000);

acc1.showBalance();