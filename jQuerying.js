$(document).ready(function(){

    $("#hover").mouseenter(function(){
        $(this).css("background-color", "red");
    });

    $("#hover").mouseleave(function(){
        $(this).css("background-color", "blue");
    });

    $("#hover").click(function(){
        $(this).toggleClass("green");
    });

    $(".hideMe").click(function(){
        $(this).hide();
    });

    $(".changeColor").click(function(){
        $("ul li:nth-child(3)").css("color", "#8A2BE2");
    });

    $("#removeLi").click(function(){
        $("ul li:nth-child(2)").remove();
    });

    $("ul li:nth-child(4)").click(function(){
       $(this).after("new text");
    });

    $("ul li:nth-child(5)").click(function(){
        $(this).css("font-size", "40px");
        $("ul li:lt(4)").remove();
    });

    $(".cute").click(function(){
        for(i = 0; i<20; i++){
        $(this).clone().insertAfter(this);}
    });

    $(document).dblclick(function(){
        $("#makeSquare").css("height", "300px");
    });

    $("#dontClick").click(function(){
        alert("I said don't click!");
    });

    $(".black").click(function(){
        $("body").css("background-color", "#000");
    });

    $(".wood").click(function(){
        $("body").css("background-image", "url(\"http://phandroid.s3.amazonaws.com/wp-content/uploads/2015/03/wood-wallpaper-3.jpg\")");
    });

    $(".chaos").click(function(){
        $("body").css("background-image", "url(\"http://www.henderson-art.co.uk/art/wallpaper/chaos.jpg\")");
    });

});
