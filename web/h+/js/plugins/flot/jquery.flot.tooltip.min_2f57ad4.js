/*
 * jquery.flot.tooltip
 *
 * description: easy-to-use tooltips for Flot charts
 * version: 0.6.2
 * author: Krzysztof Urbas @krzysu [myviews.pl]
 * website: https://github.com/krzysu/flot.tooltip
 *
 * build on 2013-09-30
 * released under MIT License, 2012
*/
(function(t){var o={tooltip:!1,tooltipOpts:{content:"%s | X: %x | Y: %y",xDateFormat:null,yDateFormat:null,shifts:{x:10,y:20},defaultTheme:!0,onHover:function(){}}},i=function(t){this.tipPosition={x:0,y:0},this.init(t)};i.prototype.init=function(o){function i(t){var o={};o.x=t.pageX,o.y=t.pageY,s.updateTooltipPosition(o)}function e(t,o,i){var e=s.getDomElement();if(i){var n;n=s.stringFormat(s.tooltipOptions.content,i),e.html(n),s.updateTooltipPosition({x:o.pageX,y:o.pageY}),e.css({left:s.tipPosition.x+s.tooltipOptions.shifts.x,top:s.tipPosition.y+s.tooltipOptions.shifts.y}).show(),"function"==typeof s.tooltipOptions.onHover&&s.tooltipOptions.onHover(i,e)}else e.hide().html("")}var s=this;o.hooks.bindEvents.push(function(o,n){s.plotOptions=o.getOptions(),s.plotOptions.tooltip!==!1&&void 0!==s.plotOptions.tooltip&&(s.tooltipOptions=s.plotOptions.tooltipOpts,s.getDomElement(),t(o.getPlaceholder()).bind("plothover",e),t(n).bind("mousemove",i))}),o.hooks.shutdown.push(function(o,s){t(o.getPlaceholder()).unbind("plothover",e),t(s).unbind("mousemove",i)})},i.prototype.getDomElement=function(){var o;return t("#flotTip").length>0?o=t("#flotTip"):(o=t("<div />").attr("id","flotTip"),o.appendTo("body").hide().css({position:"absolute"}),this.tooltipOptions.defaultTheme&&o.css({background:"#fff","z-index":"100",padding:"0.4em 0.6em","border-radius":"0.5em","font-size":"0.8em",border:"1px solid #111",display:"none","white-space":"nowrap"})),o},i.prototype.updateTooltipPosition=function(o){var i=t("#flotTip").outerWidth()+this.tooltipOptions.shifts.x,e=t("#flotTip").outerHeight()+this.tooltipOptions.shifts.y;o.x-t(window).scrollLeft()>t(window).innerWidth()-i&&(o.x-=i),o.y-t(window).scrollTop()>t(window).innerHeight()-e&&(o.y-=e),this.tipPosition.x=o.x,this.tipPosition.y=o.y},i.prototype.stringFormat=function(t,o){var i=/%p\.{0,1}(\d{0,})/,e=/%s/,s=/%x\.{0,1}(?:\d{0,})/,n=/%y\.{0,1}(?:\d{0,})/;return"function"==typeof t&&(t=t(o.series.label,o.series.data[o.dataIndex][0],o.series.data[o.dataIndex][1],o)),o.series.percent!==void 0&&(t=this.adjustValPrecision(i,t,o.series.percent)),o.series.label!==void 0&&(t=t.replace(e,o.series.label)),this.isTimeMode("xaxis",o)&&this.isXDateFormat(o)&&(t=t.replace(s,this.timestampToDate(o.series.data[o.dataIndex][0],this.tooltipOptions.xDateFormat))),this.isTimeMode("yaxis",o)&&this.isYDateFormat(o)&&(t=t.replace(n,this.timestampToDate(o.series.data[o.dataIndex][1],this.tooltipOptions.yDateFormat))),"number"==typeof o.series.data[o.dataIndex][0]&&(t=this.adjustValPrecision(s,t,o.series.data[o.dataIndex][0])),"number"==typeof o.series.data[o.dataIndex][1]&&(t=this.adjustValPrecision(n,t,o.series.data[o.dataIndex][1])),o.series.xaxis.tickFormatter!==void 0&&(t=t.replace(s,o.series.xaxis.tickFormatter(o.series.data[o.dataIndex][0],o.series.xaxis))),o.series.yaxis.tickFormatter!==void 0&&(t=t.replace(n,o.series.yaxis.tickFormatter(o.series.data[o.dataIndex][1],o.series.yaxis))),t},i.prototype.isTimeMode=function(t,o){return o.series[t].options.mode!==void 0&&"time"===o.series[t].options.mode},i.prototype.isXDateFormat=function(){return this.tooltipOptions.xDateFormat!==void 0&&null!==this.tooltipOptions.xDateFormat},i.prototype.isYDateFormat=function(){return this.tooltipOptions.yDateFormat!==void 0&&null!==this.tooltipOptions.yDateFormat},i.prototype.timestampToDate=function(o,i){var e=new Date(o);return t.plot.formatDate(e,i)},i.prototype.adjustValPrecision=function(t,o,i){var e,s=o.match(t);return null!==s&&""!==RegExp.$1&&(e=RegExp.$1,i=i.toFixed(e),o=o.replace(t,i)),o};var e=function(t){new i(t)};t.plot.plugins.push({init:e,options:o,name:"tooltip",version:"0.6.1"})})(jQuery);
