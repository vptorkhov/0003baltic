<<<<<<< HEAD
// @fancyapps/ui/Carousel.Autoplay v4.0.7
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).window=e.window||{})}(this,(function(e){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function o(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var n,s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.carousel=t,this.state="ready";for(var o=0,n=["onReady","onSettle","onMouseEnter","onMouseLeave"];o<n.length;o++){var s=n[o];this[s]=this[s].bind(this)}this.events={ready:this.onReady,settle:this.onSettle}}var t,n,s;return t=e,(n=[{key:"onReady",value:function(){this.start()}},{key:"onSettle",value:function(){"play"===this.state&&this.set()}},{key:"onMouseEnter",value:function(){"play"===this.state&&(this.state="pause",this.clear())}},{key:"onMouseLeave",value:function(){"pause"===this.state&&(this.state="play",this.set())}},{key:"set",value:function(){var e=this;this.clear(),this.timer=setTimeout((function(){"play"===e.state&&e.carousel.slideTo(e.carousel.pageIndex+1)}),this.carousel.option("Autoplay.timeout"))}},{key:"clear",value:function(){this.timer&&(clearTimeout(this.timer),this.timer=null)}},{key:"start",value:function(){this.set(),this.state="play",this.carousel.option("Autoplay.hoverPause")&&(this.carousel.$container.addEventListener("mouseenter",this.onMouseEnter,!1),this.carousel.$container.addEventListener("mouseleave",this.onMouseLeave,!1))}},{key:"stop",value:function(){this.clear(),this.state="ready",this.carousel.$container.removeEventListener("mouseenter",this.onMouseEnter,!1),this.carousel.$container.removeEventListener("mouseleave",this.onMouseLeave,!1)}},{key:"attach",value:function(){this.carousel.on(this.events)}},{key:"detach",value:function(){this.stop(),this.carousel.off(this.events),this.carousel=null}}])&&o(t.prototype,n),s&&o(t,s),e}();s.defaults={timeout:3e3,hoverPause:!0},"undefined"!=typeof Carousel&&("object"===t(n=Carousel.Plugins)&&null!==n&&n.constructor===Object&&"[object Object]"===Object.prototype.toString.call(n))&&(Carousel.Plugins.Autoplay=s),e.Autoplay=s}));
=======
// @fancyapps/ui/Carousel.Autoplay v4.0.6
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).window=e.window||{})}(this,(function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var n,s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.carousel=t,this.state="ready";for(var o=0,n=["onReady","onSettle","onMouseEnter","onMouseLeave"];o<n.length;o++){var s=n[o];this[s]=this[s].bind(this)}this.events={ready:this.onReady,settle:this.onSettle}}var t,n,s;return t=e,(n=[{key:"onReady",value:function(){this.start()}},{key:"onSettle",value:function(){"play"===this.state&&this.set()}},{key:"onMouseEnter",value:function(){"play"===this.state&&(this.state="pause",this.clear())}},{key:"onMouseLeave",value:function(){"pause"===this.state&&(this.state="play",this.set())}},{key:"set",value:function(){var e=this;this.clear(),this.timer=setTimeout((function(){"play"===e.state&&e.carousel.slideTo(e.carousel.pageIndex+1)}),this.carousel.option("Autoplay.timeout"))}},{key:"clear",value:function(){this.timer&&(clearTimeout(this.timer),this.timer=null)}},{key:"start",value:function(){this.set(),this.state="play",this.carousel.option("Autoplay.hoverPause")&&(this.carousel.$container.addEventListener("mouseenter",this.onMouseEnter,!1),this.carousel.$container.addEventListener("mouseleave",this.onMouseLeave,!1))}},{key:"stop",value:function(){this.clear(),this.state="ready",this.carousel.$container.removeEventListener("mouseenter",this.onMouseEnter,!1),this.carousel.$container.removeEventListener("mouseleave",this.onMouseLeave,!1)}},{key:"attach",value:function(){this.carousel.on(this.events)}},{key:"detach",value:function(){this.stop(),this.carousel.off(this.events),this.carousel=null}}])&&o(t.prototype,n),s&&o(t,s),e}();s.defaults={timeout:3e3,hoverPause:!0},"undefined"!=typeof Carousel&&("object"===t(n=Carousel.Plugins)&&null!==n&&n.constructor===Object&&"[object Object]"===Object.prototype.toString.call(n))&&(Carousel.Plugins.Autoplay=s),e.Autoplay=s}));
>>>>>>> f5ff29b0e3d18692e1f1f2967634f2e0ee4dc1d0
