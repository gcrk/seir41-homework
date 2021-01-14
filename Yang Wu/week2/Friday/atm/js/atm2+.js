//separate the logic part(js itself) and the display part(concerning DOM). essential for big project.

const render =  function() {
  $('#checking-balance').text('$' + atm2.checkingBalance);
  $('#saving-balance').text('$' + atm2.savingBalance);

}

$(document).ready(function () {
  $('#checking-deposit').on('click', function() {
    const amount = $('#checking-amount').val();
    atm2.checkingDeposit(amount);//call checkingDeposit function from atm2 file.
    render()//display the result on screen?
  })
})
