$(document).ready(function(){
    $("#home__slider").owlCarousel({
        items: 1,
        loop: true,
        autoplayTimeout: 3000,
        autoplay: true,
        smartSpeed: 950,
    });
    const cerSlider = $('#sertificates__slider');
    $('#sertificates__slider').owlCarousel({
        items: 5,
        margin: 30,
        loop: true, 
    });
    $('.custom-next').click(function() {
        cerSlider.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.custom-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        cerSlider.trigger('prev.owl.carousel', [300]);
    });
    const prodSlider = $('.products__slider');
    $('.products__slider').owlCarousel({
        items: 5,
        margin: 30,
        loop: true, 
        dots: false,
        autoplayTimeout: 3000,
        autoplay: true,
        smartSpeed: 950,
    });
    $('.custom-next-prod').click(function() {
        prodSlider.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.custom-prev-prod').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        prodSlider.trigger('prev.owl.carousel', [300]);
    });
    // Табы на странице
    $('ul.products-tabs__caption').on('click', 'li:not(.products-tabs__btn_active)', function() {
        $(this)
          .addClass('products-tabs__btn_active').siblings().removeClass('products-tabs__btn_active')
          .closest('div.products-tabs').find('div.products-tabs__content').removeClass('products-tabs__content_active').eq($(this).index()).addClass('products-tabs__content_active');
      });

      const pagesSilder = $('#pages__slider');
    $('#pages__slider').owlCarousel({
        items: 1,
        loop: false, 
    });
    const laminateSilder = $('#laminate__slider');
    $('#laminate__slider').owlCarousel({
        items: 1,
        loop: true, 
        autoplayTimeout: 3000,
        autoplay: true,
        smartSpeed: 950,
    });
    const extSilder = $('#ext__slider');
    $('#ext__slider').owlCarousel({
        items: 1,
        loop: true, 
        autoplayTimeout: 3000,
        autoplay: true,
        smartSpeed: 950,
    });
    const otherSilder = $('#other__slider');
    $('#other__slider').owlCarousel({
        items: 1,
        loop: true, 
        autoplayTimeout: 3000,
        autoplay: true,
        smartSpeed: 950,
    });
    const lamMobSilder = $('#lamMobile__slider');
    $('#lamMobile__slider').owlCarousel({
        items: 1,
        loop: true, 
        autoplayTimeout: 3000,
        autoplay: true,
        smartSpeed: 950,
    });
  });
  