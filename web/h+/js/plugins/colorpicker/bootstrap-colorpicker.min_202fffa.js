!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):window.jQuery&&!window.jQuery.fn.colorpicker&&e(window.jQuery)}(function(e){"use strict";var t=function(e){this.value={h:0,s:0,b:0,a:1},this.origFormat=null,e&&(void 0!==e.toLowerCase?this.setColor(e):void 0!==e.h&&(this.value=e))};t.prototype={constructor:t,colors:{aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c","indigo ":"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},_sanitizeNumber:function(e){return"number"==typeof e?e:isNaN(e)||null===e||""===e||void 0===e?1:void 0!==e.toLowerCase?parseFloat(e):1},setColor:function(e){e=e.toLowerCase(),this.value=this.stringToHSB(e)||{h:0,s:0,b:0,a:1}},stringToHSB:function(t){t=t.toLowerCase();var o=this,i=!1;return e.each(this.stringParsers,function(e,r){var s=r.re.exec(t),a=s&&r.parse.apply(o,[s]),n=r.format||"rgba";return a?(i=n.match(/hsla?/)?o.RGBtoHSB.apply(o,o.HSLtoRGB.apply(o,a)):o.RGBtoHSB.apply(o,a),o.origFormat=n,!1):!0}),i},setHue:function(e){this.value.h=1-e},setSaturation:function(e){this.value.s=e},setBrightness:function(e){this.value.b=1-e},setAlpha:function(e){this.value.a=parseInt(100*(1-e),10)/100},toRGB:function(e,t,o,i){e||(e=this.value.h,t=this.value.s,o=this.value.b),e*=360;var r,s,a,n,l;return e=e%360/60,l=o*t,n=l*(1-Math.abs(e%2-1)),r=s=a=o-l,e=~~e,r+=[l,n,0,0,n,l][e],s+=[n,l,l,n,0,0][e],a+=[0,0,n,l,l,n][e],{r:Math.round(255*r),g:Math.round(255*s),b:Math.round(255*a),a:i||this.value.a}},toHex:function(e,t,o,i){var r=this.toRGB(e,t,o,i);return"#"+(1<<24|parseInt(r.r)<<16|parseInt(r.g)<<8|parseInt(r.b)).toString(16).substr(1)},toHSL:function(e,t,o,i){e=e||this.value.h,t=t||this.value.s,o=o||this.value.b,i=i||this.value.a;var r=e,s=(2-t)*o,a=t*o;return a/=s>0&&1>=s?s:2-s,s/=2,a>1&&(a=1),{h:isNaN(r)?0:r,s:isNaN(a)?0:a,l:isNaN(s)?0:s,a:isNaN(i)?0:i}},toAlias:function(e,t,o,i){var r=this.toHex(e,t,o,i);for(var s in this.colors)if(this.colors[s]==r)return s;return!1},RGBtoHSB:function(e,t,o,i){e/=255,t/=255,o/=255;var r,s,a,n;return a=Math.max(e,t,o),n=a-Math.min(e,t,o),r=0===n?null:a===e?(t-o)/n:a===t?(o-e)/n+2:(e-t)/n+4,r=(r+360)%6*60/360,s=0===n?0:n/a,{h:this._sanitizeNumber(r),s:s,b:a,a:this._sanitizeNumber(i)}},HueToRGB:function(e,t,o){return 0>o?o+=1:o>1&&(o-=1),1>6*o?e+(t-e)*o*6:1>2*o?t:2>3*o?e+(t-e)*(2/3-o)*6:e},HSLtoRGB:function(e,t,o,i){0>t&&(t=0);var r;r=.5>=o?o*(1+t):o+t-o*t;var s=2*o-r,a=e+1/3,n=e,l=e-1/3,c=Math.round(255*this.HueToRGB(s,r,a)),h=Math.round(255*this.HueToRGB(s,r,n)),u=Math.round(255*this.HueToRGB(s,r,l));return[c,h,u,this._sanitizeNumber(i)]},toString:function(e){switch(e=e||"rgba"){case"rgb":var t=this.toRGB();return"rgb("+t.r+","+t.g+","+t.b+")";case"rgba":var t=this.toRGB();return"rgba("+t.r+","+t.g+","+t.b+","+t.a+")";case"hsl":var o=this.toHSL();return"hsl("+Math.round(360*o.h)+","+Math.round(100*o.s)+"%,"+Math.round(100*o.l)+"%)";case"hsla":var o=this.toHSL();return"hsla("+Math.round(360*o.h)+","+Math.round(100*o.s)+"%,"+Math.round(100*o.l)+"%,"+o.a+")";case"hex":return this.toHex();case"alias":return this.toAlias()||this.toHex();default:return!1}},stringParsers:[{re:/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,format:"hex",parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16),1]}},{re:/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,format:"hex",parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),1]}},{re:/rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*?\)/,format:"rgb",parse:function(e){return[e[1],e[2],e[3],1]}},{re:/rgb\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*?\)/,format:"rgb",parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],1]}},{re:/rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,format:"rgba",parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,format:"rgba",parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/hsl\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*?\)/,format:"hsl",parse:function(e){return[e[1]/360,e[2]/100,e[3]/100,e[4]]}},{re:/hsla\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,format:"hsla",parse:function(e){return[e[1]/360,e[2]/100,e[3]/100,e[4]]}},{re:/^([a-z]{3,})$/,format:"alias",parse:function(e){var t=this.colorNameToHex(e[0])||"#000000",o=this.stringParsers[0].re.exec(t),i=o&&this.stringParsers[0].parse.apply(this,[o]);return i}}],colorNameToHex:function(e){return"undefined"!=typeof this.colors[e.toLowerCase()]?this.colors[e.toLowerCase()]:!1}};var o={horizontal:!1,inline:!1,color:!1,format:!1,input:"input",container:!1,component:".add-on, .input-group-addon",sliders:{saturation:{maxLeft:100,maxTop:100,callLeft:"setSaturation",callTop:"setBrightness"},hue:{maxLeft:0,maxTop:100,callLeft:!1,callTop:"setHue"},alpha:{maxLeft:0,maxTop:100,callLeft:!1,callTop:"setAlpha"}},slidersHorz:{saturation:{maxLeft:100,maxTop:100,callLeft:"setSaturation",callTop:"setBrightness"},hue:{maxLeft:100,maxTop:0,callLeft:"setHue",callTop:!1},alpha:{maxLeft:100,maxTop:0,callLeft:"setAlpha",callTop:!1}},template:'<div class="colorpicker dropdown-menu"><div class="colorpicker-saturation"><i><b></b></i></div><div class="colorpicker-hue"><i></i></div><div class="colorpicker-alpha"><i></i></div><div class="colorpicker-color"><div /></div></div>'},i=function(i,r){this.element=e(i).addClass("colorpicker-element"),this.options=e.extend({},o,this.element.data(),r),this.component=this.options.component,this.component=this.component!==!1?this.element.find(this.component):!1,this.component&&0===this.component.length&&(this.component=!1),this.container=this.options.container===!0?this.element:this.options.container,this.container=this.container!==!1?e(this.container):!1,this.input=this.element.is("input")?this.element:this.options.input?this.element.find(this.options.input):!1,this.input&&0===this.input.length&&(this.input=!1),this.color=new t(this.options.color!==!1?this.options.color:this.getValue()),this.format=this.options.format!==!1?this.options.format:this.color.origFormat,this.picker=e(this.options.template),this.picker.addClass(this.options.inline?"colorpicker-inline colorpicker-visible":"colorpicker-hidden"),this.options.horizontal&&this.picker.addClass("colorpicker-horizontal"),("rgba"===this.format||"hsla"===this.format)&&this.picker.addClass("colorpicker-with-alpha"),this.picker.on("mousedown.colorpicker",e.proxy(this.mousedown,this)),this.picker.appendTo(this.container?this.container:e("body")),this.input!==!1&&(this.input.on({"keyup.colorpicker":e.proxy(this.keyup,this)}),this.component===!1&&this.element.on({"focus.colorpicker":e.proxy(this.show,this)}),this.options.inline===!1&&this.element.on({"focusout.colorpicker":e.proxy(this.hide,this)})),this.component!==!1&&this.component.on({"click.colorpicker":e.proxy(this.show,this)}),this.input===!1&&this.component===!1&&this.element.on({"click.colorpicker":e.proxy(this.show,this)}),this.update(),e(e.proxy(function(){this.element.trigger("create")},this))};i.version="2.0.0-beta",i.Color=t,i.prototype={constructor:i,destroy:function(){this.picker.remove(),this.element.removeData("colorpicker").off(".colorpicker"),this.input!==!1&&this.input.off(".colorpicker"),this.component!==!1&&this.component.off(".colorpicker"),this.element.removeClass("colorpicker-element"),this.element.trigger({type:"destroy"})},reposition:function(){if(this.options.inline!==!1)return!1;var e=this.container&&this.container[0]!==document.body?"position":"offset",t=this.component?this.component[e]():this.element[e]();this.picker.css({top:t.top+(this.component?this.component.outerHeight():this.element.outerHeight()),left:t.left})},show:function(t){return this.isDisabled()?!1:(this.picker.addClass("colorpicker-visible").removeClass("colorpicker-hidden"),this.reposition(),e(window).on("resize.colorpicker",e.proxy(this.reposition,this)),!this.hasInput()&&t&&t.stopPropagation&&t.preventDefault&&(t.stopPropagation(),t.preventDefault()),this.options.inline===!1&&e(window.document).on({"mousedown.colorpicker":e.proxy(this.hide,this)}),void this.element.trigger({type:"showPicker",color:this.color}))},hide:function(){this.picker.addClass("colorpicker-hidden").removeClass("colorpicker-visible"),e(window).off("resize.colorpicker",this.reposition),e(document).off({"mousedown.colorpicker":this.hide}),this.update(),this.element.trigger({type:"hidePicker",color:this.color})},updateData:function(e){return e=e||this.color.toString(this.format),this.element.data("color",e),e},updateInput:function(e){return e=e||this.color.toString(this.format),this.input!==!1&&this.input.prop("value",e),e},updatePicker:function(e){void 0!==e&&(this.color=new t(e));var o=this.options.horizontal===!1?this.options.sliders:this.options.slidersHorz,i=this.picker.find("i");return 0!==i.length?(this.options.horizontal===!1?(o=this.options.sliders,i.eq(1).css("top",o.hue.maxTop*(1-this.color.value.h)).end().eq(2).css("top",o.alpha.maxTop*(1-this.color.value.a))):(o=this.options.slidersHorz,i.eq(1).css("left",o.hue.maxLeft*(1-this.color.value.h)).end().eq(2).css("left",o.alpha.maxLeft*(1-this.color.value.a))),i.eq(0).css({top:o.saturation.maxTop-this.color.value.b*o.saturation.maxTop,left:this.color.value.s*o.saturation.maxLeft}),this.picker.find(".colorpicker-saturation").css("backgroundColor",this.color.toHex(this.color.value.h,1,1,1)),this.picker.find(".colorpicker-alpha").css("backgroundColor",this.color.toHex()),this.picker.find(".colorpicker-color, .colorpicker-color div").css("backgroundColor",this.color.toString(this.format)),e):void 0},updateComponent:function(e){if(e=e||this.color.toString(this.format),this.component!==!1){var t=this.component.find("i").eq(0);t.length>0?t.css({backgroundColor:e}):this.component.css({backgroundColor:e})}return e},update:function(e){var t=this.updateComponent();return(this.getValue(!1)!==!1||e===!0)&&(this.updateInput(t),this.updateData(t)),this.updatePicker(),t},setValue:function(e){this.color=new t(e),this.update(),this.element.trigger({type:"changeColor",color:this.color,value:e})},getValue:function(e){e=void 0===e?"#000000":e;var t;return t=this.hasInput()?this.input.val():this.element.data("color"),(void 0===t||""===t||null===t)&&(t=e),t},hasInput:function(){return this.input!==!1},isDisabled:function(){return this.hasInput()?this.input.prop("disabled")===!0:!1},disable:function(){return this.hasInput()?(this.input.prop("disabled",!0),!0):!1},enable:function(){return this.hasInput()?(this.input.prop("disabled",!1),!0):!1},currentSlider:null,mousePointer:{left:0,top:0},mousedown:function(t){t.stopPropagation(),t.preventDefault();var o=e(t.target),i=o.closest("div"),r=this.options.horizontal?this.options.slidersHorz:this.options.sliders;if(!i.is(".colorpicker")){if(i.is(".colorpicker-saturation"))this.currentSlider=e.extend({},r.saturation);else if(i.is(".colorpicker-hue"))this.currentSlider=e.extend({},r.hue);else{if(!i.is(".colorpicker-alpha"))return!1;this.currentSlider=e.extend({},r.alpha)}var s=i.offset();this.currentSlider.guide=i.find("i")[0].style,this.currentSlider.left=t.pageX-s.left,this.currentSlider.top=t.pageY-s.top,this.mousePointer={left:t.pageX,top:t.pageY},e(document).on({"mousemove.colorpicker":e.proxy(this.mousemove,this),"mouseup.colorpicker":e.proxy(this.mouseup,this)}).trigger("mousemove")}return!1},mousemove:function(e){e.stopPropagation(),e.preventDefault();var t=Math.max(0,Math.min(this.currentSlider.maxLeft,this.currentSlider.left+((e.pageX||this.mousePointer.left)-this.mousePointer.left))),o=Math.max(0,Math.min(this.currentSlider.maxTop,this.currentSlider.top+((e.pageY||this.mousePointer.top)-this.mousePointer.top)));return this.currentSlider.guide.left=t+"px",this.currentSlider.guide.top=o+"px",this.currentSlider.callLeft&&this.color[this.currentSlider.callLeft].call(this.color,t/100),this.currentSlider.callTop&&this.color[this.currentSlider.callTop].call(this.color,o/100),this.update(!0),this.element.trigger({type:"changeColor",color:this.color}),!1},mouseup:function(t){return t.stopPropagation(),t.preventDefault(),e(document).off({"mousemove.colorpicker":this.mousemove,"mouseup.colorpicker":this.mouseup}),!1},keyup:function(e){if(38===e.keyCode)this.color.value.a<1&&(this.color.value.a=Math.round(100*(this.color.value.a+.01))/100),this.update(!0);else if(40===e.keyCode)this.color.value.a>0&&(this.color.value.a=Math.round(100*(this.color.value.a-.01))/100),this.update(!0);else{var o=this.input.val();this.color=new t(o),this.getValue(!1)!==!1&&(this.updateData(),this.updateComponent(),this.updatePicker())}this.element.trigger({type:"changeColor",color:this.color,value:o})}},e.colorpicker=i,e.fn.colorpicker=function(t){var o=arguments;return this.each(function(){var r=e(this),s=r.data("colorpicker"),a="object"==typeof t?t:{};s||"string"==typeof t?"string"==typeof t&&s[t].apply(s,Array.prototype.slice.call(o,1)):r.data("colorpicker",new i(this,a))})},e.fn.colorpicker.constructor=i});