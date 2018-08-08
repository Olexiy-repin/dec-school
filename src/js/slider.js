(() => {
  $(".sec-04__slider").owlCarousel({
   items : 1,
   itemsCustom : true,

   loop: true,
   nav: true,
   navText: ["<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.175 477.175'><path d='M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z'/></svg>", "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.175 477.175'><path d='M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z'/></svg>"],
   dots: false,
   autoplay: true,
   autoplayTimeout: 5000,
   animateIn: "fadeIn",
   animateOut: "fadeOut",
   mouseDrag: false,
   autoHeight : false,

    margin : 5
  });

  $(".sec-04__slider").on('changed.owl.carousel', function (event) {
      let index = event.item.index;

      if (index == 2) {
        $('.sec-04__slider-nav .active').text('01');
      } else if (index == 3) {
        $('.sec-04__slider-nav .active').text('02');
      } else if (index == 4) {
        $('.sec-04__slider-nav .active').text('03');
      } else if (index == 5) {
        $('.sec-04__slider-nav .active').text('04');
      } else if (index == 6) {
        $('.sec-04__slider-nav .active').text('01');
      }
    });

    let owlNext = $('.sec-01 .owl-nav .owl-next');
    let owlPrev = $('.sec-01 .owl-nav .owl-prev');
    let index = 1;

    owlNext.on('click', function (event) {
        index++;
        if (index > 4) {
          $('.sec-04__slider-nav .active').text((index - 4));
          index = 1;
        } else {
          $('.sec-04__slider-nav .active').text(index);
        }
    });

    owlPrev.on('click', function (event) {
        index--;
        if (index == 0) {
          $('.sec-04__slider-nav .active').text((index + 4));
          index = 4;
        } else {
          $('.sec-04__slider-nav .active').text(index);
        }
    });
})();

(() => {
  $(".sec-06__slider").owlCarousel({
   items : 1,
   itemsCustom : true,

   loop: true,
   nav: true,
   navText: ["<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.175 477.175'><path d='M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z'/></svg>", "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.175 477.175'><path d='M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z'/></svg>"],
   dots: false,
   autoplay: true,
   autoplayTimeout: 5000,
   animateIn: "fadeIn",
   animateOut: "fadeOut",
   autoHeight : false,

    margin : 5
  });

  $(".sec-06__slider").on('changed.owl.carousel', function (event) {
      let index = event.item.index;

      if (index == 3) {
        $('.sec-06__slider-nav .active').text('01');
      } else if (index == 4) {
        $('.sec-06__slider-nav .active').text('02');
      } else if (index == 5) {
        $('.sec-06__slider-nav .active').text('03');
      } else if (index == 6) {
        $('.sec-06__slider-nav .active').text('04');
      } else if (index == 7) {
        $('.sec-06__slider-nav .active').text('05');
      } else if (index == 8) {
        $('.sec-06__slider-nav .active').text('06');
      } else if (index == 9) {
        $('.sec-06__slider-nav .active').text('01');
      }
    });

    let owlNext = $('.sec-01 .owl-nav .owl-next');
    let owlPrev = $('.sec-01 .owl-nav .owl-prev');
    let index = 1;

    owlNext.on('click', function (event) {
        index++;
        if (index > 6) {
          $('.sec-06__slider-nav .active').text((index - 6));
          index = 1;
        } else {
          $('.sec-06__slider-nav .active').text(index);
        }
    });

    owlPrev.on('click', function (event) {
        index--;
        if (index == 0) {
          $('.sec-06__slider-nav .active').text((index + 6));
          index = 6;
        } else {
          $('.sec-06__slider-nav .active').text(index);
        }
    });
})();

(() => {
  $(".sec-08__slider").owlCarousel({
   items : 1,
   itemsCustom : true,

   loop: true,
   nav: false,
   navText: ["<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.175 477.175'><path d='M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z'/></svg>", "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.175 477.175'><path d='M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z'/></svg>"],
   dots: false,
   autoplay: true,
   autoplayTimeout: 5000,
   animateIn: "fadeIn",
   animateOut: "fadeOut",
   autoHeight : false,

    margin : 50
  });
})();



$('.scroll').click(function() {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
});
