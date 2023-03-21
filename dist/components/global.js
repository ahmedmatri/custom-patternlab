window.addEventListener('load', () => {
  //Home Banner
  let slideWrapper = $('.slider-home'),
    iframes = slideWrapper.find('.embed-player'),
    lazyImages = slideWrapper.find('.slide-image'),
    lazyCounter = 0;
  // POST commands to YouTube or Vimeo API
  function postMessageToPlayer(player, command) {
    if (player == null || command == null) return;
    player.contentWindow.postMessage(JSON.stringify(command), '*');
  }
  // When the slide is changing
  function playPauseVideo(slick, control) {
    let currentSlide, slideType, startTime, player, video;

    currentSlide = slick.find('.slick-current .slider-home__item');
    slideType = currentSlide.attr('class').split(' ')[1];
    player = currentSlide.find('iframe').get(0);
    startTime = currentSlide.data('video-start');

    if (slideType === 'vimeo') {
      switch (control) {
        case 'play':
          if (
            startTime != null &&
            startTime > 0 &&
            !currentSlide.hasClass('started')
          ) {
            currentSlide.addClass('started');
            postMessageToPlayer(player, {
              method: 'setCurrentTime',
              value: startTime,
            });
          }
          postMessageToPlayer(player, {
            method: 'play',
            value: 1,
          });
          break;
        case 'pause':
          postMessageToPlayer(player, {
            method: 'pause',
            value: 1,
          });
          break;
      }
    } else if (slideType === 'youtube') {
      switch (control) {
        case 'play':
          postMessageToPlayer(player, {
            event: 'command',
            func: 'mute',
          });
          postMessageToPlayer(player, {
            event: 'command',
            func: 'playVideo',
          });
          break;
        case 'pause':
          postMessageToPlayer(player, {
            event: 'command',
            func: 'pauseVideo',
          });
          break;
      }
    } else if (slideType === 'video') {
      video = currentSlide.children('video').get(0);
      if (video != null) {
        if (control === 'play') {
          video.play();
        } else {
          video.pause();
        }
      }
    }
  }
  // Resize player
  function resizePlayer(iframes, ratio) {
    if (!iframes[0]) return;
    var win = $('.slider-home'),
      width = win.width(),
      playerWidth,
      height = win.height(),
      playerHeight,
      ratio = ratio || 16 / 9;

    iframes.each(function () {
      let current = $(this);
      if (width / ratio < height) {
        playerWidth = Math.ceil(height * ratio);
        current
          .width(playerWidth)
          .height(height)
          .css({
            left: (width - playerWidth) / 2,
            top: 0,
          });
      } else {
        playerHeight = Math.ceil(width / ratio);
        current
          .width(width)
          .height(playerHeight)
          .css({
            left: 0,
            top: (height - playerHeight) / 2,
          });
      }
    });
  }
  // DOM Ready
  $(function () {
    // Initialize
    slideWrapper.on('init', function (slick) {
      slick = $(slick.currentTarget);
      setTimeout(function () {
        playPauseVideo(slick, 'play');
      }, 1000);
      resizePlayer(iframes, 16 / 9);
    });
    slideWrapper.on('beforeChange', function (event, slick) {
      slick = $(slick.$slider);
      playPauseVideo(slick, 'pause');
    });
    slideWrapper.on('afterChange', function (event, slick) {
      slick = $(slick.$slider);
      playPauseVideo(slick, 'play');
    });
    slideWrapper.on('lazyLoaded', function (event, slick, image, imageSource) {
      lazyCounter++;
      if (lazyCounter === lazyImages.length) {
        lazyImages.addClass('show');
        // slideWrapper.slick("slickPlay");
      }
    });

    //start the slider
    slideWrapper.slick({
      // fade:true,
      autoplaySpeed: 4000,
      lazyLoad: 'progressive',
      speed: 600,
      arrows: false,
      dots: true,
      autoplay: false,
      cssEase: 'cubic-bezier(0.87, 0.03, 0.41, 0.9)',
    });
  });
  // Resize event
  $(window).on('resize.slickVideoPlayer', function () {
    resizePlayer(iframes, 16 / 9);
  });
});

