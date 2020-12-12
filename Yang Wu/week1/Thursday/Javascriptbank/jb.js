// # JavaScript Bank
//
// In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and the following capabilities that you need to write.
//
// #### Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an `addAccount` method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// #### Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions `console.log()` values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.


const bank = [

  {
    name: "Adam",
    balance: "500",
  },

  {
    name: "Eve",
    balance: "600",
  },

  {
    name: "John",
    balance: "100",
  },

  {
    name: "Sarah",
    balance: "900",
  },

  {
    name: "Fiona",
    balance: "80",
  },

]

const totalSum = function(bank) {
  let balanceList = [];
  let result = 0;
  for (i = 0; i < bank.length; i++) { //get current balance from all accounts
    balanceList.push(bank[i].balance)
  };
  for (j = 0; j < balanceList.length; j++) { //add the balances
    result += parseFloat(balanceList[j]);
  }
  console.log (`The total sum of money in all accounts in the bank is ${result}.`);
}

const addAccount = function (name, balance) {
  let newAccount = {name: undefined, balance: undefined};
  newAccount.name = name;
  newAccount.balance = balance;
  bank.push (newAccount);
}

const changeBalance = function (name, num) {
  let rightName = undefined;
  for (i = 0; i < bank.length; i++) {
    if (bank[i].name === name) { //find the target account
      rightName = true;
      let newBalance = parseFloat(bank[i].balance) + num;
      if (newBalance >= 0) {
      bank[i].balance = newBalance;
      console.log (`Account of ${name} current balance: ${bank[i].balance}`);
      return
    } else { //balance should not be negative
      console.log ("Not enough money to operate this change.")
      return
      }
    }
  }
  if (rightName != true) { //check if the account name is existing
    console.log ("invalid account")
  }
}

const transfer = function (name1, name2, num) {
  for (i = 0; i < bank.length; i++) { //find the sender
    if (bank[i].name === name1) {
      let newBalance1 = parseFloat(bank[i].balance) - num;
      if (newBalance1 >= 0) { //check if sender has enough money
        let realReceiver = undefined; //check if the receiver is existing
        for (j = 0; j < bank.length; j++) {
          if (bank[j].name === name2) {
            realReceiver = true;
            bank[i].balance = newBalance1;
            let newBalance2 = parseFloat(bank[j].balance) + num;
            bank[j].balance = newBalance2; //operate the transfer
            console.log (`Account of ${name1} current balance: ${bank[i].balance}`);
            console.log (`Account of ${name2} current balance: ${bank[j].balance}`);
            return
            }
          }
        if (realReceiver != true) {
          console.log ("invalid receiver info");
          return
        }
      } else {
        console.log ("Not enough money to transfer.")
        return
      }
    }
  }
}



transfer ("Sarah", "Fiona", 100);
transfer ("John", "Eve", 150);
transfer ("Adam", "Alex", 50);
console.table (bank)
