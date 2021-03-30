(function ($) {
  $(document).ready(function () {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      autoplay: {
        delay: 2500,
      },
      breakpoints: {
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
      }
    });

    var turnround = new Swiper('.turnround', {
      spaceBetween:0,
      slidesPerView:1,
      loopedSlides:1, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
     
    });
    var galleryTop = new Swiper('.video-frame', {
      spaceBetween:0,
      autoplay: {
        delay: 3000,
      },
      loopedSlides:1, //looped slides should be the same
      thumbs: {
        swiper: turnround,
      },
    });
  });
})(jQuery);
