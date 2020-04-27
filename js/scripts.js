function init() {
  const newObj = `<img class="change_this" src="https://batmanrobin.23video.com/files/11723138/1b965a5c398e48b.jpg" alt="">`;
  const newText = `Можно поменять на этот текст`;

  let msg1=$("#message1")
  msg1.value(newObj);
  let msg2=$("#message2");
  msg2.value(newText);

  $("#btn1").click(function(){
    const $temp=$(".change_this").html()[0];
    obj = $(".change_this").html(msg1.value()[0]);
    msg1.value($temp);
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
