$(document).ready(function () {
  let owl = $('.product-carousel').owlCarousel({
    loop: true,
    margin: 25,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1200,
    autoplayHoverPause: true,
    touchDrag: true,
    mouseDrag: true,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 4 },
      1200: { items: 5 }
    }
  });

  // تأكد إن النقاط ظهرت
  setTimeout(() => {
    const dots = document.querySelectorAll('.owl-dot');
    console.log("🔘 عدد النقاط:", dots.length);
    if (dots.length === 0) {
      console.warn("🔁 إعادة تحميل الكاروسيل");
      owl.trigger('refresh.owl.carousel');
    }
  }, 500);

  $('.product-item').on('mouseenter', function () {
    owl.trigger('stop.owl.autoplay');
  });

  $('.product-item').on('mouseleave', function () {
    owl.trigger('play.owl.autoplay', [1000]);
  });

  $('.product-item').on('touchstart', function () {
    const imgDefault = $(this).find('.default-img');
    const imgHover = $(this).find('.hover-img');
    imgDefault.css('opacity', '0');
    imgHover.css('opacity', '1');
    owl.trigger('stop.owl.autoplay');
  });

  $('.product-item').on('touchend', function () {
    const imgDefault = $(this).find('.default-img');
    const imgHover = $(this).find('.hover-img');
    imgDefault.css('opacity', '1');
    imgHover.css('opacity', '0');
    owl.trigger('play.owl.autoplay', [1000]);
  });
});
