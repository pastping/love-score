$(document).ready(function () {

  function loveScore() {
    var randomNum = Math.random() * 100;
    randomNum = Math.floor(randomNum) + 1;
    return randomNum;
  }

  $(".btn").on("click", function () {
    var yourName = $("input:eq(0)").val()
    var yourCrush = $("input:eq(1)").val()
    $(".overlay-wrap").addClass("active")
    $(".overlay__heart__content").html("Your love is " + loveScore() + ". <br>" + yourName + " <3 " + yourCrush)
  })
  // Click Input
  $(".input").on("click", function () {
    $(this).addClass('active')
  })

  $(".overlay__close").on("click", function () {
    $(".overlay-wrap").removeClass("active");
  })

});

  











