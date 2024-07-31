// to get current year
function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// owl carousel

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
    },
  },
});



// login/signup js

document
  .querySelector(".log-sign-img__btn")
  .addEventListener("click", function () {
    document
      .querySelector(".log-sign-cont")
      .classList.toggle("log-sign-s--signup");
  });



  
(function ($) {
  "use strict";

  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });
});



//products info details

$(document).ready(function () {
  $('#lightSlider').lightSlider({
    item: 1,
    loop: true,
    slideMove: 1,
    slideMargin: 10,
    enableDrag: true,
    rtl: true, // This enables RTL mode for LightSlider
    currentPagerPosition: 'middle',
    pager: true,
    controls: true,
    auto: true,
    pause: 4000,
    speed: 1000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          item: 1,
          slideMove: 1,
          slideMargin: 6,
        },
      },
      {
        breakpoint: 480,
        settings: {
          item: 1,
          slideMove: 1,
        },
      },
    ],
  });
});
