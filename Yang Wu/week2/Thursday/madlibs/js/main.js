$("button").on ("click", function () {
  let noun = $("#noun").val();
  let adjective = $("#adjective").val();
  let person = $("#person").val();
  let out = `${name} really likes ${adjective} ${noun}.`
  $("#story").html(out);
})

$("h1").funText (20,"candy");
$("li").funText (10, "rainbow");
