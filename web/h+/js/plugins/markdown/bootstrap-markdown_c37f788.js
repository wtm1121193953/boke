!function(t){"use strict";var e=function(e,n){this.$ns="bootstrap-markdown",this.$element=t(e),this.$editable={el:null,type:null,attrKeys:[],attrValues:[],content:null},this.$options=t.extend(!0,{},t.fn.markdown.defaults,n,this.$element.data(),this.$element.data("options")),this.$oldContent=null,this.$isPreview=!1,this.$isFullscreen=!1,this.$editor=null,this.$textarea=null,this.$handler=[],this.$callback=[],this.$nextTab=[],this.showEditor()};e.prototype={constructor:e,__alterButtons:function(e,n){var i=this.$handler,a="all"==e,s=this;t.each(i,function(t,i){var o=!0;o=a?!1:i.indexOf(e)<0,0==o&&n(s.$editor.find('button[data-handler="'+i+'"]'))})},__buildButtons:function(e,n){var i,a=this.$ns,s=this.$handler,o=this.$callback;for(i=0;i<e.length;i++){var r,l=e[i];for(r=0;r<l.length;r++){var c,h=l[r].data,d=t("<div/>",{"class":"btn-group"});for(c=0;c<h.length;c++){var u,f,p=h[c],g=a+"-"+p.name,m=this.__getIcon(p.icon),v=p.btnText?p.btnText:"",b=p.btnClass?p.btnClass:"btn",y=p.tabIndex?p.tabIndex:"-1",k="undefined"!=typeof p.hotkey?p.hotkey:"",w="undefined"!=typeof jQuery.hotkeys&&""!==k?" ("+k+")":"";u=t("<button></button>"),u.text(" "+this.__localize(v)).addClass("btn-white btn-sm").addClass(b),b.match(/btn\-(primary|success|info|warning|danger|link)/)&&u.removeClass("btn-default"),u.attr({type:"button",title:this.__localize(p.title)+w,tabindex:y,"data-provider":a,"data-handler":g,"data-hotkey":k}),1==p.toggle&&u.attr("data-toggle","button"),f=t("<span/>"),f.addClass(m),f.prependTo(u),d.append(u),s.push(g),o.push(p.callback)}n.append(d)}}return n},__setListener:function(){var e="undefined"!=typeof this.$textarea.attr("rows"),n=this.$textarea.val().split("\n").length>5?this.$textarea.val().split("\n").length:"5",i=e?this.$textarea.attr("rows"):n;this.$textarea.attr("rows",i),this.$options.resize&&this.$textarea.css("resize",this.$options.resize),this.$textarea.on("focus",t.proxy(this.focus,this)).on("keypress",t.proxy(this.keypress,this)).on("keyup",t.proxy(this.keyup,this)).on("change",t.proxy(this.change,this)),this.eventSupported("keydown")&&this.$textarea.on("keydown",t.proxy(this.keydown,this)),this.$textarea.data("markdown",this)},__handle:function(e){var n=t(e.currentTarget),i=this.$handler,a=this.$callback,s=n.attr("data-handler"),o=i.indexOf(s),r=a[o];t(e.currentTarget).focus(),r(this),this.change(this),s.indexOf("cmdSave")<0&&this.$textarea.focus(),e.preventDefault()},__localize:function(e){var n=t.fn.markdown.messages,i=this.$options.language;return"undefined"!=typeof n&&"undefined"!=typeof n[i]&&"undefined"!=typeof n[i][e]?n[i][e]:e},__getIcon:function(t){return"object"==typeof t?t[this.$options.iconlibrary]:t},setFullscreen:function(e){var n=this.$editor,i=this.$textarea;e===!0?(n.addClass("md-fullscreen-mode"),t("body").addClass("md-nooverflow"),this.$options.onFullscreen(this)):(n.removeClass("md-fullscreen-mode"),t("body").removeClass("md-nooverflow")),this.$isFullscreen=e,i.focus()},showEditor:function(){var e,n=this,i=this.$ns,a=this.$element,s=(a.css("height"),a.css("width"),this.$editable),o=this.$handler,r=this.$callback,l=this.$options,c=t("<div/>",{"class":"md-editor",click:function(){n.focus()}});if(null==this.$editor){var h=t("<div/>",{"class":"md-header btn-toolbar"}),d=[];if(l.buttons.length>0&&(d=d.concat(l.buttons[0])),l.additionalButtons.length>0&&(d=d.concat(l.additionalButtons[0])),l.reorderButtonGroups.length>0&&(d=d.filter(function(t){return l.reorderButtonGroups.indexOf(t.name)>-1}).sort(function(t,e){return l.reorderButtonGroups.indexOf(t.name)<l.reorderButtonGroups.indexOf(e.name)?-1:l.reorderButtonGroups.indexOf(t.name)>l.reorderButtonGroups.indexOf(e.name)?1:0})),d.length>0&&(h=this.__buildButtons([d],h)),l.fullscreen.enable&&h.append('<div class="md-controls"><a class="md-control md-control-fullscreen" href="#"><span class="'+this.__getIcon(l.fullscreen.icons.fullscreenOn)+'"></span></a></div>').on("click",".md-control-fullscreen",function(t){t.preventDefault(),n.setFullscreen(!0)}),c.append(h),a.is("textarea"))a.before(c),e=a,e.addClass("md-input"),c.append(e);else{var u="function"==typeof toMarkdown?toMarkdown(a.html()):a.html(),f=t.trim(u);e=t("<textarea/>",{"class":"md-input",val:f}),c.append(e),s.el=a,s.type=a.prop("tagName").toLowerCase(),s.content=a.html(),t(a[0].attributes).each(function(){s.attrKeys.push(this.nodeName),s.attrValues.push(this.nodeValue)}),a.replaceWith(c)}var p=t("<div/>",{"class":"md-footer"}),g=!1,m="";if(l.savable){g=!0;var v="cmdSave";o.push(v),r.push(l.onSave),p.append('<button class="btn btn-success" data-provider="'+i+'" data-handler="'+v+'"><i class="icon icon-white icon-ok"></i> '+this.__localize("Save")+"</button>")}if(m="function"==typeof l.footer?l.footer(this):l.footer,""!==t.trim(m)&&(g=!0,p.append(m)),g&&c.append(p),l.width&&"inherit"!==l.width&&(jQuery.isNumeric(l.width)?(c.css("display","table"),e.css("width",l.width+"px")):c.addClass(l.width)),l.height&&"inherit"!==l.height)if(jQuery.isNumeric(l.height)){var b=l.height;h&&(b=Math.max(0,b-h.outerHeight())),p&&(b=Math.max(0,b-p.outerHeight())),e.css("height",b+"px")}else c.addClass(l.height);this.$editor=c,this.$textarea=e,this.$editable=s,this.$oldContent=this.getContent(),this.__setListener(),this.$editor.attr("id",(new Date).getTime()),this.$editor.on("click",'[data-provider="bootstrap-markdown"]',t.proxy(this.__handle,this)),(this.$element.is(":disabled")||this.$element.is("[readonly]"))&&(this.$editor.addClass("md-editor-disabled"),this.disableButtons("all")),this.eventSupported("keydown")&&"object"==typeof jQuery.hotkeys&&h.find('[data-provider="bootstrap-markdown"]').each(function(){var n=t(this),i=n.attr("data-hotkey");""!==i.toLowerCase()&&e.bind("keydown",i,function(){return n.trigger("click"),!1})}),"preview"===l.initialstate?this.showPreview():"fullscreen"===l.initialstate&&l.fullscreen.enable&&this.setFullscreen(!0)}else this.$editor.show();return l.autofocus&&(this.$textarea.focus(),this.$editor.addClass("active")),l.fullscreen.enable&&l.fullscreen!==!1&&(this.$editor.append('          <div class="md-fullscreen-controls">            <a href="#" class="exit-fullscreen" title="Exit fullscreen"><span class="'+this.__getIcon(l.fullscreen.icons.fullscreenOff)+'"></span></a>          </div>'),this.$editor.on("click",".exit-fullscreen",function(t){t.preventDefault(),n.setFullscreen(!1)})),this.hideButtons(l.hiddenButtons),this.disableButtons(l.disabledButtons),l.onShow(this),this},parseContent:function(){var t,e=this.$options.onPreview(this);if("string"==typeof e)t=e;else{var n=this.$textarea.val();t="object"==typeof markdown?markdown.toHTML(n):"function"==typeof marked?marked(n):n}return t},showPreview:function(){var e,n=(this.$options,this.$textarea),i=n.next(),a=t("<div/>",{"class":"md-preview","data-provider":"markdown-preview"});return this.$isPreview=!0,this.disableButtons("all").enableButtons("cmdPreview"),e=this.parseContent(),a.html(e),i&&"md-footer"==i.attr("class")?a.insertBefore(i):n.parent().append(a),a.css({width:n.outerWidth()+"px",height:n.outerHeight()+"px"}),this.$options.resize&&a.css("resize",this.$options.resize),n.hide(),a.data("markdown",this),(this.$element.is(":disabled")||this.$element.is("[readonly]"))&&(this.$editor.addClass("md-editor-disabled"),this.disableButtons("all")),this},hidePreview:function(){this.$isPreview=!1;var t=this.$editor.find('div[data-provider="markdown-preview"]');return t.remove(),this.enableButtons("all"),this.disableButtons(this.$options.disabledButtons),this.$textarea.show(),this.__setListener(),this},isDirty:function(){return this.$oldContent!=this.getContent()},getContent:function(){return this.$textarea.val()},setContent:function(t){return this.$textarea.val(t),this},findSelection:function(t){var e,n=this.getContent();if(e=n.indexOf(t),e>=0&&t.length>0){var i,a=this.getSelection();return this.setSelection(e,e+t.length),i=this.getSelection(),this.setSelection(a.start,a.end),i}return null},getSelection:function(){var t=this.$textarea[0];return("selectionStart"in t&&function(){var e=t.selectionEnd-t.selectionStart;return{start:t.selectionStart,end:t.selectionEnd,length:e,text:t.value.substr(t.selectionStart,e)}}||function(){return null})()},setSelection:function(t,e){var n=this.$textarea[0];return("selectionStart"in n&&function(){n.selectionStart=t,n.selectionEnd=e}||function(){return null})()},replaceSelection:function(t){var e=this.$textarea[0];return("selectionStart"in e&&function(){return e.value=e.value.substr(0,e.selectionStart)+t+e.value.substr(e.selectionEnd,e.value.length),e.selectionStart=e.value.length,this}||function(){return e.value+=t,jQuery(e)})()},getNextTab:function(){if(0==this.$nextTab.length)return null;var t,e=this.$nextTab.shift();return"function"==typeof e?t=e():"object"==typeof e&&e.length>0&&(t=e),t},setNextTab:function(t,e){if("string"==typeof t){var n=this;this.$nextTab.push(function(){return n.findSelection(t)})}else if("number"==typeof t&&"number"==typeof e){var i=this.getSelection();this.setSelection(t,e),this.$nextTab.push(this.getSelection()),this.setSelection(i.start,i.end)}},__parseButtonNameParam:function(t){var e=[];return"string"==typeof t?e.push(t):e=t,e},enableButtons:function(e){var n=this.__parseButtonNameParam(e),i=this;return t.each(n,function(t){i.__alterButtons(n[t],function(t){t.removeAttr("disabled")})}),this},disableButtons:function(e){var n=this.__parseButtonNameParam(e),i=this;return t.each(n,function(t){i.__alterButtons(n[t],function(t){t.attr("disabled","disabled")})}),this},hideButtons:function(e){var n=this.__parseButtonNameParam(e),i=this;return t.each(n,function(t){i.__alterButtons(n[t],function(t){t.addClass("hidden")})}),this},showButtons:function(e){var n=this.__parseButtonNameParam(e),i=this;return t.each(n,function(t){i.__alterButtons(n[t],function(t){t.removeClass("hidden")})}),this},eventSupported:function(t){var e=t in this.$element;return e||(this.$element.setAttribute(t,"return;"),e="function"==typeof this.$element[t]),e},keyup:function(t){var e=!1;switch(t.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:var n;if(n=this.getNextTab(),null!=n){var i=this;setTimeout(function(){i.setSelection(n.start,n.end)},500),e=!0}else{var a=this.getSelection();a.start==a.end&&a.end==this.getContent().length?e=!1:(this.setSelection(this.getContent().length,this.getContent().length),e=!0)}break;case 13:e=!1;break;case 27:this.$isFullscreen&&this.setFullscreen(!1),e=!1;break;default:e=!1}e&&(t.stopPropagation(),t.preventDefault()),this.$options.onChange(this)},change:function(){return this.$options.onChange(this),this},focus:function(){var e=this.$options,n=(e.hideable,this.$editor);return n.addClass("active"),t(document).find(".md-editor").each(function(){if(t(this).attr("id")!=n.attr("id")){var e;e=t(this).find("textarea").data("markdown"),null==e&&(e=t(this).find('div[data-provider="markdown-preview"]').data("markdown")),e&&e.blur()}}),e.onFocus(this),this},blur:function(){var e=this.$options,n=e.hideable,i=this.$editor,a=this.$editable;if(i.hasClass("active")||0==this.$element.parent().length){if(i.removeClass("active"),n)if(null!=a.el){var s=t("<"+a.type+"/>"),o=this.getContent(),r="object"==typeof markdown?markdown.toHTML(o):o;t(a.attrKeys).each(function(t){s.attr(a.attrKeys[t],a.attrValues[t])}),s.html(r),i.replaceWith(s)}else i.hide();e.onBlur(this)}return this}};var n=t.fn.markdown;t.fn.markdown=function(n){return this.each(function(){var i=t(this),a=i.data("markdown"),s="object"==typeof n&&n;a||i.data("markdown",a=new e(this,s))})},t.fn.markdown.messages={},t.fn.markdown.defaults={autofocus:!1,hideable:!1,savable:!1,width:"inherit",height:"inherit",resize:"none",iconlibrary:"glyph",language:"zh",initialstate:"editor",buttons:[[{name:"groupFont",data:[{name:"cmdBold",hotkey:"Ctrl+B",title:"Bold",icon:{glyph:"glyphicon glyphicon-bold",fa:"fa fa-bold","fa-3":"icon-bold"},callback:function(t){var e,n,i=t.getSelection(),a=t.getContent();e=0==i.length?t.__localize("strong text"):i.text,"**"==a.substr(i.start-2,2)&&"**"==a.substr(i.end,2)?(t.setSelection(i.start-2,i.end+2),t.replaceSelection(e),n=i.start-2):(t.replaceSelection("**"+e+"**"),n=i.start+2),t.setSelection(n,n+e.length)}},{name:"cmdItalic",title:"Italic",hotkey:"Ctrl+I",icon:{glyph:"glyphicon glyphicon-italic",fa:"fa fa-italic","fa-3":"icon-italic"},callback:function(t){var e,n,i=t.getSelection(),a=t.getContent();e=0==i.length?t.__localize("emphasized text"):i.text,"_"==a.substr(i.start-1,1)&&"_"==a.substr(i.end,1)?(t.setSelection(i.start-1,i.end+1),t.replaceSelection(e),n=i.start-1):(t.replaceSelection("_"+e+"_"),n=i.start+1),t.setSelection(n,n+e.length)}},{name:"cmdHeading",title:"Heading",hotkey:"Ctrl+H",icon:{glyph:"glyphicon glyphicon-header",fa:"fa fa-header","fa-3":"icon-font"},callback:function(t){var e,n,i,a,s=t.getSelection(),o=t.getContent();e=0==s.length?t.__localize("heading text"):s.text+"\n",i=4,"### "==o.substr(s.start-i,i)||(i=3,"###"==o.substr(s.start-i,i))?(t.setSelection(s.start-i,s.end),t.replaceSelection(e),n=s.start-i):s.start>0&&(a=o.substr(s.start-1,1),!!a&&"\n"!=a)?(t.replaceSelection("\n\n### "+e),n=s.start+6):(t.replaceSelection("### "+e),n=s.start+4),t.setSelection(n,n+e.length)}}]},{name:"groupLink",data:[{name:"cmdUrl",title:"URL/Link",hotkey:"Ctrl+L",icon:{glyph:"glyphicon glyphicon-link",fa:"fa fa-link","fa-3":"icon-link"},callback:function(e){{var n,i,a,s=e.getSelection();e.getContent()}if(n=0==s.length?e.__localize("enter link description here"):s.text,a=prompt(e.__localize("Insert Hyperlink"),"http://"),null!=a&&""!=a&&"http://"!=a&&"http"==a.substr(0,4)){var o=t("<div>"+a+"</div>").text();e.replaceSelection("["+n+"]("+o+")"),i=s.start+1,e.setSelection(i,i+n.length)}}},{name:"cmdImage",title:"Image",hotkey:"Ctrl+G",icon:{glyph:"glyphicon glyphicon-picture",fa:"fa fa-picture-o","fa-3":"icon-picture"},callback:function(e){{var n,i,a,s=e.getSelection();e.getContent()}if(n=0==s.length?e.__localize("enter image description here"):s.text,a=prompt(e.__localize("Insert Image Hyperlink"),"http://"),null!=a&&""!=a&&"http://"!=a&&"http"==a.substr(0,4)){var o=t("<div>"+a+"</div>").text();e.replaceSelection("!["+n+"]("+o+' "'+e.__localize("enter image title here")+'")'),i=s.start+2,e.setNextTab(e.__localize("enter image title here")),e.setSelection(i,i+n.length)}}}]},{name:"groupMisc",data:[{name:"cmdList",hotkey:"Ctrl+U",title:"Unordered List",icon:{glyph:"glyphicon glyphicon-list",fa:"fa fa-list","fa-3":"icon-list-ul"},callback:function(e){{var n,i,a=e.getSelection();e.getContent()}if(0==a.length)n=e.__localize("list text here"),e.replaceSelection("- "+n),i=a.start+2;else if(a.text.indexOf("\n")<0)n=a.text,e.replaceSelection("- "+n),i=a.start+2;else{var s=[];s=a.text.split("\n"),n=s[0],t.each(s,function(t,e){s[t]="- "+e}),e.replaceSelection("\n\n"+s.join("\n")),i=a.start+4}e.setSelection(i,i+n.length)}},{name:"cmdListO",hotkey:"Ctrl+O",title:"Ordered List",icon:{glyph:"glyphicon glyphicon-th-list",fa:"fa fa-list-ol","fa-3":"icon-list-ol"},callback:function(e){{var n,i,a=e.getSelection();e.getContent()}if(0==a.length)n=e.__localize("list text here"),e.replaceSelection("1. "+n),i=a.start+3;else if(a.text.indexOf("\n")<0)n=a.text,e.replaceSelection("1. "+n),i=a.start+3;else{var s=[];s=a.text.split("\n"),n=s[0],t.each(s,function(t,e){s[t]="1. "+e}),e.replaceSelection("\n\n"+s.join("\n")),i=a.start+5}e.setSelection(i,i+n.length)}},{name:"cmdCode",hotkey:"Ctrl+K",title:"Code",icon:{glyph:"glyphicon glyphicon-asterisk",fa:"fa fa-code","fa-3":"icon-code"},callback:function(t){var e,n,i=t.getSelection(),a=t.getContent();e=0==i.length?t.__localize("code text here"):i.text,"`"==a.substr(i.start-1,1)&&"`"==a.substr(i.end,1)?(t.setSelection(i.start-1,i.end+1),t.replaceSelection(e),n=i.start-1):(t.replaceSelection("`"+e+"`"),n=i.start+1),t.setSelection(n,n+e.length)}},{name:"cmdQuote",hotkey:"Ctrl+Q",title:"Quote",icon:{glyph:"glyphicon glyphicon-comment",fa:"fa fa-quote-left","fa-3":"icon-quote-left"},callback:function(e){{var n,i,a=e.getSelection();e.getContent()}if(0==a.length)n=e.__localize("quote here"),e.replaceSelection("> "+n),i=a.start+2;else if(a.text.indexOf("\n")<0)n=a.text,e.replaceSelection("> "+n),i=a.start+2;else{var s=[];s=a.text.split("\n"),n=s[0],t.each(s,function(t,e){s[t]="> "+e}),e.replaceSelection("\n\n"+s.join("\n")),i=a.start+4}e.setSelection(i,i+n.length)}}]},{name:"groupUtil",data:[{name:"cmdPreview",toggle:!0,hotkey:"Ctrl+P",title:"Preview",btnText:"Preview",btnClass:"btn btn-sm",icon:{glyph:"glyphicon glyphicon-search",fa:"fa fa-search","fa-3":"icon-search"},callback:function(t){var e=t.$isPreview;0==e?t.showPreview():t.hidePreview()}}]}]],additionalButtons:[],reorderButtonGroups:[],hiddenButtons:[],disabledButtons:[],footer:"",fullscreen:{enable:!0,icons:{fullscreenOn:{fa:"fa fa-expand",glyph:"glyphicon glyphicon-fullscreen","fa-3":"icon-resize-full"},fullscreenOff:{fa:"fa fa-compress",glyph:"glyphicon glyphicon-fullscreen","fa-3":"icon-resize-small"}}},onShow:function(){},onPreview:function(){},onSave:function(){},onBlur:function(){},onFocus:function(){},onChange:function(){},onFullscreen:function(){}},t.fn.markdown.Constructor=e,t.fn.markdown.noConflict=function(){return t.fn.markdown=n,this};var i=function(t){var e=t;return e.data("markdown")?void e.data("markdown").showEditor():void e.markdown()},a=function(){var e=t(document.activeElement);t(document).find(".md-editor").each(function(){var n=t(this),i=e.closest(".md-editor")[0]===this,a=n.find("textarea").data("markdown")||n.find('div[data-provider="markdown-preview"]').data("markdown");a&&!i&&a.blur()})};t(document).on("click.markdown.data-api",'[data-provide="markdown-editable"]',function(e){i(t(this)),e.preventDefault()}).on("click focusin",function(t){a(t)}).ready(function(){t('textarea[data-provide="markdown"]').each(function(){i(t(this))})})}(window.jQuery);