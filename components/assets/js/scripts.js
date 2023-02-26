/* vertical tabs 2 js start here */

if ($(".verticaltabs2").length > 0) {
    $(function() {
      const tabLinks = $('.verticaltabs2 #tab-links li a');
      tabLinks.click(function(event) {
        var $this = $(this);
        event.preventDefault();
        $('.verticaltabs2 #tab-links a.active, .verticaltabs2 .verticaltabs2__cont.active').removeClass('active');
        $this.addClass('active');
        $($this.attr('href')).addClass('active');
      });
    });
  }
  /* vertical tabs 2 js end here */