!function(e){function t(e,t,r){var n=e[0],o=/er/.test(r)?_indeterminate:/bl/.test(r)?p:u,s=r==_update?{checked:n[u],disabled:n[p],indeterminate:"true"==e.attr(_indeterminate)||"false"==e.attr(_determinate)}:n[o];if(/^(ch|di|in)/.test(r)&&!s)i(e,o);else if(/^(un|en|de)/.test(r)&&s)a(e,o);else if(r==_update)for(var d in s)s[d]?i(e,d,!0):a(e,d,!0);else t&&"toggle"!=r||(t||e[_callback]("ifClicked"),s?n[_type]!==l&&a(e,o):i(e,o))}function i(t,i,r){var f=t[0],h=t.parent(),b=i==u,m=i==_indeterminate,v=i==p,k=m?_determinate:b?_:"enabled",y=n(t,k+o(f[_type])),g=n(t,i+o(f[_type]));if(!0!==f[i]){if(!r&&i==u&&f[_type]==l&&f.name){var C=t.closest("form"),w='input[name="'+f.name+'"]',w=C.length?C.find(w):e(w);w.each(function(){this!==f&&e(this).data(d)&&a(e(this),i)})}m?(f[i]=!0,f[u]&&a(t,u,"force")):(r||(f[i]=!0),b&&f[_indeterminate]&&a(t,_indeterminate,!1)),s(t,b,i,r)}f[p]&&n(t,_cursor,!0)&&h.find("."+c).css(_cursor,"default"),h[_add](g||n(t,i)||""),h.attr("role")&&!m&&h.attr("aria-"+(v?p:u),"true"),h[_remove](y||n(t,k)||"")}function a(e,t,i){var a=e[0],r=e.parent(),d=t==u,l=t==_indeterminate,f=t==p,h=l?_determinate:d?_:"enabled",b=n(e,h+o(a[_type])),m=n(e,t+o(a[_type]));!1!==a[t]&&((l||!i||"force"==i)&&(a[t]=!1),s(e,d,h,i)),!a[p]&&n(e,_cursor,!0)&&r.find("."+c).css(_cursor,"pointer"),r[_remove](m||n(e,t)||""),r.attr("role")&&!l&&r.attr("aria-"+(f?p:u),"false"),r[_add](b||n(e,h)||"")}function r(t,i){t.data(d)&&(t.parent().html(t.attr("style",t.data(d).s||"")),i&&t[_callback](i),t.off(".i").unwrap(),e(_label+'[for="'+t[0].id+'"]').add(t.closest(_label)).off(".i"))}function n(e,t,i){return e.data(d)?e.data(d).o[t+(i?"":"Class")]:void 0}function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}function s(e,t,i,a){a||(t&&e[_callback]("ifToggled"),e[_callback]("ifChanged")[_callback]("if"+o(i)))}var d="iCheck",c=d+"-helper",l="radio",u="checked",_="un"+u,p="disabled";_determinate="determinate",_indeterminate="in"+_determinate,_update="update",_type="type",_click="click",_touch="touchbegin.i touchend.i",_add="addClass",_remove="removeClass",_callback="trigger",_label="label",_cursor="cursor",_mobile=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent),e.fn[d]=function(n,o){var s='input[type="checkbox"], input[type="'+l+'"]',_=e(),f=function(t){t.each(function(){var t=e(this);_=_.add(t.is(s)?t:t.find(s))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(n))return n=n.toLowerCase(),f(this),_.each(function(){var i=e(this);"destroy"==n?r(i,"ifDestroyed"):t(i,!0,n),e.isFunction(o)&&o()});if("object"!=typeof n&&n)return this;var h=e.extend({checkedClass:u,disabledClass:p,indeterminateClass:_indeterminate,labelHover:!0},n),b=h.handle,m=h.hoverClass||"hover",v=h.focusClass||"focus",k=h.activeClass||"active",y=!!h.labelHover,g=h.labelHoverClass||"hover",C=0|(""+h.increaseArea).replace("%","");return("checkbox"==b||b==l)&&(s='input[type="'+b+'"]'),-50>C&&(C=-50),f(this),_.each(function(){var n=e(this);r(n);var o=this,s=o.id,_=-C+"%",f=100+2*C+"%",f={position:"absolute",top:_,left:_,display:"block",width:f,height:f,margin:0,padding:0,background:"#fff",border:0,opacity:0},_=_mobile?{position:"absolute",visibility:"hidden"}:C?f:{position:"absolute",opacity:0},b="checkbox"==o[_type]?h.checkboxClass||"icheckbox":h.radioClass||"i"+l,w=e(_label+'[for="'+s+'"]').add(n.closest(_label)),x=!!h.aria,A=d+"-"+Math.random().toString(36).substr(2,6),H='<div class="'+b+'" '+(x?'role="'+o[_type]+'" ':"");x&&w.each(function(){H+='aria-labelledby="',this.id?H+=this.id:(this.id=A,H+=A),H+='"'}),H=n.wrap(H+"/>")[_callback]("ifCreated").parent().append(h.insert),f=e('<ins class="'+c+'"/>').css(f).appendTo(H),n.data(d,{o:h,s:n.attr("style")}).css(_),h.inheritClass&&H[_add](o.className||""),h.inheritID&&s&&H.attr("id",d+"-"+s),"static"==H.css("position")&&H.css("position","relative"),t(n,!0,_update),w.length&&w.on(_click+".i mouseover.i mouseout.i "+_touch,function(i){var a=i[_type],r=e(this);if(!o[p]){if(a==_click){if(e(i.target).is("a"))return;t(n,!1,!0)}else y&&(/ut|nd/.test(a)?(H[_remove](m),r[_remove](g)):(H[_add](m),r[_add](g)));if(!_mobile)return!1;i.stopPropagation()}}),n.on(_click+".i focus.i blur.i keyup.i keydown.i keypress.i",function(e){var t=e[_type];return e=e.keyCode,t==_click?!1:"keydown"==t&&32==e?(o[_type]==l&&o[u]||(o[u]?a(n,u):i(n,u)),!1):void("keyup"==t&&o[_type]==l?!o[u]&&i(n,u):/us|ur/.test(t)&&H["blur"==t?_remove:_add](v))}),f.on(_click+" mousedown mouseup mouseover mouseout "+_touch,function(e){var i=e[_type],a=/wn|up/.test(i)?k:m;if(!o[p]){if(i==_click?t(n,!1,!0):(/wn|er|in/.test(i)?H[_add](a):H[_remove](a+" "+k),w.length&&y&&a==m&&w[/ut|nd/.test(i)?_remove:_add](g)),!_mobile)return!1;e.stopPropagation()}})})}}(window.jQuery||window.Zepto);