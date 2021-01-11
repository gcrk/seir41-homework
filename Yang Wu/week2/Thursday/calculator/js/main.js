$("#square-button").on ("click", function() {
  let num = $("#square-input").val();
  let out = num * num;
  $("#solution").html(out);
});

$("#half-button").on ("click", function() {
  let num = $("#half-input").val();
  let out = num * 0.5;
  $("#solution").html(out);
});

$("#area-button").on ("click", function() {
  let num = $("#area-input").val();
  let out = Math.PI * num * num;
  $("#solution").html(out);
});
