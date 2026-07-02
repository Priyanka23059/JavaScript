class ATM {
  #verifyPin() {
    console.log("PIN Verified");
  }

  #checkBalance() {
    console.log("Balance Checked");
  }

  withdraw(amount) {
    this.#verifyPin();
    this.#checkBalance();
    console.log(`₹${amount} Withdrawn`);
  }
}

const atm = new ATM();

atm.withdraw(5000);

//example2
class BankAccount {
  #balance = 10000;

  showBalance() {
    console.log(this.#balance);
  }
}

const acc = new BankAccount();
//console.log(acc.#balance); // Error: Private field '#balance' must be declared in an enclosing class

acc.showBalance();
//acc.#balance; // Error: Private field '#balance' must be declared in an enclosing class
