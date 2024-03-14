$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    dots: true,
    dotsEach: true,
    center: true,
    margin: 35,
    nav: true,
    navText: ["<div class='icon-prev slider__button--prev'></div>", "<div class='icon-next slider__button--next'></div>"],
    dots: true,
    stagePadding: 34,
    lazyLoad:true,
    responsive: {
      1025: {
        items: 3,
      }
    }
  });
});
