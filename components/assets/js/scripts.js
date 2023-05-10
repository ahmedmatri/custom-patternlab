let $ = jQuery;
$(document).ready(function () {
  SiteInit.menuTrigger();
  SiteInit.menuMobileTrigger();
});
var SiteInit = SiteInit || {};
SiteInit = {
  menuTrigger: function () {
    $('.nav-main').on('mouseover mouseleave', 'a', function (e) {
      target = $(this).attr('id');
      if ($('.' + target).length > 0) {
        if (e.type === 'mouseover') {
          $('.' + target).show();
          $('.header__dropdown')
            .height($('.' + target).outerHeight())
            .addClass('is-active');
        } else {
          $('.header__dropdown').removeClass('is-active').height('0');
          $('.' + target).hide();
        }
      }
    });

    $('.header').on('mouseover mouseleave', '.header__dropdown', function (e) {
      if (e.type == 'mouseover') {
        $(this)
          .height($('.' + target).outerHeight())
          .addClass('is-active');
        $('.' + target).show();
      } else {
        $(this).height('0').removeClass('is-active');
        $('.' + target).hide();
      }
    });
    /* main menu js start here */
    if ($('.nav-main-toggle').length > 0) {
      $('.nav-main-toggle').click(function () {
        $('.mainMenu').removeClass('closed');
      });
      $('.close-btn').click(function () {
        $('.mainMenu').addClass('closed');
      });
    }
  },
  menuMobileTrigger: function () {
    $('.nav-main ul li').each(function () {
      if (!$(this).hasClass('no-dropdown') && !$(this).find('.nav-link').length)
        $(this).append('<span class="nav-link"></span>');
    });

    $(document).click(function (event) {
      if (!$(event.target).is('.header__dropdown *, .header__dropdown')) {
        $('.header__dropdown').removeClass('is-active');
        $('.header-block').hide();
        $('body').removeClass('no-scroll');
      }
    });

    $('body .nav-main').on('click', '.nav-link', function (e) {
      var target = $(this).prev('a').attr('id');
      //$('.header-block').hide();
      if ($('.' + target).is(':visible')) {
        $('.header__dropdown').removeClass('is-active');
        $('.header-block').hide();
        $('body').removeClass('no-scroll');
      } else {
        $('.header-block').hide();
        $('.' + target).show();
        $('.header__dropdown').addClass('is-active');
        $('body').addClass('no-scroll');
      }
      e.stopPropagation();
    });
  },
};

$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $('header, .wrapper').addClass('sticky');
  } else {
    $('header, .wrapper').removeClass('sticky');
  }
});

/* main menu js end here */

/* Event slider js start here */
if ($('.eventList__slide').length > 0) {
  $('.eventList__slide').slick({
    dotsClass: 'slider__dots',
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1500,
    speed: 1000,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          centerMode: true,
          centerPadding: '30px',
        },
      },
    ],
  });
}
/* Event slider js end here */
/* News slider js start here */
if ($('.newsList__slide').length > 0) {
  $('.newsList__slide').slick({
    dotsClass: 'slider__dots',
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1500,
    speed: 1000,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          centerMode: true,
          centerPadding: '30px',
        },
      },
    ],
  });
}
/* News slider js end here */
/* Modern Slider slider js start here */

if ($('.modernSlider').length > 0) {
  $('.modernSlider').slick({
    dotsClass: 'slider__dots',
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1500,
    speed: 1000,
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
}
/* Modern Slider slider js end here */