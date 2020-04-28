const minValue=0;
const maxValue=59
const btnFn = (selector, oper, minVal=minValue, maxVal=maxValue) => {
  $obj = $(selector);
  let value = $obj.value()[0];

  if (oper == "+" && value < maxVal) { ++value };
  if (oper == "-" && value > minVal) { --value };
  $obj.value(value);

};

const updateText = (total, selectorMin, selectorSec) =>{
  const countSec = total % 60;
  const countMin = (total - countSec)/60;

  $(selectorMin).value(countMin);
  $(selectorSec).value(countSec);

}

const countDown = () => {
  $(".btn").addClass("disable_dbutton");
  $("#start-btn").addClass("disable_dbutton");

  const countSec = $("#seconds").value()[0];
  const countMin = $("#minutes").value()[0];
  let total = (countSec * 1) + (countMin * 60);

  let timerId = setInterval(() => {
    updateText(total--,"#minutes","#seconds");
    if (total < 0) {
      clearInterval(timerId);
      alert("Countdown is done!");
      $(".btn").addClass("disable_dbutton");
      $("#start-btn").addClass("disable_dbutton");
    };
  }, 1000);
}

function init() {
  $("#minutes").change( function() {
    if (this.value > maxValue) { this.value = maxValue };
    if (this.value < minValue) { this.value = minValue };
  } ).value(0);

  $("#seconds").change( function() {
    if (this.value > maxValue) { this.value = maxValue };
    if (this.value < minValue) { this.value = minValue };
  } ).value(0);

  $("#btn-min-up").click( function() {
    btnFn("#minutes", "+");
  });

  $("#btn-min-down").click( function() {
    btnFn("#minutes", "-");
  });

  $("#btn-sec-up").click( function() {
    btnFn("#seconds", "+");
  });

  $("#btn-sec-down").click( function() {
    btnFn("#seconds", "-");
  });

  $("#start-btn").click( function() {
    countDown();
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
});
