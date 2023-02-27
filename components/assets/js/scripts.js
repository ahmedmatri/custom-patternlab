/* vertical tabs js start here */

if ($(".verticaltabs_clg").length > 0) {
    $(function() {
      const tabLinks = $('.verticaltabs_clg .tab-links li a');
      tabLinks.click(function(event) {
        event.preventDefault();
        var $this = $(this);
        
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
        var $this = $(this);
        
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
        var $this = $(this);
        
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

  // $('.eventList__slide').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   dots: true,
  //   centerMode: true,
  //   focusOnSelect: true,
  //   arrows: false,
  //   dots: false,
  // });
   /* Event slider js end here */
