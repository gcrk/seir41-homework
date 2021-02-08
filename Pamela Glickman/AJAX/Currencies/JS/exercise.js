const displayCurrency = function() {
    event.preventDefault();
    const base = $('#base').val();
    const amount = $('#amount').val();
    const target = $('#target').val();
    $.ajax(`https://api.exchangeratesapi.io/latest?base=${base}`).done(function (results) {
      const convertedAmount = results.rates[target] * amount;
      $('#converted-amount').text(`${convertedAmount.toFixed(2)} ${target}`);
    });
}

$(document).ready(function(event) {
  $('#currency-form').on("submit", displayCurrency);
})
