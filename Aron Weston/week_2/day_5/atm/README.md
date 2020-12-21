# jQuery ATM Machine

1.  Keep track of the checking and savings balances somewhere

2.  Add functionality so that a user can deposit money into one of the bank accounts.

3. Make sure you are updating the display and manipulating the HTML of the page
so a user can see the change.

4. Add functionality so that a user can withdraw money from one of the bank accounts.

5.  Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.

6.  Make sure the balance in an account can't go negative. If a user tries to
withdraw more money than exists in the account, ignore the transaction.

7.  When the balance of the bank account is $0 the background of that bank account

should be red. It should be gray when there is money in the account.
8. What happens when the user wants to withdraw more money from the checking
account than is in the account? These accounts have overdraft protection, so if
a withdrawal can be covered by the balances in both accounts, take the checking
balance down to $0 and take the rest of the withdrawal from the savings account.

9. If the withdrawal amount is more than the combined account balance, ignore it.
    * Make sure there is overdraft protection going both ways.
    * Are there ways to refactor your code to make it DRYer?
