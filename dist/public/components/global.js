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