console.log("Script Loaded");

$(".nav-p").mouseenter(function(){
    $(this).addClass("nav-active");
    $(this).css("cursor","pointer");
})
$(".nav-p").mouseleave(function(){
    $(this).removeClass("nav-active");
    $(this).css("cursor","pointer");
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

let showImage = $("#product-image-showcase");

clickImg1.click(function(){
    $(this).addClass("product-image-active");
    clickImg2.removeClass("product-image-active");
    clickImg3.removeClass("product-image-active");
    clickImg4.removeClass("product-image-active");

    showImage.attr("src","images/image-product-1.jpg");
})
clickImg2.click(function(){
    $(this).addClass("product-image-active");
    clickImg1.removeClass("product-image-active");
    clickImg3.removeClass("product-image-active");
    clickImg4.removeClass("product-image-active");

    showImage.attr("src","images/image-product-2.jpg");
})
clickImg3.click(function(){
    $(this).addClass("product-image-active");
    clickImg1.removeClass("product-image-active");
    clickImg2.removeClass("product-image-active");
    clickImg4.removeClass("product-image-active");

    showImage.attr("src","images/image-product-3.jpg");
})
clickImg4.click(function(){
    $(this).addClass("product-image-active");
    clickImg1.removeClass("product-image-active");
    clickImg2.removeClass("product-image-active");
    clickImg3.removeClass("product-image-active");

    showImage.attr("src","images/image-product-4.jpg");
})

//JS part for product count btn
const countPBtn = document.getElementById("plus-btn");
const countMBtn = document.getElementById("minus-btn");
const addCartBtn = document.getElementById("p-add-cart-btn");
let pCounter = document.getElementById("p-count");
let pCount = 0;

countPBtn.addEventListener("click",function(){
    console.log("Count btn plus btn clicked");
    pCount = pCount + 1; //for increment current product value
    pCounter.innerHTML = pCount;
    console.log("Product count is ",pCount);
});

countMBtn.addEventListener("click",function(){
    console.log("Count btn minus btn clicked");
    if(pCount==0){//This part used to check the counter value equals to zero
        alert("Product quantity is 0!!!");
    }
    else{
        pCount = pCount - 1; //for decrement current product value
        pCounter.innerHTML = pCount;
        console.log("Product count is ",pCount);
    }
});

//JS part for cart functionality
let cartAmount = document.getElementById("cart-amount");
let cartQuantity = document.getElementById("p-quantity");
let cartFinalAmount = document.getElementById("p-final-p");
const pPrice = 125.00;
const cartEmpState = document.getElementById("empty-state");
const productRow = document.getElementById("p-row");
const delBtn = document.getElementById("del-btn");

addCartBtn.addEventListener("click",function(){
    if(pCount>0){
        let pCartCount = pCounter.innerHTML;
        cartAmount.innerHTML = pCartCount;
        cartAmount.style.display = "block";
        cartQuantity.innerHTML = pCartCount;
        let finalPrice = pPrice * pCartCount;
        cartFinalAmount.innerHTML = finalPrice.toFixed(2);//toFixed used to print decimal points of the price
        cartEmpState.style.display = "none";
        productRow.style.display = "block";
        console.log(pCount);
        pCounter.innerHTML = 0;
        pCount.innerHTML = 0;
        pCount = 0;
    }
    else{
        alert("Please select quantity first!!!");
    }
});

delBtn.addEventListener("click",function(){
    productRow.style.display = "none";
    cartEmpState.style.display = "block";
    pCartCount = 0;
    cartAmount.innerHTML = pCartCount;
    cartAmount.style.display = "none";
    cartQuantity.innerHTML = pCartCount;
    pCounter.innerHTML = 0;
    pCount.innerHTML = 0;
});


