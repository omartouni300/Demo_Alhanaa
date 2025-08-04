$(window).on('load', function () {
  // تهيئة الكاروسيل
  let owl = $('.product-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    dots: false, // مهم لأنك ضايف النقاط يدويًا
    autoplay: true,
    autoplayTimeout: 25000,
    smartSpeed: 25000,
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

  // التحكم في السلايدر عند الـ hover
  $('.product-item').on('mouseenter', function () {
    owl.trigger('stop.owl.autoplay');
  });

  $('.product-item').on('mouseleave', function () {
    owl.trigger('play.owl.autoplay', [1000]);
  });

  // تبديل الصور عند اللمس على الموبايل
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

  // إعداد data-slide لكل dot
  $('.owl-dot').each(function(index) {
    $(this).attr('data-slide', index);
  });

  // عند الضغط على أي dot، نروح للسلايد المناسبة
  $('.owl-dot').on('click', function () {
    const slideTo = parseInt($(this).data('slide'));
    owl.trigger('to.owl.carousel', [slideTo, 700]); // 700ms حركة
  });

  // تحديث الـ active class على النقاط مع تغيير السلايد
  owl.on('changed.owl.carousel', function (event) {
    let index = event.item.index - event.relatedTarget._clones.length / 2;
    let count = event.item.count;
    index = (index % count + count) % count;

    $('.owl-dot').removeClass('active');
    $('.owl-dot').eq(index).addClass('active');
  });
});
