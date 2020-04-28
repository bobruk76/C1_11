function btnFn($obj, oper, minValue, maxValue){
  let value
  $obj.value(++$obj.value()[0]);
}

function init() {

  $("#btn_min_up").click(function(){
    $obj = $("#minutes")
    $obj.value(++$obj.value()[0]);
  });

  $("#btn2").click(function(){
    const $temp=$(".change_this").text()[0];
    obj = $(".change_this").text(msg2.value()[0]);
    msg2.value($temp);
  });

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
});
