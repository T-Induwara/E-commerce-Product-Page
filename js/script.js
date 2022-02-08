console.log("Script Loaded");

$(".nav-p").hover(function(){
    $(this).toggleClass("nav-active");
    $(this).css("cursor","help");
})

$(".usr-icon").hover(function(){
    $(this).toggleClass("usr-hover");
})