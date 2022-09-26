console.log("Script Loaded");
const overlay = document.getElementById("slide-overlay");
const ovClose = document.getElementById("slide-close-btn");

$(".nav-p").mouseenter(function () {
    $(this).addClass("nav-active");
    $(this).css("cursor", "pointer");
})
$(".nav-p").mouseleave(function () {
    $(this).removeClass("nav-active");
    $(this).css("cursor", "pointer");
    $(this).css("transition", "0.6s");
})
$(".usr-icon").mouseenter(function () {
    $(this).addClass("usr-hover");
})
$(".usr-icon").mouseleave(function () {
    $(this).removeClass("usr-hover");
    $(this).css("transition", "0.6s");
})

//Following codes for mobile nav bar icons
$(".m-nav").click(function () {
    $(".nav-links").fadeIn("100", function () {
        $(".nav-links").css("display", "block");
    })
});
$(".m-nav-close").click(function () {
    $(".nav-links").fadeOut("100", function () {
        $(".nav-links").css("display", "none");
    })
});

//Following codes for cart icon visibility
/*
$(".cart-logo").click(function(){
    $(".cart-conts").toggleClass("cart-conts-hide");
})
*/
$(".cart-logo").click(function (e) {
    $(".cart-conts").toggle();
    $(".cart-logo").css("opacity", "1");
    e.stopPropagation();
});

$(document).click(function () {
    $(".cart-conts").hide();
    $(".cart-logo").css("opacity", "0.7");
});

//following codes for product showcase section
const clickImg1 = $("#p-image1");
const clickImg2 = $("#p-image2");
const clickImg3 = $("#p-image3");
const clickImg4 = $("#p-image4");

const showImage = $("#product-image-showcase");

clickImg1.click(function () {
    $(this).addClass("product-image-active");
    clickImg2.removeClass("product-image-active");
    clickImg3.removeClass("product-image-active");
    clickImg4.removeClass("product-image-active");

    showImage.attr("src", "images/image-product-1.jpg");

    overlay.style.display = "block";
})
clickImg2.click(function () {
    $(this).addClass("product-image-active");
    clickImg1.removeClass("product-image-active");
    clickImg3.removeClass("product-image-active");
    clickImg4.removeClass("product-image-active");

    showImage.attr("src", "images/image-product-2.jpg");

    overlay.style.display = "block";
})
clickImg3.click(function () {
    $(this).addClass("product-image-active");
    clickImg1.removeClass("product-image-active");
    clickImg2.removeClass("product-image-active");
    clickImg4.removeClass("product-image-active");

    showImage.attr("src", "images/image-product-3.jpg");

    overlay.style.display = "block";
})
clickImg4.click(function () {
    $(this).addClass("product-image-active");
    clickImg1.removeClass("product-image-active");
    clickImg2.removeClass("product-image-active");
    clickImg3.removeClass("product-image-active");

    showImage.attr("src", "images/image-product-4.jpg");

    overlay.style.display = "block";
})

//JS part for slider overlay close btn
ovClose.addEventListener("click", function () {
    overlay.style.display = "none";
})

//JS part for product count btn
const countPBtn = document.getElementById("plus-btn");
const countMBtn = document.getElementById("minus-btn");
const addCartBtn = document.getElementById("p-add-cart-btn");
let pCounter = document.getElementById("p-count");
let pCount = 0;

countPBtn.addEventListener("click", function () {
    pCount = pCount + 1; //for increment current product value
    pCounter.innerHTML = pCount;
});

countMBtn.addEventListener("click", function () {
    if (pCount == 0) {//This part used to check the counter value equals to zero
        alert("Product quantity is 0!!!");
    }
    else {
        pCount = pCount - 1; //for decrement current product value
        pCounter.innerHTML = pCount;
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

addCartBtn.addEventListener("click", function () {
    if (pCount > 0) {
        let pCartCount = pCounter.innerHTML;
        cartAmount.innerHTML = pCartCount;
        cartAmount.style.display = "block";
        cartQuantity.innerHTML = pCartCount;
        let finalPrice = pPrice * pCartCount;
        cartFinalAmount.innerHTML = finalPrice.toFixed(2);//toFixed used to print decimal points of the price
        cartEmpState.style.display = "none";
        productRow.style.display = "block";
        pCounter.innerHTML = 0;//This is used to reset the value of product counter btn from visually 
        pCount.innerHTML = 0;
        pCount = 0;//This is used to reset the value of product counter btn from logically 
    }
    else {
        alert("Please select quantity first!!!");
    }
});

delBtn.addEventListener("click", function () {
    productRow.style.display = "none";
    cartEmpState.style.display = "block";
    pCartCount = 0;
    cartAmount.innerHTML = pCartCount;
    cartAmount.style.display = "none";
    cartQuantity.innerHTML = pCartCount;
    pCounter.innerHTML = 0;
    pCount.innerHTML = 0;
});

//JS part for overlay slider
const thumbImg1 = $("#t-image1");
const thumbImg2 = $("#t-image2");
const thumbImg3 = $("#t-image3");
const thumbImg4 = $("#t-image4");

const sliderImg = $("#slider-image");

thumbImg1.click(function () {
    $(this).addClass("product-image-active");
    thumbImg2.removeClass("product-image-active");
    thumbImg3.removeClass("product-image-active");
    thumbImg4.removeClass("product-image-active");

    sliderImg.attr("src", "images/image-product-1.jpg");
})
thumbImg2.click(function () {
    $(this).addClass("product-image-active");
    thumbImg1.removeClass("product-image-active");
    thumbImg3.removeClass("product-image-active");
    thumbImg4.removeClass("product-image-active");

    sliderImg.attr("src", "images/image-product-2.jpg");
})
thumbImg3.click(function () {
    $(this).addClass("product-image-active");
    thumbImg1.removeClass("product-image-active");
    thumbImg2.removeClass("product-image-active");
    thumbImg4.removeClass("product-image-active");

    sliderImg.attr("src", "images/image-product-3.jpg");
})
thumbImg4.click(function () {
    $(this).addClass("product-image-active");
    thumbImg1.removeClass("product-image-active");
    thumbImg2.removeClass("product-image-active");
    thumbImg3.removeClass("product-image-active");

    sliderImg.attr("src", "images/image-product-4.jpg");
})