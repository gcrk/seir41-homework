//2nd Version - Objects
// By saving the functions in atm-1.js, into methods as part of the bank object - we can actually expand the power of the functions to have more utility for scaling. I'm specifically talking about the deposit, withdraw and overdraft methods that can work on account details that are passed into them, rather than being limited to a specific click event.

$(document).ready(function () {
  const bank = {
    checking: [],
    savings: [],
    deposit: (account, debit, id) => {
      account.push(debit);
      bank.output(`${id}`, bank.totalBalance(account));
    },
    withdraw: (account, credit, outputID, msgID) => {
      const balance = bank.totalBalance(account) - credit;
      if (balance > 0) {
        account.push(-credit);
        bank.output(`${outputID}`, bank.totalBalance(account));
      } else if (balance === 0) {
        account.push(-credit);
        bank.output(`${outputID}`, bank.totalBalance(account));
        bank.message("You have no more money.", `${msgID}`, "zero");
      } else if (balance < 0) {
        bank.overdraft(account, credit, msgID, outputID);
      }
    },
    overdraft: (account, credit, msgID, outputID) => {
      let currentAccount = account,
        currentID = outputID,
        currentTotal;

      let overdraftAccount, overdraftTotal, overdraftID;

      if (currentAccount === bank.checking) {
        currentTotal = bank.totalBalance(currentAccount);
        overdraftTotal = bank.totalBalance(bank.savings);
        //overdraft account
        overdraftAccount = bank.savings;
        overdraftID = "#savings-balance";
      } else {
        currentTotal = bank.totalBalance(currentAccount);
        overdraftTotal = bank.totalBalance(bank.checking);
        //overdraft account
        overdraftAccount = bank.checking;
        overdraftID = "#checking-balance";
      }
      if (credit > currentTotal + overdraftTotal) {
        bank.message("No overdraft available.", `${msgID}`, "zero");
      } else {
        if (currentTotal > 0) {
          //Before deductions
          console.log("CURRENT ACCOUNT", currentID, currentTotal);
          console.log("OVERDRAFT ACCOUNT", overdraftID, overdraftTotal);

          let x = currentTotal - credit;
          let y = x + credit;

          //Push to overdraft account
          console.log(x);
          overdraftAccount.push(x);
          bank.output(`${overdraftID}`, bank.totalBalance(overdraftAccount));

          //Push to current account
          console.log(-y);
          currentAccount.push(-y);
          bank.output(`${currentID}`, bank.totalBalance(currentAccount));

          //After deductions
          console.log(
            "CURRENT BALANCE",
            bank.totalBalance(currentAccount),
            "OVERDRAFT BALANCE",
            bank.totalBalance(overdraftAccount)
          );
        } else {
          overdraftAccount.push(-credit);
          bank.output(`${overdraftID}`, bank.totalBalance(overdraftAccount));
        }
      }
    },
    totalBalance: (account) => {
      let sum = 0;
      $.each(account, function () {
        sum += parseInt(this);
      });
      return sum;
    },
    output: (id, total) => {
      $(`${id}`).text(`$${total.toLocaleString()}`);
    },
    message: (message, element, className) => {
      $('<div id="alert"></div>')
        .text(`${message}`)
        .prependTo($(`${element}`).addClass(`${className}`));
      setTimeout(function () {
        $("#alert").remove();
        $(`${element}`).removeClass(`${className}`);
      }, 2000);
    },
  };

  //CHECKING - DEPOSIT
  $("#checking-deposit").on("click", () => {
    const amount = parseInt($("#checking-amount").val());
    if (isNaN(amount) || amount <= 0) {
      bank.message("Deposit more than $0", "#checking", "zero");
    } else {
      bank.deposit(bank.checking, amount, "#checking-balance");
    }
  });

  //SAVINGS - DEPOSIT
  $("#savings-deposit").on("click", () => {
    const amount = parseInt($("#savings-amount").val());
    if (isNaN(amount) || amount <= 0) {
      bank.message("Deposit more than $0", "#savings", "zero");
    } else {
      bank.deposit(bank.savings, amount, "#savings-balance");
    }
  });

  //CHECKING - WITHDRAW
  $("#checking-withdraw").on("click", () => {
    const amount = parseInt($("#checking-amount").val());
    bank.withdraw(bank.checking, amount, "#checking-balance", "#checking");
  });

  //SAVINGS - WITHDRAW
  $("#savings-withdraw").on("click", () => {
    const amount = parseInt($("#savings-amount").val());
    bank.withdraw(bank.savings, amount, "#savings-balance", "#savings");
  });
});
