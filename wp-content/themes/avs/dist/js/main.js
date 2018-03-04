function sliderSetup(){var e=$(".slider-container");e.each(function(){var e=$(this),t=e.find(".slider"),o=e.find(".slider-controls");e.hasClass("thumbnail-navigation")&&(navFor=".slider-navigation",$(".slider-navigation").not(".slick-initialized").slick({slidesToShow:5,slidesToScroll:1,arrows:!1,asNavFor:".slider",focusOnSelect:!0}),t.slick({slidesToShow:1,slidesToScroll:1,dots:!1,infinite:!1,appendArrows:o,prevArrow:'<a class="slick-prev"><span class="icon-arrow-left"></span></a>',nextArrow:'<a class="slick-next"><span class="icon-arrow-right"></span></a>',asNavFor:navFor,rows:0}))})}function initMap(){var e={lat:-27.471036,lng:153.0145367};new google.maps.Map(document.getElementById("map"),{zoom:12,center:e,disableDefaultUI:!0,styles:[{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#333333"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#fefefe"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#fefefe"},{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#e5e5e5"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"},{lightness:21}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#d5d5d5"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#ffffff"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#d5d5d5"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#d5d5d5"},{lightness:16}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#e3e3e3"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{lightness:17},{color:"#001849"}]}]})}$(function(){var e=$("body"),t=$("header");if(sliderSetup(),e.hasClass("homepage")){var o=t.outerHeight(!0)-24,s=new ScrollMagic.Controller;new ScrollMagic.Scene({triggerElement:"#white-section-1",offset:-o,triggerHook:0,duration:$("#white-section-1").outerHeight(!0)}).setClassToggle("#logo","blue").addTo(s),new ScrollMagic.Scene({triggerElement:"#white-section-1",offset:-o,triggerHook:0,duration:$("#white-section-1").outerHeight(!0)}).setClassToggle("#menu-icon","blue").addTo(s),new ScrollMagic.Scene({triggerElement:"#white-section-2",offset:-o,triggerHook:0,duration:$("#white-section-2").outerHeight(!0)}).setClassToggle("#logo","blue").addTo(s),new ScrollMagic.Scene({triggerElement:"#white-section-2",offset:-o,triggerHook:0,duration:$("#white-section-2").outerHeight(!0)}).setClassToggle("#menu-icon","blue").addTo(s),new ScrollMagic.Scene({triggerElement:"#white-section-3",offset:-o,triggerHook:0,duration:$("#white-section-3").outerHeight(!0)}).setClassToggle("#logo","blue").addTo(s),new ScrollMagic.Scene({triggerElement:"#white-section-4",offset:-o,triggerHook:0,duration:$("#white-section-4").outerHeight(!0)}).setClassToggle("#logo","blue").addTo(s),new ScrollMagic.Scene({triggerElement:"#white-section-4",offset:-o,triggerHook:0,duration:$("#white-section-4").outerHeight(!0)}).setClassToggle("#menu-icon","blue").addTo(s)}e.on("click",".js-menu-trigger",function(){t.hasClass("menu-open")?t.removeClass("menu-open"):t.addClass("menu-open")}),$(".accordion-list .accordion-item .accordion-title").click(function(){var e=$(this),t=e.closest(".accordion-item"),o=e.find(".icon"),s=t.find(".accordion-hidden");o.toggleClass("icon-plus icon-minus"),s.slideToggle()})}),!function(e,t,o){function s(e,t){return typeof e===t}function n(){var e,t,o,n,i,l,r;for(var a in f)if(f.hasOwnProperty(a)){if(e=[],t=f[a],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(o=0;o<t.options.aliases.length;o++)e.push(t.options.aliases[o].toLowerCase());for(n=s(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)l=e[i],r=l.split("."),1===r.length?d[r[0]]=n:(!d[r[0]]||d[r[0]]instanceof Boolean||(d[r[0]]=new Boolean(d[r[0]])),d[r[0]][r[1]]=n),c.push((n?"":"no-")+r.join("-"))}}function i(e){var t=u.className,o=d._config.classPrefix||"";if(p&&(t=t.baseVal),d._config.enableJSClass){var s=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");t=t.replace(s,"$1"+o+"js$2")}d._config.enableClasses&&(t+=" "+o+e.join(" "+o),p?u.className.baseVal=t:u.className=t)}function l(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):p?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function r(){var e=t.body;return e||(e=l(p?"svg":"body"),e.fake=!0),e}function a(e,o,s,n){var i,a,c,f,g="modernizr",d=l("div"),p=r();if(parseInt(s,10))for(;s--;)c=l("div"),c.id=n?n[s]:g+(s+1),d.appendChild(c);return i=l("style"),i.type="text/css",i.id="s"+g,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),d.id=g,p.fake&&(p.style.background="",p.style.overflow="hidden",f=u.style.overflow,u.style.overflow="hidden",u.appendChild(p)),a=o(d,e),p.fake?(p.parentNode.removeChild(p),u.style.overflow=f,u.offsetHeight):d.parentNode.removeChild(d),!!a}var c=[],f=[],g={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var o=this;setTimeout(function(){t(o[e])},0)},addTest:function(e,t,o){f.push({name:e,fn:t,options:o})},addAsyncTest:function(e){f.push({name:null,fn:e})}},d=function(){};d.prototype=g,d=new d;var u=t.documentElement,p="svg"===u.nodeName.toLowerCase(),h=g._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];g._prefixes=h;var y=g.testStyles=a;d.addTest("touchevents",function(){var o;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)o=!0;else{var s=["@media (",h.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");y(s,function(e){o=9===e.offsetTop})}return o}),n(),i(c),delete g.addTest,delete g.addAsyncTest;for(var m=0;m<d._q.length;m++)d._q[m]();e.Modernizr=d}(window,document);
//# sourceMappingURL=maps/main.js.map