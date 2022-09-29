# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [User Interface](#user-interface)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size.(Challenge intended for Mobile and Desktop devices only.)
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### User Interface

![](images/readme/homepage.png)

### Links

- Solution URL: [Click here](https://e-commerce-product-page-gamma.vercel.app/)
- Live Site URL: [Click here](https://e-commerce-product-page-gamma.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Bootstrap grid
- Flexbox
- CSS Grid
- JavaScrit/Jquery

### What I learned

When developing this Space tourism multi page website project, these new things I have learned.

-How e-commerce website's frontend works
-Also, this is my very first time that using **UI Popups** instead of **Browser alerts**. The advantage of UI Popups instead of alrt is that UI Popup far more attractive than regular browser alert. I used UI Popups to indicate following scenarios.
* When user clicking **Add to cart** button without choosing product count.
* When user deducting product counter value **Less than 0**.

-After viewing a Popup, I used **setTimeOut** function to automatically hide the popups after certain amount of time. Code snippet is right below.
```JS
setTimeout(() => {
    quantPop.style.display = 'none';
    quantPop.addClass("popup-hide");
}, 2000);
```
-Most importantly, this my very first project that I used my own method for navigating image slideshow. It's a bit repetative and entry level method but I intend to modify the code in future.

### Continued development

As I mentioned earlier, the main point I should improve is the **Slider navigation** JS code segment. Apart from that following things should improve too.
* I have used some CSS media queries that usually not using when developing a website. The reason to do that is, I noticed some UI errors on external monitors with 1920px X 1080px displays. In order to resolve those I added **min-width=1900px** media query.

### Useful resources

- [Borislav Hadzhiev](https://bobbyhadz.com/blog/javascript-hide-element-after-few-seconds) - This helped me for showing the way to hide the popups automatically.
- [Stack Overflow](https://stackoverflow.com/questions/820951/hide-div-after-a-few-seconds) - I followed this thread also. This is the jQuery version of above **setTimeOut** function.

## Author

- Website - [SLGPLAY](https://www.slgplay.net)
- Frontend Mentor - [@T-Induwara](https://www.frontendmentor.io/profile/T-Induwara)
- Github - [@T-Induwara](https://github.com/T-Induwara)
- LinkedIn - [@t-induwara](https://www.linkedin.com/in/t-induwara/)

## Acknowledgments

I want to give thanks specially to [Borislav Hadzhiev](https://bobbyhadz.com/blog/javascript-hide-element-after-few-seconds) website for helping me to get the code snippet that used to create automatically popup hiding effect.