function css_browser_selector_fix(u) {
  var ua = u.toLowerCase(),
    is = function (t) {
      return ua.indexOf(t) > -1;
    },
    g = 'gecko',
    w = 'webkit',
    s = 'safari',
    c = 'chrome',
    o = 'opera',
    m = 'mobile',
    v = 0,
    r = window.devicePixelRatio
      ? (window.devicePixelRatio + '').replace('.', '_')
      : '1';
  var res = [
    /* IE */
    !/opera|webtv/.test(ua) && /msie\s(\d+)/.test(ua) && (v = RegExp.$1 * 1)
      ? 'ie ie' +
        v +
        (v == 6 || v == 7
          ? ' ie67 ie678 ie6789'
          : v == 8
          ? ' ie678 ie6789'
          : v == 9
          ? ' ie6789 ie9m'
          : v > 9
          ? ' ie9m'
          : '')
      : /* EDGE */
      /edge\/(\d+)\.(\d+)/.test(ua) && (v = [RegExp.$1, RegExp.$2])
      ? 'ie ie' + v[0] + ' ie' + v[0] + '_' + v[1] + ' ie9m edge'
      : /* IE 11 */
      /trident\/\d+.*?;\s*rv:(\d+)\.(\d+)\)/.test(ua) &&
        (v = [RegExp.$1, RegExp.$2])
      ? 'ie ie' + v[0] + ' ie' + v[0] + '_' + v[1] + ' ie9m'
      : /* FF */
      /firefox\/(\d+)\.(\d+)/.test(ua) && (re = RegExp)
      ? g + ' ff ff' + re.$1 + ' ff' + re.$1 + '_' + re.$2
      : is('gecko/')
      ? g
      : /* Opera - old */
      is(o)
      ? 'old' +
        o +
        (/version\/(\d+)/.test(ua)
          ? ' ' + o + RegExp.$1
          : /opera(\s|\/)(\d+)/.test(ua)
          ? ' ' + o + RegExp.$2
          : '')
      : /* K */
      is('konqueror')
      ? 'konqueror'
      : /* Black Berry */
      is('blackberry')
      ? m + ' blackberry'
      : /* Chrome */
      is(c) || is('crios')
      ? w + ' ' + c
      : /* Iron */
      is('iron')
      ? w + ' iron'
      : /* Safari */
      !is('cpu os') && is('applewebkit/')
      ? w + ' ' + s
      : /* Mozilla */
      is('mozilla/')
      ? g
      : '',
    /* Android */
    is('android') ? m + ' android' : '',
    /* Tablet */
    is('tablet') ? 'tablet' : '',
    /* blink or webkit engine browsers */
    /* Opera */
    is('opr/') ? o : '',
    /* Yandex */
    is('yabrowser') ? 'yandex' : '',
    /* Machine */
    is('j2me')
      ? m + ' j2me'
      : is('ipad; u; cpu os')
      ? m + ' chrome android tablet'
      : is('ipad;u;cpu os')
      ? m + ' chromedef android tablet'
      : is('iphone')
      ? m + ' ios iphone'
      : is('ipod')
      ? m + ' ios ipod'
      : is('ipad')
      ? m + ' ios ipad tablet'
      : is('mac')
      ? 'mac'
      : is('darwin')
      ? 'mac'
      : is('webtv')
      ? 'webtv'
      : is('win')
      ? 'win' + (is('windows nt 6.0') ? ' vista' : '')
      : is('freebsd')
      ? 'freebsd'
      : is('x11') || is('linux')
      ? 'linux'
      : '',
    /* Ratio (Retina) */
    r != '1' ? ' retina ratio' + r : '',
    'js portrait',
  ].join(' ');
  if (window.jQuery && !window.jQuery.browser) {
    window.jQuery.browser = v ? { msie: 1, version: v } : {};
  }
  return res;
}
(function (d, w) {
  var _c = css_browser_selector_fix(navigator.userAgent);
  var h = d.documentElement;
  h.className += ' ' + _c;
  var _d = _c.replace(/^\s*|\s*$/g, '').split(/ +/);
  w.CSSBS = 1;
  for (var i = 0; i < _d.length; i++) {
    w['CSSBS_' + _d[i]] = 1;
  }
  var _de = function (v) {
    return d.documentElement[v] || d.body[v];
  };
  if (w.jQuery) {
    (function ($) {
      var p = 'portrait',
        l = 'landscape';
      var m = 'smartnarrow',
        mw = 'smartwide',
        t = 'tabletnarrow',
        tw = 'tabletwide',
        ac = m + ' ' + mw + ' ' + t + ' ' + tw + ' pc';
      var $h = $(h);
      var to = 0,
        cw = 0;

      /* ie7 cpu 100% fix */
      function CSSSelectorUpdateSize() {
        if (to != 0) return;
        try {
          var _cw = _de('clientWidth'),
            _ch = _de('clientHeight');
          if (_cw > _ch) {
            $h.removeClass(p).addClass(l);
          } else {
            $h.removeClass(l).addClass(p);
          }
          if (_cw == cw) return;
          cw = _cw;
          //clearTimeout(to);
        } catch (e) {}
        to = setTimeout(CSSSelectorUpdateSize_, 100);
      }

      function CSSSelectorUpdateSize_() {
        try {
          $h.removeClass(ac);
          $h.addClass(
            cw <= 360
              ? m
              : cw <= 640
              ? mw
              : cw <= 768
              ? t
              : cw <= 1024
              ? tw
              : 'pc',
          );
        } catch (e) {}
        to = 0;
      }

      if (w.CSSBS_ie) {
        setInterval(CSSSelectorUpdateSize, 1000);
      } else {
        $(w)
          .on('resize orientationchange', CSSSelectorUpdateSize)
          .trigger('resize');
      }
      $(w).ready(CSSSelectorUpdateSize);
    })(w.jQuery);
  }
})(document, window);

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
/* Event slider js start here */
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