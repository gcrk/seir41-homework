
//checking account functions

$("#checking-deposit").on ("click", function () {
  let change = Number($("#checking-amount").val());
  let previous = Number($("#checking-balance").val());
  let current = previous + change;
  $("#checking-balance").val(current).html(current);
})

$("#checking-withdraw").on ("click", function () {
  let change = Number($("#checking-amount").val());
  let previous = Number($("#checking-balance").val());
  let backUp = Number($("#savings-balance").val());
  let current = previous - change;
    if (current >= 0) { // not negative
      $("#checking-balance").val(current).html(current);
    } else if (previous + backUp >= change) {
      $("#checking-balance").val("0").html("0");
      let savingNow = backUp - (change - previous);
      $("#savings-balance").val(savingNow).html(savingNow);
    }
})

//saving account functions

$("#savings-deposit").on ("click", function () {
  let change = Number($("#savings-amount").val());
  let previous = Number($("#savings-balance").val());
  let current = previous + change;
  $("#savings-balance").val(current).html(current);
})

$("#savings-withdraw").on ("click", function () {
  let change = Number($("#savings-amount").val());
  let previous = Number($("#savings-balance").val());
  let current = previous - change;
    if (current >= 0) { // not negative
      $("#savings-balance").val(current).html(current);
    }
})

//background animation when lacking

if (Number($("#checking-balance").val()) === 0) {
  $("#checking").addClass("lack");
} else {
  $("#checking").removeClass("lack");
}

if (Number($("#savings-balance").val()) === 0) {
  $("#savings").addClass("lack");
} else {
  $("#savings").removeClass("lack");
}
