!function(){var a={msgurl:"mailbox.html?msg=",chatlogurl:"mailbox.html?user=",aniTime:200,right:-232,api:{friend:"js/plugins/layer/layim/data/friend.json",group:"js/plugins/layer/layim/data/group.json",chatlog:"js/plugins/layer/layim/data/chatlog.json",groups:"js/plugins/layer/layim/data/groups.json",sendurl:""},user:{name:"游客",face:"img/a1.jpg"},autoReplay:["您好，我现在有事不在，一会再和您联系。","你没发错吧？","洗澡中，请勿打扰，偷窥请购票，个体四十，团体八折，订票电话：一般人我不告诉他！","你好，我是主人的美女秘书，有什么事就跟我说吧，等他回来我会转告他的。","我正在拉磨，没法招呼您，因为我们家毛驴去动物保护协会把我告了，说我剥夺它休产假的权利。","<（@￣︶￣@）>","你要和我说话？你真的要和我说话？你确定自己想说吗？你一定非说不可吗？那你说吧，这是自动回复。","主人正在开机自检，键盘鼠标看好机会出去凉快去了，我是他的电冰箱，我打字比较慢，你慢慢说，别急……","(*^__^*) 嘻嘻，是贤心吗？"],chating:{},hosts:function(){var a=location.href.match(/\:\d+/);return a=a?a[0]:"","http://"+document.domain+a+"/"}(),json:function(a,i,e,t){return $.ajax({type:"POST",url:a,data:i,dataType:"json",success:e,error:t})},stopMP:function(a){a?a.stopPropagation():a.cancelBubble=!0}},i=[$(window),$(document),$("html"),$("body")],e={};e.tabs=function(a){var i=e.node;i.tabs.eq(a).addClass("xxim_tabnow").siblings().removeClass("xxim_tabnow"),i.list.eq(a).show().siblings(".xxim_list").hide(),0===i.list.eq(a).find("li").length&&e.getDates(a)},e.renode=function(){e.node={tabs:$("#xxim_tabs>span"),list:$(".xxim_list"),online:$(".xxim_online"),setonline:$(".xxim_setonline"),onlinetex:$("#xxim_onlinetex"),xximon:$("#xxim_on"),layimFooter:$("#xxim_bottom"),xximHide:$("#xxim_hide"),xximSearch:$("#xxim_searchkey"),searchMian:$("#xxim_searchmain"),closeSearch:$("#xxim_closesearch"),layimMin:$("#layim_min")}},e.expend=function(){var i=e.node;"1"!==e.layimNode.attr("state")?e.layimNode.stop().animate({right:a.right},a.aniTime,function(){i.xximon.addClass("xxim_off");try{localStorage.layimState=1}catch(t){}e.layimNode.attr({state:1}),i.layimFooter.addClass("xxim_expend").stop().animate({marginLeft:a.right},a.aniTime/2),i.xximHide.addClass("xxim_show")}):(e.layimNode.stop().animate({right:1},a.aniTime,function(){i.xximon.removeClass("xxim_off");try{localStorage.layimState=2}catch(a){}e.layimNode.removeAttr("state"),i.layimFooter.removeClass("xxim_expend"),i.xximHide.removeClass("xxim_show")}),i.layimFooter.stop().animate({marginLeft:0},a.aniTime))},e.layinit=function(){var i=e.node;try{"1"===localStorage.layimState&&(e.layimNode.attr({state:1}).css({right:a.right}),i.xximon.addClass("xxim_off"),i.layimFooter.addClass("xxim_expend").css({marginLeft:a.right}),i.xximHide.addClass("xxim_show"))}catch(t){}},e.popchat=function(i){var t=e.node,s={};s.success=function(l){layer.setMove(),e.chatbox=l.find("#layim_chatbox"),s.chatlist=e.chatbox.find(".layim_chatmore>ul"),s.chatlist.html('<li data-id="'+i.id+'" type="'+i.type+'"  id="layim_user'+i.type+i.id+'"><span>'+i.name+"</span><em>×</em></li>"),e.tabchat(i,e.chatbox),e.chatbox.find(".layer_setmin").on("click",function(){l.attr("times");l.hide(),t.layimMin.text(e.nowchat.name).show()}),e.chatbox.find(".layim_close").on("click",function(){var i=l.attr("times");layer.close(i),e.chatbox=null,a.chating={},a.chatings=0}),s.chatlist.on("mouseenter","li",function(){$(this).find("em").show()}).on("mouseleave","li",function(){$(this).find("em").hide()}),s.chatlist.on("click","li em",function(i){var t,l=$(this).parent(),n=l.attr("type"),c=l.attr("data-id"),m=l.index(),o=s.chatlist.find("li");a.stopMP(i),delete a.chating[n+c],a.chatings--,l.remove(),$("#layim_area"+n+c).remove(),"group"===n&&$("#layim_group"+n+c).remove(),l.hasClass("layim_chatnow")&&(t=m===a.chatings?m-1:m+1,e.tabchat(a.chating[o.eq(t).attr("type")+o.eq(t).attr("data-id")])),1===s.chatlist.find("li").length&&s.chatlist.parent().hide()}),s.chatlist.on("click","li",function(){var i=$(this),t=i.attr("type"),s=i.attr("data-id");e.tabchat(a.chating[t+s])}),s.sendType=$("#layim_sendtype"),s.sendTypes=s.sendType.find("span"),$("#layim_enter").on("click",function(i){a.stopMP(i),s.sendType.show()}),s.sendTypes.on("click",function(){s.sendTypes.find("i").text(""),$(this).find("i").text("√")}),e.transmit()},s.html='<div class="layim_chatbox" id="layim_chatbox"><h6><span class="layim_move"></span>    <a href="'+i.url+'" class="layim_face" target="_blank"><img src="'+i.face+'" ></a>    <a href="'+i.url+'" class="layim_names" target="_blank">'+i.name+'</a>    <span class="layim_rightbtn">        <i class="layer_setmin">—</i>        <i class="layim_close">&times;</i>    </span></h6><div class="layim_chatmore" id="layim_chatmore">    <ul class="layim_chatlist"></ul></div><div class="layim_groups" id="layim_groups"></div><div class="layim_chat">    <div class="layim_chatarea" id="layim_chatarea">        <ul class="layim_chatview layim_chatthis"  id="layim_area'+i.type+i.id+'"></ul>    </div>    <div class="layim_tool">        <i class="layim_addface fa fa-meh-o" title="发送表情"></i>        <a href="javascript:;"><i class="layim_addimage fa fa-picture-o" title="上传图片"></i></a>        <a href="javascript:;"><i class="layim_addfile fa fa-paperclip" title="上传附件"></i></a>        <a href="" target="_blank" class="layim_seechatlog"><i class="fa fa-comment-o"></i>聊天记录</a>    </div>    <textarea class="layim_write" id="layim_write"></textarea>    <div class="layim_send">        <div class="layim_sendbtn" id="layim_sendbtn">发送<span class="layim_enter" id="layim_enter"><em class="layim_zero"></em></span></div>        <div class="layim_sendtype" id="layim_sendtype">            <span><i>√</i>按Enter键发送</span>            <span><i></i>按Ctrl+Enter键发送</span>        </div>    </div></div></div>',a.chatings<1?$.layer({type:1,border:[0],title:!1,shade:[0],area:["620px","493px"],move:".layim_chatbox .layim_move",moveType:1,closeBtn:!1,offset:[($(window).height()-493)/2+"px",""],page:{html:s.html},success:function(a){s.success(a)}}):(s.chatmore=e.chatbox.find("#layim_chatmore"),s.chatarea=e.chatbox.find("#layim_chatarea"),s.chatmore.show(),s.chatmore.find("ul>li").removeClass("layim_chatnow"),s.chatmore.find("ul").append('<li data-id="'+i.id+'" type="'+i.type+'" id="layim_user'+i.type+i.id+'" class="layim_chatnow"><span>'+i.name+"</span><em>×</em></li>"),s.chatarea.find(".layim_chatview").removeClass("layim_chatthis"),s.chatarea.append('<ul class="layim_chatview layim_chatthis" id="layim_area'+i.type+i.id+'"></ul>'),e.tabchat(i)),s.chatgroup=e.chatbox.find("#layim_groups"),"group"===i.type&&(s.chatgroup.find("ul").removeClass("layim_groupthis"),s.chatgroup.append('<ul class="layim_groupthis" id="layim_group'+i.type+i.id+'"></ul>'),e.getGroups(i)),s.chatgroup.on("click","ul>li",function(){e.popchatbox($(this))})},e.tabchat=function(i){var t=(e.node,{}),s=i.type+i.id;e.nowchat=i,e.chatbox.find("#layim_user"+s).addClass("layim_chatnow").siblings().removeClass("layim_chatnow"),e.chatbox.find("#layim_area"+s).addClass("layim_chatthis").siblings().removeClass("layim_chatthis"),e.chatbox.find("#layim_group"+s).addClass("layim_groupthis").siblings().removeClass("layim_groupthis"),e.chatbox.find(".layim_face>img").attr("src",i.face),e.chatbox.find(".layim_face, .layim_names").attr("href",i.href),e.chatbox.find(".layim_names").text(i.name),e.chatbox.find(".layim_seechatlog").attr("href",a.chatlogurl+i.id),t.groups=e.chatbox.find(".layim_groups"),"group"===i.type?t.groups.show():t.groups.hide(),$("#layim_write").focus()},e.popchatbox=function(i){var t=e.node,s=i.attr("data-id"),l={id:s,type:i.attr("type"),name:i.find(".xxim_onename").text(),face:i.find(".xxim_oneface").attr("src"),href:"profile.html?user="+s},n=l.type+s;a.chating[n]?e.tabchat(l):(e.popchat(l),a.chatings++),a.chating[n]=l;var c=$("#layim_chatbox");c[0]&&(t.layimMin.hide(),c.parents(".xubox_layer").show())},e.getGroups=function(i){var t=i.type+i.id,s="",l=e.chatbox.find("#layim_group"+t);l.addClass("loading"),a.json(a.api.groups,{},function(a){if(1===a.status){var i=0,e=a.data.length;if(e>0)for(;e>i;i++)s+='<li data-id="'+a.data[i].id+'" type="one"><img src="'+a.data[i].face+'" class="xxim_oneface"><span class="xxim_onename">'+a.data[i].name+"</span></li>";else s='<li class="layim_errors">没有群员</li>'}else s='<li class="layim_errors">'+a.msg+"</li>";l.removeClass("loading"),l.html(s)},function(){l.removeClass("loading"),l.html('<li class="layim_errors">请求异常</li>')})},e.transmit=function(){var i=e.node,t={};i.sendbtn=$("#layim_sendbtn"),i.imwrite=$("#layim_write"),t.send=function(){var s={content:i.imwrite.val(),id:e.nowchat.id,sign_key:"",_:+new Date};if(""===s.content.replace(/\s/g,""))layer.tips("说点啥呗！","#layim_write",2),i.imwrite.focus();else{var l=e.nowchat.type+e.nowchat.id;t.html=function(a,i){return'<li class="'+("me"===i?"layim_chateme":"")+'"><div class="layim_chatuser">'+function(){return"me"===i?'<span class="layim_chattime">'+a.time+'</span><span class="layim_chatname">'+a.name+'</span><img src="'+a.face+'" >':'<img src="'+a.face+'" ><span class="layim_chatname">'+a.name+'</span><span class="layim_chattime">'+a.time+"</span>"}()+'</div><div class="layim_chatsay">'+a.content+'<em class="layim_zero"></em></div></li>'},t.imarea=e.chatbox.find("#layim_area"+l),t.imarea.append(t.html({time:"2014-04-26 0:37",name:a.user.name,face:a.user.face,content:s.content},"me")),i.imwrite.val("").focus(),t.imarea.scrollTop(t.imarea[0].scrollHeight),setTimeout(function(){t.imarea.append(t.html({time:"2014-04-26 0:38",name:e.nowchat.name,face:e.nowchat.face,content:a.autoReplay[Math.random()*a.autoReplay.length|0]})),t.imarea.scrollTop(t.imarea[0].scrollHeight)},500)}},i.sendbtn.on("click",t.send),i.imwrite.keyup(function(a){13===a.keyCode&&t.send()})},e.event=function(){var t=e.node;t.tabs.eq(0).addClass("xxim_tabnow"),t.tabs.on("click",function(){var a=$(this),i=a.index();e.tabs(i)}),t.list.on("click","h5",function(){var a=$(this),i=a.siblings(".xxim_chatlist"),e=a.find("i");e.hasClass("fa-caret-down")?(i.hide(),e.attr("class","fa fa-caret-right")):(i.show(),e.attr("class","fa fa-caret-down"))}),t.online.on("click",function(i){a.stopMP(i),t.setonline.show()}),t.setonline.find("span").on("click",function(i){var e=$(this).index();a.stopMP(i),0===e?(t.onlinetex.html("在线"),t.online.removeClass("xxim_offline")):1===e&&(t.onlinetex.html("隐身"),t.online.addClass("xxim_offline")),t.setonline.hide()}),t.xximon.on("click",e.expend),t.xximHide.on("click",e.expend),t.xximSearch.keyup(function(){var a=$(this).val().replace(/\s/g,"");""!==a?(t.searchMian.show(),t.closeSearch.show(),t.list.eq(3).html('<li class="xxim_errormsg">没有符合条件的结果</li>')):(t.searchMian.hide(),t.closeSearch.hide())}),t.closeSearch.on("click",function(){$(this).hide(),t.searchMian.hide(),t.xximSearch.val("").focus()}),a.chatings=0,t.list.on("click",".xxim_childnode",function(){var a=$(this);e.popchatbox(a)}),t.layimMin.on("click",function(){$(this).hide(),$("#layim_chatbox").parents(".xubox_layer").show()}),i[1].on("click",function(){t.setonline.hide(),$("#layim_sendtype").hide()})},e.getDates=function(i){var t=[a.api.friend,a.api.group,a.api.chatlog],s=e.node,l=s.list.eq(i);l.addClass("loading"),a.json(t[i],{},function(a){if(1===a.status){var e,t=0,s=a.data.length,n="";if(s>1){if(2!==i)for(;s>t;t++){n+='<li data-id="'+a.data[t].id+'" class="xxim_parentnode"><h5><i class="fa fa-caret-right"></i><span class="xxim_parentname">'+a.data[t].name+'</span><em class="xxim_nums">（'+a.data[t].nums+'）</em></h5><ul class="xxim_chatlist">',e=a.data[t].item;for(var c=0;c<e.length;c++)n+='<li data-id="'+e[c].id+'" class="xxim_childnode" type="'+(0===i?"one":"group")+'"><img src="'+e[c].face+'" class="xxim_oneface"><span class="xxim_onename">'+e[c].name+"</span></li>";n+="</ul></li>"}else{for(n+='<li class="xxim_liston"><ul class="xxim_chatlist">';s>t;t++)n+='<li data-id="'+a.data[t].id+'" class="xxim_childnode" type="one"><img src="'+a.data[t].face+'"  class="xxim_oneface"><span  class="xxim_onename">'+a.data[t].name+'</span><em class="xxim_time">'+a.data[t].time+"</em></li>";n+="</ul></li>"}l.html(n)}else l.html('<li class="xxim_errormsg">没有任何数据</li>');l.removeClass("loading")}else l.html('<li class="xxim_errormsg">'+a.msg+"</li>")},function(){l.html('<li class="xxim_errormsg">请求失败</li>'),l.removeClass("loading")})},e.view=function(){var t=e.layimNode=$('<div id="xximmm" class="xxim_main"><div class="xxim_top" id="xxim_top">  <div class="xxim_search"><i class="fa fa-search"></i><input id="xxim_searchkey" /><span id="xxim_closesearch">×</span></div>  <div class="xxim_tabs" id="xxim_tabs"><span class="xxim_tabfriend" title="好友"><i class="fa fa-user"></i></span><span class="xxim_tabgroup" title="群组"><i class="fa fa-users"></i></span><span class="xxim_latechat"  title="最近聊天"><i class="fa fa-clock-o"></i></span></div>  <ul class="xxim_list" style="display:block"></ul>  <ul class="xxim_list"></ul>  <ul class="xxim_list"></ul>  <ul class="xxim_list xxim_searchmain" id="xxim_searchmain"></ul></div><ul class="xxim_bottom" id="xxim_bottom"><li class="xxim_online" id="xxim_online"><i class="xxim_nowstate fa fa-check-circle"></i><span id="xxim_onlinetex">在线</span><div class="xxim_setonline"><span><i class="fa fa-check-circle"></i>在线</span><span class="xxim_setoffline"><i class="fa fa-check-circle"></i>隐身</span></div></li><li class="xxim_mymsg" id="xxim_mymsg" title="我的私信"><i class="fa fa-comment"></i><a href="'+a.msgurl+'" target="_blank"></a></li><li class="xxim_seter" id="xxim_seter" title="设置"><i class="fa fa-gear"></i><div></div></li><li class="xxim_hide" id="xxim_hide"><i class="fa fa-exchange"></i></li><li id="xxim_on" class="xxim_icon xxim_on fa fa-ellipsis-v"></li><div class="layim_min" id="layim_min"></div></ul></div>');i[3].append(t),e.renode(),e.getDates(0),e.event(),e.layinit()}()}(window);