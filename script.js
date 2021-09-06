$(document).ready(function(){

$("div.double>img").addClass("doubleindi");
$("div.triple>img").addClass("tripleindi");


let clicked = [];

$(".icon").click(function(){

    if (clicked.length == 0){
        $("menu").css("display", "flex");
        $("menu").animate({height: "100vh"});
        $("#burger").fadeOut(50, function(){
            $("#close").fadeIn(50);});
        clicked.push(this);
    } else {
        $("menu").css("display", "none");
        $("menu").animate({height: "0vh"});
        $("#close").fadeOut(50, function(){
            $("#burger").fadeIn(50);});
        clicked.pop();
    }
})


})