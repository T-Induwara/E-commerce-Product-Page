console.log("Script Loaded");

$(".nav-p").hover(function(){
    $(this).toggleClass("nav-active");
    $(this).css("cursor","help");
})
$(".usr-icon").hover(function(){
    $(this).toggleClass("usr-hover");
})

//Following codes for mobile nav bar icons
$(".m-nav").click(function(){
    $(".nav-links").fadeIn("100",function(){
        $(".nav-links").css("display","block");
    })
});
$(".m-nav-close").click(function(){
    $(".nav-links").fadeOut("100",function(){
        $(".nav-links").css("display","none");
    })
});