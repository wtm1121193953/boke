!function(e,t){function n(e,t){h(e).push(t)}function r(r,a,i){var s=r.children(a.headerTag),o=r.children(a.bodyTag);s.length>o.length?$(X,"contents"):s.length<o.length&&$(X,"titles");var l=a.startIndex;if(i.stepCount=s.length,a.saveState&&e.cookie){var d=e.cookie(R+v(r)),u=parseInt(d,0);!isNaN(u)&&u<i.stepCount&&(l=u)}i.currentIndex=l,s.each(function(a){var i=e(this),s=o.eq(a),l=s.data("mode"),d=null==l?Y.html:g(Y,/^\s*$/.test(l)||isNaN(l)?l:parseInt(l,0)),u=d===Y.html||s.data("url")===t?"":s.data("url"),c=d!==Y.html&&"1"===s.data("loaded"),f=e.extend({},tt,{title:i.html(),content:d===Y.html?s.html():"",contentUrl:u,contentMode:d,contentLoaded:c});n(r,f)})}function a(e){e.triggerHandler("canceled")}function i(e,t){return e.currentIndex-t}function s(t,n){var r=l(t);t.unbind(r).removeData("uid").removeData("options").removeData("state").removeData("steps").removeData("eventNamespace").find(".actions a").unbind(r),t.removeClass(n.clearFixCssClass+" vertical");var a=t.find(".content > *");a.removeData("loaded").removeData("mode").removeData("url"),a.removeAttr("id").removeAttr("role").removeAttr("tabindex").removeAttr("class").removeAttr("style")._removeAria("labelledby")._removeAria("hidden"),t.find(".content > [data-mode='async'],.content > [data-mode='iframe']").empty();var i=e('<{0} class="{1}"></{0}>'.format(t.get(0).tagName,t.attr("class"))),s=t._id();return null!=s&&""!==s&&i._id(s),i.html(t.find(".content").html()),t.after(i),t.remove(),i}function o(e,t){var n=e.find(".steps li").eq(t.currentIndex);e.triggerHandler("finishing",[t.currentIndex])?(n.addClass("done").removeClass("error"),e.triggerHandler("finished",[t.currentIndex])):n.addClass("error")}function l(e){var t=e.data("eventNamespace");return null==t&&(t="."+v(e),e.data("eventNamespace",t)),t}function d(e,t){var n=v(e);return e.find("#"+n+V+t)}function u(e,t){var n=v(e);return e.find("#"+n+W+t)}function c(e,t){var n=v(e);return e.find("#"+n+G+t)}function f(e){return e.data("options")}function p(e){return e.data("state")}function h(e){return e.data("steps")}function m(e,t){var n=h(e);return(0>t||t>=n.length)&&$(J),n[t]}function v(e){var t=e.data("uid");return null==t&&(t=e._id(),null==t&&(t="steps-uid-".concat(K),e._id(t)),K++,e.data("uid",t)),t}function g(e,n){if(Q("enumType",e),Q("keyOrValue",n),"string"==typeof n){var r=e[n];return r===t&&$("The enum key '{0}' does not exist.",n),r}if("number"==typeof n){for(var a in e)if(e[a]===n)return n;$("Invalid enum value '{0}'.",n)}else $("Invalid key or value type.")}function C(e,t,n){return T(e,t,n,y(n,1))}function b(e,t,n){return T(e,t,n,i(n,1))}function x(e,t,n,r){if((0>r||r>=n.stepCount)&&$(J),!(t.forceMoveForward&&r<n.currentIndex)){var a=n.currentIndex;return e.triggerHandler("stepChanging",[n.currentIndex,r])?(n.currentIndex=r,P(e,t,n),q(e,t,n,a),S(e,t,n),F(e,t,n),U(e,t,n,r,a),e.triggerHandler("stepChanged",[r,a])):e.find(".steps li").eq(a).addClass("error"),!0}}function y(e,t){return e.currentIndex+t}function I(t){var n=e.extend(!0,{},nt,t);return this.each(function(){var t=e(this),a={currentIndex:n.startIndex,currentStep:null,stepCount:0,transitionElement:null};t.data("options",n),t.data("state",a),t.data("steps",[]),r(t,n,a),O(t,n,a),E(t,n),n.autoFocus&&0===K&&d(t,n.startIndex).focus()})}function _(t,n,r,a,i){(0>a||a>r.stepCount)&&$(J),i=e.extend({},tt,i),A(t,a,i),r.currentIndex!==r.stepCount&&r.currentIndex>=a&&(r.currentIndex++,P(t,n,r)),r.stepCount++;var s=t.find(".content"),o=e("<{0}>{1}</{0}>".format(n.headerTag,i.title)),l=e("<{0}></{0}>".format(n.bodyTag));return(null==i.contentMode||i.contentMode===Y.html)&&l.html(i.content),0===a?s.prepend(l).prepend(o):u(t,a-1).after(l).after(o),B(t,r,l,a),L(t,n,r,o,a),D(t,n,r,a),a===r.currentIndex&&q(t,n,r),S(t,n,r),t}function A(e,t,n){h(e).splice(t,0,n)}function w(t){var n=e(this),r=f(n),a=p(n);if(r.suppressPaginationOnFocus&&n.find(":focus").is(":input"))return t.preventDefault(),!1;var i={left:37,right:39};t.keyCode===i.left?(t.preventDefault(),b(n,r,a)):t.keyCode===i.right&&(t.preventDefault(),C(n,r,a))}function F(t,n,r){if(r.stepCount>0){var a=m(t,r.currentIndex);if(!n.enableContentCache||!a.contentLoaded)switch(g(Y,a.contentMode)){case Y.iframe:t.find(".content > .body").eq(r.currentIndex).empty().html('<iframe src="'+a.contentUrl+'" frameborder="0" scrolling="no" />').data("loaded","1");break;case Y.async:var i=u(t,r.currentIndex)._aria("busy","true").empty().append(H(n.loadingTemplate,{text:n.labels.loading}));e.ajax({url:a.contentUrl,cache:!1}).done(function(e){i.empty().html(e)._aria("busy","false").data("loaded","1")})}}}function T(e,t,n,r){var a=n.currentIndex;if(r>=0&&r<n.stepCount&&!(t.forceMoveForward&&r<n.currentIndex)){var i=d(e,r),s=i.parent(),o=s.hasClass("disabled");return s._enableAria(),i.click(),a===n.currentIndex&&o?(s._enableAria(!1),!1):!0}return!1}function k(t){t.preventDefault();var n=e(this),r=n.parent().parent().parent().parent(),i=f(r),s=p(r),l=n.attr("href");switch(l.substring(l.lastIndexOf("#")+1)){case"cancel":a(r);break;case"finish":o(r,s);break;case"next":C(r,i,s);break;case"previous":b(r,i,s)}}function S(e,t,n){if(t.enablePagination){var r=e.find(".actions a[href$='#finish']").parent(),a=e.find(".actions a[href$='#next']").parent();if(!t.forceMoveForward){var i=e.find(".actions a[href$='#previous']").parent();i._enableAria(n.currentIndex>0)}t.enableFinishButton&&t.showFinishButtonAlways?(r._enableAria(n.stepCount>0),a._enableAria(n.stepCount>1&&n.stepCount>n.currentIndex+1)):(r._showAria(t.enableFinishButton&&n.stepCount>=n.currentIndex+1),a._showAria(0===n.stepCount||n.stepCount>n.currentIndex+1)._enableAria(n.stepCount>n.currentIndex+1||!t.enableFinishButton))}}function q(t,n,r,a){var i=d(t,r.currentIndex),s=e('<span class="current-info audible">'+n.labels.current+" </span>"),o=t.find(".content > .title");if(null!=a){var l=d(t,a);l.parent().addClass("done").removeClass("error")._selectAria(!1),o.eq(a).removeClass("current").next(".body").removeClass("current"),s=l.find(".current-info"),i.focus()}i.prepend(s).parent()._selectAria().removeClass("done")._enableAria(),o.eq(r.currentIndex).addClass("current").next(".body").addClass("current")}function D(e,t,n,r){for(var a=v(e),i=r;i<n.stepCount;i++){var s=a+V+i,o=a+W+i,l=a+G+i,d=e.find(".title").eq(i)._id(l);e.find(".steps a").eq(i)._id(s)._aria("controls",o).attr("href","#"+l).html(H(t.titleTemplate,{index:i+1,title:d.html()})),e.find(".body").eq(i)._id(o)._aria("labelledby",l)}}function E(e,t){var n=l(e);e.bind("canceled"+n,t.onCanceled),e.bind("finishing"+n,t.onFinishing),e.bind("finished"+n,t.onFinished),e.bind("stepChanging"+n,t.onStepChanging),e.bind("stepChanged"+n,t.onStepChanged),t.enableKeyNavigation&&e.bind("keyup"+n,w),e.find(".actions a").bind("click"+n,k)}function M(e,t,n,r){return 0>r||r>=n.stepCount||n.currentIndex===r?!1:(N(e,r),n.currentIndex>r&&(n.currentIndex--,P(e,t,n)),n.stepCount--,c(e,r).remove(),u(e,r).remove(),d(e,r).parent().remove(),0===r&&e.find(".steps li").first().addClass("first"),r===n.stepCount&&e.find(".steps li").eq(r).addClass("last"),D(e,t,n,r),S(e,t,n),!0)}function N(e,t){h(e).splice(t,1)}function O(t,n,r){var a='<{0} class="{1}">{2}</{0}>',i=g(Z,n.stepsOrientation),s=i===Z.vertical?" vertical":"",o=e(a.format(n.contentContainerTag,"content "+n.clearFixCssClass,t.html())),l=e(a.format(n.stepsContainerTag,"steps "+n.clearFixCssClass,'<ul role="tablist"></ul>')),d=o.children(n.headerTag),u=o.children(n.bodyTag);t.attr("role","application").empty().append(l).append(o).addClass(n.cssClass+" "+n.clearFixCssClass+s),u.each(function(n){B(t,r,e(this),n)}),d.each(function(a){L(t,n,r,e(this),a)}),q(t,n,r),j(t,n,r)}function B(e,t,n,r){var a=v(e),i=a+W+r,s=a+G+r;n._id(i).attr("role","tabpanel")._aria("labelledby",s).addClass("body")._showAria(t.currentIndex===r)}function j(e,t,n){if(t.enablePagination){var r='<{0} class="actions {1}"><ul role="menu" aria-label="{2}">{3}</ul></{0}>',a='<li><a href="#{0}" role="menuitem">{1}</a></li>',i="";t.forceMoveForward||(i+=a.format("previous",t.labels.previous)),i+=a.format("next",t.labels.next),t.enableFinishButton&&(i+=a.format("finish",t.labels.finish)),t.enableCancelButton&&(i+=a.format("cancel",t.labels.cancel)),e.append(r.format(t.actionContainerTag,t.clearFixCssClass,t.labels.pagination,i)),S(e,t,n),F(e,t,n)}}function H(e,n){for(var r=e.match(/#([a-z]*)#/gi),a=0;a<r.length;a++){var i=r[a],s=i.substring(1,i.length-1);n[s]===t&&$("The key '{0}' does not exist in the substitute collection!",s),e=e.replace(i,n[s])}return e}function L(t,n,r,a,i){var s=v(t),o=s+V+i,d=s+W+i,u=s+G+i,c=t.find(".steps > ul"),f=H(n.titleTemplate,{index:i+1,title:a.html()}),p=e('<li role="tab"><a id="'+o+'" href="#'+u+'" aria-controls="'+d+'">'+f+"</a></li>");p._enableAria(n.enableAllSteps||r.currentIndex>i),r.currentIndex>i&&p.addClass("done"),a._id(u).attr("tabindex","-1").addClass("title"),0===i?c.prepend(p):c.find("li").eq(i-1).after(p),0===i&&c.find("li").removeClass("first").eq(i).addClass("first"),i===r.stepCount-1&&c.find("li").removeClass("last").eq(i).addClass("last"),p.children("a").bind("click"+l(t),z)}function P(t,n,r){n.saveState&&e.cookie&&e.cookie(R+v(t),r.currentIndex)}function U(t,n,r,a,i){var s=t.find(".content > .body"),o=g(et,n.transitionEffect),l=n.transitionEffectSpeed,d=s.eq(a),u=s.eq(i);switch(o){case et.fade:case et.slide:var c=o===et.fade?"fadeOut":"slideUp",f=o===et.fade?"fadeIn":"slideDown";r.transitionElement=d,u[c](l,function(){var t=e(this)._showAria(!1).parent().parent(),n=p(t);n.transitionElement&&(n.transitionElement[f](l,function(){e(this)._showAria()}),n.transitionElement=null)}).promise();break;case et.slideLeft:var h=u.outerWidth(!0),m=a>i?-h:h,v=a>i?h:-h;u.animate({left:m},l,function(){e(this)._showAria(!1)}).promise(),d.css("left",v+"px")._showAria().animate({left:0},l).promise();break;default:u._showAria(!1),d._showAria()}}function z(t){t.preventDefault();var n=e(this),r=n.parent().parent().parent().parent(),a=f(r),i=p(r),s=i.currentIndex;if(n.parent().is(":not(.disabled):not(.current)")){var o=n.attr("href"),l=parseInt(o.substring(o.lastIndexOf("-")+1),0);x(r,a,i,l)}return s===i.currentIndex?(d(r,s).focus(),!1):void 0}function $(e){throw arguments.length>1&&(e=e.format(Array.prototype.slice.call(arguments,1))),new Error(e)}function Q(e,t){null==t&&$("The argument '{0}' is null or undefined.",e)}e.fn.extend({_aria:function(e,t){return this.attr("aria-"+e,t)},_removeAria:function(e){return this.removeAttr("aria-"+e)},_enableAria:function(e){return null==e||e?this.removeClass("disabled")._aria("disabled","false"):this.addClass("disabled")._aria("disabled","true")},_showAria:function(e){return null==e||e?this.show()._aria("hidden","false"):this.hide()._aria("hidden","true")},_selectAria:function(e){return null==e||e?this.addClass("current")._aria("selected","true"):this.removeClass("current")._aria("selected","false")},_id:function(e){return e?this.attr("id",e):this.attr("id")}}),String.prototype.format||(String.prototype.format=function(){for(var t=1===arguments.length&&e.isArray(arguments[0])?arguments[0]:arguments,n=this,r=0;r<t.length;r++){var a=new RegExp("\\{"+r+"\\}","gm");n=n.replace(a,t[r])}return n});var K=0,R="jQu3ry_5teps_St@te_",V="-t-",W="-p-",G="-h-",J="Index out of range.",X="One or more corresponding step {0} are missing.";e.fn.steps=function(t){return e.fn.steps[t]?e.fn.steps[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist on jQuery.steps"):I.apply(this,arguments)},e.fn.steps.add=function(e){var t=p(this);return _(this,f(this),t,t.stepCount,e)},e.fn.steps.destroy=function(){return s(this,f(this))},e.fn.steps.finish=function(){o(this,p(this))},e.fn.steps.getCurrentIndex=function(){return p(this).currentIndex},e.fn.steps.getCurrentStep=function(){return m(this,p(this).currentIndex)},e.fn.steps.getStep=function(e){return m(this,e)},e.fn.steps.insert=function(e,t){return _(this,f(this),p(this),e,t)},e.fn.steps.next=function(){return C(this,f(this),p(this))},e.fn.steps.previous=function(){return b(this,f(this),p(this))},e.fn.steps.remove=function(e){return M(this,f(this),p(this),e)},e.fn.steps.setStep=function(){throw new Error("Not yet implemented!")},e.fn.steps.skip=function(){throw new Error("Not yet implemented!")};var Y=e.fn.steps.contentMode={html:0,iframe:1,async:2},Z=e.fn.steps.stepsOrientation={horizontal:0,vertical:1},et=e.fn.steps.transitionEffect={none:0,fade:1,slide:2,slideLeft:3},tt=e.fn.steps.stepModel={title:"",content:"",contentUrl:"",contentMode:Y.html,contentLoaded:!1},nt=e.fn.steps.defaults={headerTag:"h1",bodyTag:"div",contentContainerTag:"div",actionContainerTag:"div",stepsContainerTag:"div",cssClass:"wizard",clearFixCssClass:"clearfix",stepsOrientation:Z.horizontal,titleTemplate:'<span class="number">#index#.</span> #title#',loadingTemplate:'<span class="spinner"></span> #text#',autoFocus:!1,enableAllSteps:!1,enableKeyNavigation:!0,enablePagination:!0,suppressPaginationOnFocus:!0,enableContentCache:!0,enableCancelButton:!0,enableFinishButton:!0,preloadContent:!1,showFinishButtonAlways:!1,forceMoveForward:!1,saveState:!1,startIndex:0,transitionEffect:et.none,transitionEffectSpeed:200,onStepChanging:function(){return!0},onStepChanged:function(){},onCanceled:function(){},onFinishing:function(){return!0},onFinished:function(){},labels:{cancel:"取消",current:"当前步骤：",pagination:"分页",finish:"完成",next:"下一步",previous:"上一步",loading:"加载中 ..."}}}(jQuery);