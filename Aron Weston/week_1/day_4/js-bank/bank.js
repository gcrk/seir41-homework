const bank = {
    accounts: [],
    totalBalance: () => {
        let sum = 0;
        bank.accounts.forEach(account => {
            sum += account.balance;
        })
        return sum;
    },
    addAccount: (name, transfer) => {
        const newAccount = {
            name: name,
            balance: 0,
            transfer: transfer
        }
        bank.accounts.push(newAccount);
    }
}

const deposit = (accountName, debit) => {
    bank.accounts.forEach(account => {
        if (account.name === accountName) {
            account.balance += debit
        }
    })
    //Update balance 
    bank.totalBalance();
}

const withdraw = (accountName, credit) => {
    bank.accounts.forEach(account => {
        if (account.name === accountName) {
            let x = account.balance - credit;
            if (x < 0) {
                console.log('Withdraw canceled');
            } else {
                account.balance -= credit;
            }

        }
    })
    //Update balance 
    bank.totalBalance();
}

const transfer = (fromAccount, toAccount, debit) => {

    bank.accounts.forEach(account => {
        if (account.name === fromAccount && account.transfer === true) {

            if (debit > account.balance) {
                console.log('Not enough money');
            } else {
                account.balance -= debit;
                console.log("From", account);
            }

            if (account.name === toAccount && account.transfer === true) {
                account.balance += debit;
                console.log('To', account);
            }

        }
    })
}


//Create accounts
bank.addAccount('John Smith', true);
bank.addAccount('Jill Smith', true);

deposit('John Smith', 100);
deposit('Jill Smith', 100);


transfer('Jill Smith', 'John Smith', 10);

// console.log('Opening Balance', bank.totalBalance());
// console.log('Deposits', bank.totalBalance());
// console.log('Withdrawals', bank.totalBalance());


console.log(bank.accounts);