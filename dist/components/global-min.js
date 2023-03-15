function css_browser_selector_fix(e){var i=e.toLowerCase(),o=function(e){return i.indexOf(e)>-1},s="gecko",t="webkit",r="chrome",a="opera",n="mobile",d=0,l=window.devicePixelRatio?(window.devicePixelRatio+"").replace(".","_"):"1",c=[!/opera|webtv/.test(i)&&/msie\s(\d+)/.test(i)&&(d=1*RegExp.$1)?"ie ie"+d+(6==d||7==d?" ie67 ie678 ie6789":8==d?" ie678 ie6789":9==d?" ie6789 ie9m":d>9?" ie9m":""):/edge\/(\d+)\.(\d+)/.test(i)&&(d=[RegExp.$1,RegExp.$2])?"ie ie"+d[0]+" ie"+d[0]+"_"+d[1]+" ie9m edge":/trident\/\d+.*?;\s*rv:(\d+)\.(\d+)\)/.test(i)&&(d=[RegExp.$1,RegExp.$2])?"ie ie"+d[0]+" ie"+d[0]+"_"+d[1]+" ie9m":/firefox\/(\d+)\.(\d+)/.test(i)&&(re=RegExp)?s+" ff ff"+re.$1+" ff"+re.$1+"_"+re.$2:o("gecko/")?s:o(a)?"old"+a+(/version\/(\d+)/.test(i)?" "+a+RegExp.$1:/opera(\s|\/)(\d+)/.test(i)?" "+a+RegExp.$2:""):o("konqueror")?"konqueror":o("blackberry")?n+" blackberry":o(r)||o("crios")?t+" "+r:o("iron")?t+" iron":!o("cpu os")&&o("applewebkit/")?t+" safari":o("mozilla/")?s:"",o("android")?n+" android":"",o("tablet")?"tablet":"",o("opr/")?a:"",o("yabrowser")?"yandex":"",o("j2me")?n+" j2me":o("ipad; u; cpu os")?n+" chrome android tablet":o("ipad;u;cpu os")?n+" chromedef android tablet":o("iphone")?n+" ios iphone":o("ipod")?n+" ios ipod":o("ipad")?n+" ios ipad tablet":o("mac")?"mac":o("darwin")?"mac":o("webtv")?"webtv":o("win")?"win"+(o("windows nt 6.0")?" vista":""):o("freebsd")?"freebsd":o("x11")||o("linux")?"linux":"","1"!=l?" retina ratio"+l:"","js portrait"].join(" ");return window.jQuery&&!window.jQuery.browser&&(window.jQuery.browser=d?{msie:1,version:d}:{}),c}!function(e,i){var o=css_browser_selector_fix(navigator.userAgent),s=e.documentElement;s.className+=" "+o;var t=o.replace(/^\s*|\s*$/g,"").split(/ +/);i.CSSBS=1;for(var r=0;r<t.length;r++)i["CSSBS_"+t[r]]=1;var a=function(i){return e.documentElement[i]||e.body[i]};i.jQuery&&function(e){var o="portrait",t="landscape",r="smartnarrow",n="smartwide",d="tabletnarrow",l="tabletwide",c=r+" "+n+" "+d+" "+l+" pc",p=e(s),h=0,u=0;function w(){if(0==h){try{var e=a("clientWidth");if(e>a("clientHeight")?p.removeClass(o).addClass(t):p.removeClass(t).addClass(o),e==u)return;u=e}catch(e){}h=setTimeout(g,100)}}function g(){try{p.removeClass(c),p.addClass(u<=360?r:u<=640?n:u<=768?d:u<=1024?l:"pc")}catch(e){}h=0}i.CSSBS_ie?setInterval(w,1e3):e(i).on("resize orientationchange",w).trigger("resize"),e(i).ready(w)}(i.jQuery)}(document,window);let $=jQuery;$(document).ready(function(){SiteInit.menuTrigger(),SiteInit.menuMobileTrigger()});var SiteInit=SiteInit||{};SiteInit={menuTrigger:function(){$(".nav-main").on("mouseover mouseleave","a",function(e){target=$(this).attr("id"),$("."+target).length>0&&("mouseover"===e.type?($("."+target).show(),$(".header__dropdown").height($("."+target).outerHeight()).addClass("is-active")):($(".header__dropdown").removeClass("is-active").height("0"),$("."+target).hide()))}),$(".header").on("mouseover mouseleave",".header__dropdown",function(e){"mouseover"==e.type?($(this).height($("."+target).outerHeight()).addClass("is-active"),$("."+target).show()):($(this).height("0").removeClass("is-active"),$("."+target).hide())}),$(".nav-main-toggle").length>0&&($(".nav-main-toggle").click(function(){$(".mainMenu").removeClass("closed")}),$(".close-btn").click(function(){$(".mainMenu").addClass("closed")}))},menuMobileTrigger:function(){$(".nav-main ul li").each(function(){$(this).hasClass("no-dropdown")||$(this).find(".nav-link").length||$(this).append('<span class="nav-link"></span>')}),$(document).click(function(e){$(e.target).is(".header__dropdown *, .header__dropdown")||($(".header__dropdown").removeClass("is-active"),$(".header-block").hide(),$("body").removeClass("no-scroll"))}),$("body .nav-main").on("click",".nav-link",function(e){var i=$(this).prev("a").attr("id");$("."+i).is(":visible")?($(".header__dropdown").removeClass("is-active"),$(".header-block").hide(),$("body").removeClass("no-scroll")):($(".header-block").hide(),$("."+i).show(),$(".header__dropdown").addClass("is-active"),$("body").addClass("no-scroll")),e.stopPropagation()})}},$(window).scroll(function(){$(this).scrollTop()>1?$("header, .wrapper").addClass("sticky"):$("header, .wrapper").removeClass("sticky")}),$(".eventList__slide").length>0&&$(".eventList__slide").slick({dotsClass:"slider__dots",infinite:!0,autoplay:!1,autoplaySpeed:1500,speed:1e3,arrows:!0,dots:!1,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1,arrows:!0,dots:!1}},{breakpoint:567,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1,centerMode:!0,centerPadding:"30px"}}]}),$(".newsList__slide").length>0&&$(".newsList__slide").slick({dotsClass:"slider__dots",infinite:!0,autoplay:!1,autoplaySpeed:1500,speed:1e3,arrows:!0,dots:!1,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1,arrows:!0,dots:!1}},{breakpoint:567,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1,centerMode:!0,centerPadding:"30px"}}]});