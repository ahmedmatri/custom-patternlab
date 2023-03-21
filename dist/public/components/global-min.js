function css_browser_selector_fix(e){var i=e.toLowerCase(),t=function(e){return i.indexOf(e)>-1},o="gecko",s="webkit",a="chrome",n="opera",r="mobile",d=0,l=window.devicePixelRatio?(window.devicePixelRatio+"").replace(".","_"):"1",c=[!/opera|webtv/.test(i)&&/msie\s(\d+)/.test(i)&&(d=1*RegExp.$1)?"ie ie"+d+(6==d||7==d?" ie67 ie678 ie6789":8==d?" ie678 ie6789":9==d?" ie6789 ie9m":d>9?" ie9m":""):/edge\/(\d+)\.(\d+)/.test(i)&&(d=[RegExp.$1,RegExp.$2])?"ie ie"+d[0]+" ie"+d[0]+"_"+d[1]+" ie9m edge":/trident\/\d+.*?;\s*rv:(\d+)\.(\d+)\)/.test(i)&&(d=[RegExp.$1,RegExp.$2])?"ie ie"+d[0]+" ie"+d[0]+"_"+d[1]+" ie9m":/firefox\/(\d+)\.(\d+)/.test(i)&&(re=RegExp)?o+" ff ff"+re.$1+" ff"+re.$1+"_"+re.$2:t("gecko/")?o:t(n)?"old"+n+(/version\/(\d+)/.test(i)?" "+n+RegExp.$1:/opera(\s|\/)(\d+)/.test(i)?" "+n+RegExp.$2:""):t("konqueror")?"konqueror":t("blackberry")?r+" blackberry":t(a)||t("crios")?s+" "+a:t("iron")?s+" iron":!t("cpu os")&&t("applewebkit/")?s+" safari":t("mozilla/")?o:"",t("android")?r+" android":"",t("tablet")?"tablet":"",t("opr/")?n:"",t("yabrowser")?"yandex":"",t("j2me")?r+" j2me":t("ipad; u; cpu os")?r+" chrome android tablet":t("ipad;u;cpu os")?r+" chromedef android tablet":t("iphone")?r+" ios iphone":t("ipod")?r+" ios ipod":t("ipad")?r+" ios ipad tablet":t("mac")?"mac":t("darwin")?"mac":t("webtv")?"webtv":t("win")?"win"+(t("windows nt 6.0")?" vista":""):t("freebsd")?"freebsd":t("x11")||t("linux")?"linux":"","1"!=l?" retina ratio"+l:"","js portrait"].join(" ");return window.jQuery&&!window.jQuery.browser&&(window.jQuery.browser=d?{msie:1,version:d}:{}),c}window.addEventListener("load",()=>{let e=$(".slider-home"),i=e.find(".embed-player"),t=e.find(".slide-image"),o=0;function s(e,i){null!=e&&null!=i&&e.contentWindow.postMessage(JSON.stringify(i),"*")}function a(e,i){let t,o,a,n,r;if(o=(t=e.find(".slick-current .slider-home__item")).attr("class").split(" ")[1],n=t.find("iframe").get(0),a=t.data("video-start"),"vimeo"===o)switch(i){case"play":null!=a&&a>0&&!t.hasClass("started")&&(t.addClass("started"),s(n,{method:"setCurrentTime",value:a})),s(n,{method:"play",value:1});break;case"pause":s(n,{method:"pause",value:1})}else if("youtube"===o)switch(i){case"play":s(n,{event:"command",func:"mute"}),s(n,{event:"command",func:"playVideo"});break;case"pause":s(n,{event:"command",func:"pauseVideo"})}else"video"===o&&null!=(r=t.children("video").get(0))&&("play"===i?r.play():r.pause())}function n(e,i){if(e[0]){var t,o,s=$(".slider-home"),a=s.width(),n=s.height();i=i||16/9;e.each(function(){let e=$(this);a/i<n?(t=Math.ceil(n*i),e.width(t).height(n).css({left:(a-t)/2,top:0})):(o=Math.ceil(a/i),e.width(a).height(o).css({left:0,top:(n-o)/2}))})}}$(function(){e.on("init",function(e){e=$(e.currentTarget),setTimeout(function(){a(e,"play")},1e3),n(i,16/9)}),e.on("beforeChange",function(e,i){a(i=$(i.$slider),"pause")}),e.on("afterChange",function(e,i){a(i=$(i.$slider),"play")}),e.on("lazyLoaded",function(e,i,s,a){++o===t.length&&t.addClass("show")}),e.slick({autoplaySpeed:4e3,lazyLoad:"progressive",speed:600,arrows:!1,dots:!0,autoplay:!1,cssEase:"cubic-bezier(0.87, 0.03, 0.41, 0.9)"})}),$(window).on("resize.slickVideoPlayer",function(){n(i,16/9)})}),function(e,i){var t=css_browser_selector_fix(navigator.userAgent),o=e.documentElement;o.className+=" "+t;var s=t.replace(/^\s*|\s*$/g,"").split(/ +/);i.CSSBS=1;for(var a=0;a<s.length;a++)i["CSSBS_"+s[a]]=1;var n=function(i){return e.documentElement[i]||e.body[i]};i.jQuery&&function(e){var t="portrait",s="landscape",a="smartnarrow",r="smartwide",d="tabletnarrow",l="tabletwide",c=a+" "+r+" "+d+" "+l+" pc",u=e(o),p=0,h=0;function m(){if(0==p){try{var e=n("clientWidth");if(e>n("clientHeight")?u.removeClass(t).addClass(s):u.removeClass(s).addClass(t),e==h)return;h=e}catch(e){}p=setTimeout(w,100)}}function w(){try{u.removeClass(c),u.addClass(h<=360?a:h<=640?r:h<=768?d:h<=1024?l:"pc")}catch(e){}p=0}i.CSSBS_ie?setInterval(m,1e3):e(i).on("resize orientationchange",m).trigger("resize"),e(i).ready(m)}(i.jQuery)}(document,window);let $=jQuery;$(document).ready(function(){SiteInit.menuTrigger(),SiteInit.menuMobileTrigger()});var SiteInit=SiteInit||{};SiteInit={menuTrigger:function(){$(".nav-main").on("mouseover mouseleave","a",function(e){target=$(this).attr("id"),$("."+target).length>0&&("mouseover"===e.type?($("."+target).show(),$(".header__dropdown").height($("."+target).outerHeight()).addClass("is-active")):($(".header__dropdown").removeClass("is-active").height("0"),$("."+target).hide()))}),$(".header").on("mouseover mouseleave",".header__dropdown",function(e){"mouseover"==e.type?($(this).height($("."+target).outerHeight()).addClass("is-active"),$("."+target).show()):($(this).height("0").removeClass("is-active"),$("."+target).hide())}),$(".nav-main-toggle").length>0&&($(".nav-main-toggle").click(function(){$(".mainMenu").removeClass("closed")}),$(".close-btn").click(function(){$(".mainMenu").addClass("closed")}))},menuMobileTrigger:function(){$(".nav-main ul li").each(function(){$(this).hasClass("no-dropdown")||$(this).find(".nav-link").length||$(this).append('<span class="nav-link"></span>')}),$(document).click(function(e){$(e.target).is(".header__dropdown *, .header__dropdown")||($(".header__dropdown").removeClass("is-active"),$(".header-block").hide(),$("body").removeClass("no-scroll"))}),$("body .nav-main").on("click",".nav-link",function(e){var i=$(this).prev("a").attr("id");$("."+i).is(":visible")?($(".header__dropdown").removeClass("is-active"),$(".header-block").hide(),$("body").removeClass("no-scroll")):($(".header-block").hide(),$("."+i).show(),$(".header__dropdown").addClass("is-active"),$("body").addClass("no-scroll")),e.stopPropagation()})}},$(window).scroll(function(){$(this).scrollTop()>1?$("header, .wrapper").addClass("sticky"):$("header, .wrapper").removeClass("sticky")}),$(".eventList__slide").length>0&&$(".eventList__slide").slick({dotsClass:"slider__dots",infinite:!0,autoplay:!1,autoplaySpeed:1500,speed:1e3,arrows:!0,dots:!1,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1,arrows:!0,dots:!1}},{breakpoint:567,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1,centerMode:!0,centerPadding:"30px"}}]}),$(".newsList__slide").length>0&&$(".newsList__slide").slick({dotsClass:"slider__dots",infinite:!0,autoplay:!1,autoplaySpeed:1500,speed:1e3,arrows:!0,dots:!1,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1,arrows:!0,dots:!1}},{breakpoint:567,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1,centerMode:!0,centerPadding:"30px"}}]});