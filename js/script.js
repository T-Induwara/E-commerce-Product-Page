console.log("Script Loaded");

$(".nav-p").mouseenter(function(){
    $(this).addClass("nav-active");
    $(this).css("cursor","help");
})
$(".nav-p").mouseleave(function(){
    $(this).removeClass("nav-active");
    $(this).css("cursor","help");
    $(this).css("transition","0.6s");
})
$(".usr-icon").mouseenter(function(){
    $(this).addClass("usr-hover");
})
$(".usr-icon").mouseleave(function(){
    $(this).removeClass("usr-hover");
    $(this).css("transition","0.6s");
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

//Following codes for cart icon visibility
/*
$(".cart-logo").click(function(){
    $(".cart-conts").toggleClass("cart-conts-hide");
})
*/
$(".cart-logo").click(function(e){
    $(".cart-conts").toggle();
    $(".cart-logo").css("opacity","1");
    e.stopPropagation();
});

$(document).click(function(){
    $(".cart-conts").hide();
    $(".cart-logo").css("opacity","0.7");
});

//following codes for product showcase section
let clickImg1 = $("#p-image1");
let clickImg2 = $("#p-image2");
let clickImg3 = $("#p-image3");
let clickImg4 = $("#p-image4");

clickImg1.click(function(){
    $(this).addClass("product-image-active");
    clickImg2.removeClass("product-image-active");
    clickImg3.removeClass("product-image-active");
    clickImg4.removeClass("product-image-active");
})
clickImg2.click(function(){
    $(this).addClass("product-image-active");
    clickImg1.removeClass("product-image-active");
    clickImg3.removeClass("product-image-active");
    clickImg4.removeClass("product-image-active");
})
clickImg3.click(function(){
    $(this).addClass("product-image-active");
    clickImg1.removeClass("product-image-active");
    clickImg2.removeClass("product-image-active");
    clickImg4.removeClass("product-image-active");
})
clickImg4.click(function(){
    $(this).addClass("product-image-active");
    clickImg1.removeClass("product-image-active");
    clickImg2.removeClass("product-image-active");
    clickImg3.removeClass("product-image-active");
})