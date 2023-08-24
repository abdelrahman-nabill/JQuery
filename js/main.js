let asideWidth = $("#asideBox").width();
$("#close").click(() => {
  $("#asideBox").animate({ left: `-${asideWidth}` }, 1000);
  $("#open").animate({ left: "10px" }, 1000);
});
$("#open").click(() => {
  $("#asideBox").animate({ left: 0 }, 1000);
  $("#open").animate({ left: "270px" }, 1000);
});
$(".aside-item a").click(function () {
  let x = $(this).attr("href");
  let sectionOffset = $(x).offset().top;
  $("html,body").animate({ scrollTop: sectionOffset }, 700);
});

$("#details p").eq(0).css("display", "block");
$("#details h2").click(function () {
  $("#details p").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);

});
let index = 100;
$("#count").html(index);
$("#test").keyup(function () {
  let y = $("#test").val();
  let result = index - y.length;
  if (result < 0) {
    $("#count").html(0);
  } else {
    $("#count").html(result);
  }
});


let dateTarget= new Date("Dec 31 2023 23:59:59").getTime();
let counter = setInterval(function(){
    let date=new Date().getTime()
    let diff=dateTarget - date
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diff % (1000 * 60 * 60 * 24)/(1000 *60 *60)) 
    let minutes = Math.floor(diff%(1000 * 60 *60) / (1000*60))
    let seconds = Math.floor(diff % (1000*60) / 1000)


    $('#days').html(days + " D");
    $('#hours').html(hours + " h");
    $('#minutes').html(minutes + " m");
    $('#seconds').html(seconds + " s");


},1000)