class makeBankAccountB {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  set _balance(amount) {
    this.balance = amount;
  }

  get _balance() {
    const newBalance = this.increaseBalanceByOne()

    return newBalance;
  }

  increaseBalanceByOne() {
   return this.balance + 1
  }
}
const b = new makeBankAccountB(22);

console.log(b._balance);

function makeBankAccount() {
  // this one is private
  let balance = 0;

  // a "getter", made public via the returned object below
  function getBalance() {
    return balance;
  }

  // a "setter", made public via the returned object below
  function setBalance(amount) {
    // ... validate before updating the balance
    balance = amount;
  }

  return {
    // ...
    getBalance,
    setBalance,
  };
}

const account = makeBankAccount();
account.setBalance(100);
console.log(account.getBalance());
