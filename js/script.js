// Note the below code block doesn't seem to work correctly in firefox but works fine in chrome.
$(document).ready(function () {
  $(".box").on("click", function () {

    var classNames = $(this).attr("class").split(" ");
    var boxClass = classNames[0];
    var className = classNames[1];
    if ($(this).css("background-color") == "rgb(255, 0, 0)") {
      $("." + className).css("background-color", "#000");
    } else {
      $("." + boxClass).css("background-color", "#000");
      $("." + className).css("background-color", "red");
    }
  });
});

// 'This' is used below to ensure only the p element that we have clicked toggles.
$("p").click(function () {
  $(this).slideToggle('slow');
})

$("button").mouseenter(function () {
  $(this).removeClass('makeRed').addClass("makeBlue");
})
$("button").mouseleave(function () {
  $(this).removeClass('makeBlue').addClass("makeRed");
})