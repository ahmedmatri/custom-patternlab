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
      arrows: true,
      dots: true,
      autoplay: false,
      cssEase: 'cubic-bezier(0.87, 0.03, 0.41, 0.9)',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            dots: false,
          },
        },
      ],
    });
  });
  // Resize event
  $(window).on('resize.slickVideoPlayer', function () {
    resizePlayer(iframes, 16 / 9);
  });
});

/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(a){if(a instanceof Date)return a;if(String(a).match(g))return String(a).match(/^[0-9]*$/)&&(a=Number(a)),String(a).match(/\-/)&&(a=String(a).replace(/\-/g,"/")),new Date(a);throw new Error("Couldn't cast `"+a+"` to a date object.")}function c(a){var b=a.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(b)}function d(a){return function(b){var d=b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(d)for(var f=0,g=d.length;f<g;++f){var h=d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),j=c(h[0]),k=h[1]||"",l=h[3]||"",m=null;h=h[2],i.hasOwnProperty(h)&&(m=i[h],m=Number(a[m])),null!==m&&("!"===k&&(m=e(l,m)),""===k&&m<10&&(m="0"+m.toString()),b=b.replace(j,m.toString()))}return b=b.replace(/%%/,"%")}}function e(a,b){var c="s",d="";return a&&(a=a.replace(/(:|;|\s)/gi,"").split(/\,/),1===a.length?c=a[0]:(d=a[0],c=a[1])),Math.abs(b)>1?c:d}var f=[],g=[],h={precision:100,elapse:!1,defer:!1};g.push(/^[0-9]*$/.source),g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g=new RegExp(g.join("|"));var i={Y:"years",m:"months",n:"daysToMonth",d:"daysToWeek",w:"weeks",W:"weeksToMonth",H:"hours",M:"minutes",S:"seconds",D:"totalDays",I:"totalHours",N:"totalMinutes",T:"totalSeconds"},j=function(b,c,d){this.el=b,this.$el=a(b),this.interval=null,this.offset={},this.options=a.extend({},h),this.instanceNumber=f.length,f.push(this),this.$el.data("countdown-instance",this.instanceNumber),d&&("function"==typeof d?(this.$el.on("update.countdown",d),this.$el.on("stoped.countdown",d),this.$el.on("finish.countdown",d)):this.options=a.extend({},h,d)),this.setFinalDate(c),this.options.defer===!1&&this.start()};a.extend(j.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var a=this;this.update(),this.interval=setInterval(function(){a.update.call(a)},this.options.precision)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},toggle:function(){this.interval?this.stop():this.start()},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this),f[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(a){this.finalDate=b(a)},update:function(){if(0===this.$el.closest("html").length)return void this.remove();var b,c=void 0!==a._data(this.el,"events"),d=new Date;b=this.finalDate.getTime()-d.getTime(),b=Math.ceil(b/1e3),b=!this.options.elapse&&b<0?0:Math.abs(b),this.totalSecsLeft!==b&&c&&(this.totalSecsLeft=b,this.elapsed=d>=this.finalDate,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),weeksToMonth:Math.floor(this.totalSecsLeft/60/60/24/7)%4,months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-d.getFullYear()),totalDays:Math.floor(this.totalSecsLeft/60/60/24),totalHours:Math.floor(this.totalSecsLeft/60/60),totalMinutes:Math.floor(this.totalSecsLeft/60),totalSeconds:this.totalSecsLeft},this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent("update"):(this.stop(),this.dispatchEvent("finish")))},dispatchEvent:function(b){var c=a.Event(b+".countdown");c.finalDate=this.finalDate,c.elapsed=this.elapsed,c.offset=a.extend({},this.offset),c.strftime=d(this.offset),this.$el.trigger(c)}}),a.fn.countdown=function(){var b=Array.prototype.slice.call(arguments,0);return this.each(function(){var c=a(this).data("countdown-instance");if(void 0!==c){var d=f[c],e=b[0];j.prototype.hasOwnProperty(e)?d[e].apply(d,b.slice(1)):null===String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(d.setFinalDate.call(d,e),d.start()):a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,e))}else new j(this,b[0],b[1])})}});
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
$('#countdown')
  .countdown('2024/10/10')
  .on('update.countdown', function (event) {
    var $this = $(this).html(
      event.strftime(
        '' +
          '<div class="countdown_list"> <span class="countdown--days number">%-d</span> <span class="countdown--days-text smalltext">day%!d</span></div>' +
          '<div class="countdown_list"> <span class="countdown--hours number">%H</span> <span class="countdown--hours-text smalltext">Hours </span></div>' +
          '<div class="countdown_list"> <span class="countdown--minutes number">%M</span> <span class="countdown--minutes-text smalltext"> Minutes </span></div>' +
          '<div class="countdown_list"> <span class="countdown--seconds number">%S</span> <span class="countdown--seconds-text smalltext"> Seconds </span></div>',
      ),
    );
  });
