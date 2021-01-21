
//Use MouseEvents
// get the DOM node
//define the event handler
// attach the handler to the DOM node

console.log('atm');
//
// let checkingBal = document.getElementById('checking-balance')
// checkingBal = []
// checkingBal.push()
// let savingsBal = []

// const addAmount = document.getElementById('checking-amount').value;
// const balanceC = parseInt(addAmount);
document.getElementById('checking-balance').innerHTML = 0;
//NO TO ABOVE - USE BELOW!
$('#checking-balance').text('$' + deposit) // getter and a setter
const currentBalance = $('#checking-balance').text().slice(1) // getter and slice $ off

can use slice - abcde.slice(2 , 4)
//functional way vs object way - object - moving functions into an object make them methods. Save data structure into an array.
// try toLocaleString() for the $$ - look up data.prototype - temperate literal

const checkingDeposit = document.getElementById('checking-deposit');
const addMoneyC = function () {
const addAmount = document.getElementById('checking-amount').value;
let amount = parseInt(addAmount);
const balance = document.getElementById('checking-balance')
balance.innerHTML = amount + parseInt(balance.innerHTML);
$('#checking-balance').text('$' + addAmount)
 };

//separate variable - put together string and variable. Save to an array and then loop through. Total = looped value.
//look up Javascript Bank HW - Credit Card HW
//$(`${id}`).text(`$${total.toLocaleString()}`);

checkingDeposit.addEventListener('click', addMoneyC);
//loop through helps more with the rest of the stuff and have more control. JS can get ahead of you. Save something into a data structure.

const checkingWithdraw = document.getElementById('checking-withdraw');
const lessMoneyC = function () {
const lessAmount = document.getElementById('checking-amount').value;
const balancelessC = parseInt(lessAmount);

if (newBalance < 0) {
  return;
} // which means nothing else in the function will occur

document.getElementById('checking-balance').innerHTML = parseInt(document.getElementById('checking-balance').innerHTML) - balancelessC;
 };

checkingWithdraw.addEventListener('click', lessMoneyC);

  const balance = [];
const checkingIn = checkingDeposit.addEventListener('click', function () {
  const addAmount = document.getElementById('checking-amount').value;
  // let balance = [];
  balance.push(parseInt(addAmount));
  console.log(balance);
});

const checkingOut = checkingWithdraw.addEventListener('click', function () {
  const lessAmount = document.getElementById('checking-amount').value;
  // let balance2 = [];
  balance.push(-lessAmount);
  console.log(balance);
});

// saved array to balance and can pass in multiple times

// for loop - loop through





//append child #checking.account?

// for (var i = 0, sum = 0; i < output.length; sum += output[i++]);
// console.log(sum);


// $(document).ready(function() {
// $('#checking-deposit').on('click', function () {
//   const input = $('#checking-amount').val();
//   $('#checking-balance').html(0 + input);
// });

// $('#checking-deposit').on('click', function () {
//   $('#logo').css('opacity', 0.5);
// });


// }).on('focus', function () {
//   $('header').addClass('active');
// }).on('blur', function () {
//   $('header').removeClass('active');
// });
//
// //Already have classes defined in the html - use the classes to identify each of them

//Revise what we have learned today and yesterday - that is how to get the solution

//Don't touch the html

//Revise Javascript functions + manipulating the DOM with jquery
//Possible plugins?
