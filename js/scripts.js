btnFn = (selector, oper, minValue=0, maxValue=59) => {
  $obj = $(selector);
  let value = $obj.value()[0];

  if (oper == "+" && value < maxValue) { ++value };
  if (oper == "-" && value > minValue) { --value };
  console.log(value);
  $obj.value(value);

};

function init() {

$("#btn_min_up").click( function() {
  btnFn("#minutes", "+");
});

$("#btn_min_down").click( function() {
  btnFn("#minutes", "-");
});

$("#btn_sec_up").click( function() {
  btnFn("#seconds", "+");
});

$("#btn_sec_down").click( function() {
  btnFn("#seconds", "-");
});
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
});
