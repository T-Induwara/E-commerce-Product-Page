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

showImage.click(function () {
    overlay.style.display = "block";
})

clickImg1.click(function () {
    $(this).addClass("product-image-active");
    clickImg2.removeClass("product-image-active");
    clickImg3.removeClass("product-image-active");
    clickImg4.removeClass("product-image-active");

    showImage.attr("src", "images/image-product-1.jpg");
    sliderImg.attr("src", "images/image-product-1.jpg");
})
clickImg2.click(function () {
    $(this).addClass("product-image-active");
    clickImg1.removeClass("product-image-active");
    clickImg3.removeClass("product-image-active");
    clickImg4.removeClass("product-image-active");

    showImage.attr("src", "images/image-product-2.jpg");
    sliderImg.attr("src", "images/image-product-2.jpg");
})
clickImg3.click(function () {
    $(this).addClass("product-image-active");
    clickImg1.removeClass("product-image-active");
    clickImg2.removeClass("product-image-active");
    clickImg4.removeClass("product-image-active");

    showImage.attr("src", "images/image-product-3.jpg");
    sliderImg.attr("src", "images/image-product-3.jpg");
})
clickImg4.click(function () {
    $(this).addClass("product-image-active");
    clickImg1.removeClass("product-image-active");
    clickImg2.removeClass("product-image-active");
    clickImg3.removeClass("product-image-active");

    showImage.attr("src", "images/image-product-4.jpg");
    sliderImg.attr("src", "images/image-product-4.jpg");
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
const quantPop = document.getElementById("quantity0-popup");
const selPop = document.getElementById("sel-quantity-popup");

countPBtn.addEventListener("click", function () {
    pCount = pCount + 1; //for increment current product value
    pCounter.innerHTML = pCount;
});

countMBtn.addEventListener("click", function () {
    if (pCount == 0) {//This part used to check the counter value equals to zero
        //alert("Product quantity is 0!!!");
        quantPop.style.display = "block";
        setTimeout(() => {
            quantPop.style.display = 'none';
            quantPop.addClass("popup-hide");
        }, 2000);//Timeout for popups
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
        //alert("Please select quantity first!!!");
        selPop.style.display = "block";
        setTimeout(() => {
            selPop.style.display = 'none';
            selPop.addClass("popup-hide");
        }, 2000);//Timeout for popups
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

const prevBtn = $("#slider-prev")
const nextBtn = $("#slider-next");
let slideCount = 1;

thumbImg1.click(function () {
    $(this).addClass("product-image-active");
    thumbImg2.removeClass("product-image-active");
    thumbImg3.removeClass("product-image-active");
    thumbImg4.removeClass("product-image-active");

    sliderImg.attr("src", "images/image-product-1.jpg");
    slideCount = 1;
});
thumbImg2.click(function () {
    $(this).addClass("product-image-active");
    thumbImg1.removeClass("product-image-active");
    thumbImg3.removeClass("product-image-active");
    thumbImg4.removeClass("product-image-active");

    sliderImg.attr("src", "images/image-product-2.jpg");
    slideCount = 2;
});
thumbImg3.click(function () {
    $(this).addClass("product-image-active");
    thumbImg1.removeClass("product-image-active");
    thumbImg2.removeClass("product-image-active");
    thumbImg4.removeClass("product-image-active");

    sliderImg.attr("src", "images/image-product-3.jpg");
    slideCount = 3;
});
thumbImg4.click(function () {
    $(this).addClass("product-image-active");
    thumbImg1.removeClass("product-image-active");
    thumbImg2.removeClass("product-image-active");
    thumbImg3.removeClass("product-image-active");

    sliderImg.attr("src", "images/image-product-4.jpg");
    slideCount = 4;
});

//JS part for desktop overlay slider arrow btns
console.log(slideCount);
prevBtn.click(function () {
    if (slideCount > 1) {
        slideCount = slideCount - 1;
        if (slideCount == 1) {
            sliderImg.attr("src", "images/image-product-1.jpg");
        }
        else if (slideCount == 2) {
            sliderImg.attr("src", "images/image-product-2.jpg");
        }
        else if (slideCount == 3) {
            sliderImg.attr("src", "images/image-product-3.jpg");
        }
        else if (slideCount == 4) {
            sliderImg.attr("src", "images/image-product-4.jpg");
        }
    }
})

nextBtn.click(function () {
    if (slideCount < 4) {
        slideCount = slideCount + 1;
        if (slideCount == 1) {
            sliderImg.attr("src", "images/image-product-1.jpg");
        }
        else if (slideCount == 2) {
            sliderImg.attr("src", "images/image-product-2.jpg");
        }
        else if (slideCount == 3) {
            sliderImg.attr("src", "images/image-product-3.jpg");
        }
        else if (slideCount == 4) {
            sliderImg.attr("src", "images/image-product-4.jpg");
        }
    }
})

//JS part for mobile image slider btn
const mPrevBtn = $("#mobile-prev-btn");
const mNxtBtn = $("#mobile-nxt-btn");

mPrevBtn.click(function () {
    if (slideCount > 1) {
        slideCount = slideCount - 1;
        if (slideCount == 1) {
            showImage.attr("src", "images/image-product-1.jpg");
        }
        else if (slideCount == 2) {
            showImage.attr("src", "images/image-product-2.jpg");
        }
        else if (slideCount == 3) {
            showImage.attr("src", "images/image-product-3.jpg");
        }
        else if (slideCount == 4) {
            showImage.attr("src", "images/image-product-4.jpg");
        }
    }
})

mNxtBtn.click(function () {
    if (slideCount < 4) {
        slideCount = slideCount + 1;
        if (slideCount == 1) {
            showImage.attr("src", "images/image-product-1.jpg");
        }
        else if (slideCount == 2) {
            showImage.attr("src", "images/image-product-2.jpg");
        }
        else if (slideCount == 3) {
            showImage.attr("src", "images/image-product-3.jpg");
        }
        else if (slideCount == 4) {
            showImage.attr("src", "images/image-product-4.jpg");
        }
    }
})


