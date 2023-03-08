let $ = jQuery;

$('.nav-main').on('mouseover mouseleave', 'a', function (e) {
  target = $(this).attr("id");
  if ($('.' + target).length > 0) {
    if (e.type === 'mouseover') {
      $('.' + target).show();
      $('.header__dropdown').height($('.' + target).outerHeight()).addClass('is-active');
    } else {
      $('.header__dropdown').removeClass('is-active').height('0');
      $('.' + target).hide();
    }
  }
});

$('.header').on('mouseover mouseleave', '.header__dropdown', function (e) {
  if (e.type == 'mouseover') {
    $(this).height($('.' + target).outerHeight()).addClass('is-active');
    $('.' + target).show();
  } else {
    $(this).height('0').removeClass('is-active');
    $('.' + target).hide();
  }
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 1) {
		$('header, .wrapper').addClass("sticky");
	}
	else {
		$('header, .wrapper').removeClass("sticky");
	}
});
/* vertical tabs js start here */
if ($(".verticaltabs_clg").length > 0) {
    $(function() {
      const tabLinks = $('.verticaltabs_clg .tab-links li a');
      tabLinks.click(function(event) {
        event.preventDefault();
        let $this = $(this);
        
        $('.verticaltabs_clg .tab-links a.active, .verticaltabs_clg .verticaltabs__cont.active').removeClass('active');
        $this.addClass('active');
        $($this.attr('href')).addClass('active');
      });
    });
  }

  if ($(".verticaltabs_res").length > 0) {
    $(function() {
      const tabLinks = $('.verticaltabs_res .tab-links li a');
      tabLinks.click(function(event) {
        event.preventDefault();
        let $this = $(this);
        
        $('.verticaltabs_res .tab-links a.active, .verticaltabs_res .verticaltabs__cont.active').removeClass('active');
        $this.addClass('active');
        $($this.attr('href')).addClass('active');
      });
    });
  }

  if ($(".verticaltabs_cen").length > 0) {
    $(function() {
      const tabLinks = $('.verticaltabs_cen .tab-links li a');
      tabLinks.click(function(event) {
        event.preventDefault();
        let $this = $(this);
        
        $('.verticaltabs_cen .tab-links a.active, .verticaltabs_cen .verticaltabs__cont.active').removeClass('active');
        $this.addClass('active');
        $($this.attr('href')).addClass('active');
      });
    });
  }
  /* vertical tabs js end here */

  /* Event slider js start here */
  if ($(".eventList__slide").length > 0) {
    $(".eventList__slide").slick({
      dotsClass: "slider__dots",
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
            dots: false
          }
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
            }
          }
      ]
    });
  }
/* Event slider js start here */
if ($(".newsList__slide").length > 0) {
  $(".newsList__slide").slick({
    dotsClass: "slider__dots",
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
          dots: false
        }
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
          }
        }
    ]
  });
}