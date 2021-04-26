/* v1.4 */
/* https://github.com/farinspace/jquery.imgpreload */
if("undefined"!=typeof jQuery){(function(a){a.imgpreload=function(b,c){c=a.extend({},a.fn.imgpreload.defaults,c instanceof Function?{all:c}:c);if("string"==typeof b){b=new Array(b)}var d=new Array;a.each(b,function(e,f){var g=new Image;var h=f;var i=g;if("string"!=typeof f){h=a(f).attr("src");i=f}a(g).bind("load error",function(e){d.push(i);a.data(i,"loaded","error"==e.type?false:true);if(c.each instanceof Function){c.each.call(i)}if(d.length>=b.length&&c.all instanceof Function){c.all.call(d)}a(this).unbind("load error")});g.src=h})};a.fn.imgpreload=function(b){a.imgpreload(this,b);return this};a.fn.imgpreload.defaults={each:null,all:null}})(jQuery)}

/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|android|ipad|playbook|silk|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

function getScrollerWidth() {
    var scr = null;
    var inn = null;
    var wNoScroll = 0;
    var wScroll = 0;
    // Outer scrolling div
    scr = document.createElement('div');
    scr.style.position = 'absolute';
    scr.style.top = '-1000px';
    scr.style.left = '-1000px';
    scr.style.width = '100px';
    scr.style.height = '50px';
    // Start with no scrollbar
    scr.style.overflow = 'hidden';
    // Inner content div
    inn = document.createElement('div');
    inn.style.width = '100%';
    inn.style.height = '200px';
    // Put the inner div in the scrolling div
    scr.appendChild(inn);
    // Append the scrolling div to the doc
    document.body.appendChild(scr);
    // Width of the inner div sans scrollbar
    wNoScroll = inn.offsetWidth;
    // Add the scrollbar
    scr.style.overflow = 'auto';
    // Width of the inner div width scrollbar
    wScroll = inn.offsetWidth;
    // Remove the scrolling div from the doc
    document.body.removeChild(
        document.body.lastChild);
    // Pixel width of the scroller
    return (wNoScroll - wScroll);
}
var scrollerWidth = getScrollerWidth();
var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
var dummyStyle = document.createElement('div').style,
vendor = (function () {
	var vendors = 't,webkitT,MozT,msT,OT'.split(','),
		t,
		i = 0,
		l = vendors.length;

	for ( ; i < l; i++ ) {
		t = vendors[i] + 'ransform';
		if ( t in dummyStyle ) {
			return vendors[i].substr(0, vendors[i].length - 1);
		}
	}
	return false;
})(),
defaultOptions = {
	before : null,
	change : null,
	after : null
},
transform = prefixStyle('transform'),
transitionDuration = prefixStyle('transitionDuration');
function prefixStyle (style) {
	if ( vendor === '' ) return style;

	style = style.charAt(0).toUpperCase() + style.substr(1);
	return vendor + style;
}

jQuery.fn.initPage = function(arg) {
	page = jQuery.extend({
		hn : "",
		sn : ""
	}, arg || {});
	var convertObj = function(obj) {
		$.each(obj, function(key, val) {
			if(val == "") {
				var value = -1;
			} else {
				var value = Number(val);
			}
			eval("obj." + key+"=" + value);
		});
	}
	convertObj(arg);

	var $win = $(window),
		$header = $("#header"),
		$layer = $(".layer", $header),
		$menu_all_btn = $(".menu_all_btn", $header),
		$menu_all = $(".menu_all", $header),
		$btn_close = $(".btn_close", $menu_all),
		$depth1_item = $("li.d1", $menu_all),
		$depth1_link = $("a.d1", $menu_all),
		$gnbLink = $(".gnb > li > a", $header),
		$gnb_b = $(".gnb_b > li > a", $header),
		$gnb_c = $(".gnb_c > li > a", $header),
		isMenuOn = false,
		dur = 150,
		headerW = $header.width(),
		ease = "linear";

	$menu_all_btn.on("click", function() {
		$header.toggleClass("on");
		$layer.toggleClass("m");
		$('.header_dimmed').remove();
		if($header.hasClass("on")) {
			$header.after('<div class="header_dimmed"></div>');
		}
		return false;
	});
	$depth1_link.on("click", function() {
		var $item = $(this).parent().get(0).nodeName == "LI"? $(this).parent():$(this).parent().parent();
		if($item.hasClass("alone") == false) {
			if($item.hasClass("on") == false) {
				$depth1_item.not($item).removeClass("on");
				$item.addClass("on");
			} else {
				$item.removeClass("on");
			}
			return false;
		}
	});
	$(".f_nolink").on("click",function(){
		return false;
	});
//	$gnbLink.on("click",function(){
//		return false;
//	});
	$gnbLink.on("mouseenter", function() {
		var $this = $(this);
		$header.removeClass();
		if($this.parent().parent().hasClass("gnb_b")){
			$header.addClass("gnb_b").addClass("on");
			/*
			var max_bh = 0,
				$dl_b = $("#header.gnb_b .layer .menu_all ul.d1 li.bm");
			$dl_b.each(function() {
				var	bh = $(this).outerHeight();
				if( bh  > max_bh ){
					 max_bh = bh;
				}else{
					max_bh = max_bh;
				}
			});
			$dl_b.css("height", max_bh-40);
			*/
		}else{
			$header.addClass("gnb_c").addClass("on");
			var max_ch = 0,
				$dl_c = $("#header.gnb_c .layer .menu_all ul.d1 li.cm");
			$dl_c.each(function() {
				var	ch = $(this).outerHeight();
				if( ch  > max_ch ){
					 max_ch = ch;
				}else{
					max_ch = max_ch;
				}
			});
			$dl_c.css("height", max_ch-20);
		}
	});
	
	
	$menu_all.find(".has3Sub").on("click",function(){
		if(headerW < 1024){
			return false;
		}
		var $d3 = $(this).next("dl");
		var flag = $(this).hasClass("on");
		var height = $d3.innerHeight();
		var $parent = $(this).parent();
		var step_height,h_step_height;
		var s_height = step_height = $parent.height();
		var e_height = $parent.height() +height;
		var step = 15;
		var $dl_b = $("#header.gnb_b .layer .menu_all ul.d1 li.bm");
		var $this_dl_b = $d3.parents("li.d1.bm>div");
		if($(".has3Sub.on").length > 0){
			var $ht = $(".has3Sub.on").next(".bm3depth");
			var $ht_parent = $ht.parent();
			var ht_s_height = h_step_height = $ht_parent.height();
			var ht_e_height = $ht.prev("a").innerHeight();
			var menu_all_inteval_hide = setInterval(function(){
				h_step_height = h_step_height-step; 
				if(ht_e_height >= h_step_height){
					h_step_height = ht_e_height;
					clearInterval(menu_all_inteval_hide);
				}
				$ht_parent.height(h_step_height);
			},16);
			$(".has3Sub.on").removeClass("on");
		}
		if(!flag) {
			$(this).addClass("on");
		}
		$d3.css({top:$(this).innerHeight()});
		var menu_all_inteval_open = setInterval(function(){
			step_height = step_height+step; 
			if(e_height<=step_height){
				step_height = e_height;
				clearInterval(menu_all_inteval_open);
			}
			if(!flag) {
				$parent.height(step_height);
			}
			var h = $this_dl_b.height();
			var min_height = $parent.parent().height() < 158 ? 158 : $parent.parent().height();
			$dl_b.css("min-height",min_height+33); 
		},16);
		return false;
	});
	
	
	$(window).bind("resize", function() {
		if(headerW < 1024){
			$depth1_item.css({"height":"auto","min-height":"initial"});
			$(".d2>li").css({"height":"auto"});
		}
	});
	$header.on("mouseleave", function() {
		$header.removeClass("on");
		$('.header_dimmed').remove();
	});
	$btn_close.on("click", function() {
		var $this = $header;
		if($this.hasClass("gnb_b")){
			$header.removeClass("on");
		}else{
			$header.removeClass("on");
		}
	});

	$(".gnbLang li a").on("click", function () {
	    var lang = $(this).data('lang');
	    if ($(this).parent().hasClass("on")) {
	        $(".gnbLang").toggleClass("on");
	        return false;
	    } else {
	        $.setLang(lang);
	        return false;
	    }
	});
	$(".lang li a").on("click", function () {
	    var lang = $(this).data('lang');

	    $.setLang(lang);
	    return false;
	});
	function resetPage() {
		isMenuOn = false;
		headerW = $header.width();
	}

	$(window).bind("resize", function() {
		resetPage();
	});

	resetPage();
	if ($(".pageTitle").length) {
		$(".pageTitle").find("> p").append("<span></span>");
	}
	if($("#linemap").length) {
		if(page.hn == 2) {
			var $linemap = $("#linemap"),
				$linemapItem = $(">li", $linemap);
			$linemapItem.each(function() {
				var txt = $(this).find("> a").text().toLowerCase().replace(" ","");
				if(txt == "entertainment"){
					$(this).addClass("entertainment");
				} else if(txt == "newmedia") {
					$(this).addClass("newmedia");
				} else if(txt == "lifestyle") {
					$(this).addClass("lifestyle");
				}
			});

		}
	}
	/*
	if($("#linemap").length) { //linemap
		var $linemap = $("#linemap");
			$sel1 = $linemap.find("> .depth1 > .selection"),
			$sel2 = $linemap.find("> .depth2 > .selection"),
			$list1 = $linemap.find("> .depth1 > .subs"),
			$list2 = $linemap.find("> .depth2 > .subs"),
			$doms1 = $(".gnb > .depth1 > li > span");
		$sel1.append("<span></span>");
		$sel2.append("<span></span>");
		$sel1.bind("click", function() {
			if($(this).data("isOpen") == true) {
				$(this).data("isOpen" , false);
				$list1.removeClass("on");
				$sel1.removeClass("on"); //2014-03-18
			} else {
				$(this).data("isOpen" , true);
				$list1.addClass("on");
				$sel1.addClass("on"); //2014-03-18
			}
			return false;
		});
		$sel2.bind("click", function() {
			if($(this).data("isOpen") == true) {
				$(this).data("isOpen" , false);
				$list2.removeClass("on");
				$sel2.removeClass("on"); //2014-03-18
			} else {
				$(this).data("isOpen" , true);
				$list2.addClass("on");
				$sel2.addClass("on"); //2014-03-18
			}
			return false;
		})
	}
	*/
}

jQuery.fn.slide = function() {
	return this.each(function() {
		var $win = $(window),
			$this = $(this),
			$viewport = $("> .viewport", $this),
			$ul = $("> ul", $viewport),
			$items = $("> li", $ul),
			$prev = $(".controll_prev", $this),
			$next = $(".controll_next", $this),
			len = $items.length,
			index = 0,
			item_w = 0,
			max = 0;
		
		function setPosition(i) {
			var num = item_w * i;
			$viewport.filter(":not(:animated)").animate({
				"scrollLeft" : num
			},{
				queue:false,
				duration:300,
				easing : "linear"
					
			});

			//console.log(index);
			if(index <= 0){
//				$prev.hide();
				$prev.addClass("disable");
			}else{
//				$prev.show();
				$prev.removeClass("disable");
			}
			if(index >= max) {
//				$next.hide();
				$next.addClass("disable");
			} else {
//				$next.show();
				$next.removeClass("disable");
			}
		}
		function initSlide() {
			index = 0;
			if($win.width() + scrollerWidth < 768) {
				if($this.hasClass("ex") == true) {
					item_w = Math.floor($viewport.width()/2);
					$items.each(function() {
						$(this).width(item_w);
					});
					max = len - Math.floor((($viewport.width()) / item_w));
				} else {
					item_w = $viewport.width();
					$items.each(function() {
						$(this).width(item_w);
					});
					max = len - 1;
				}				
			} else {
				$items.each(function() {
					$(this).removeAttr("style");
				});
				item_w = $items.eq(0).width();
				max = len - Math.floor(($viewport.width() / item_w));
			}
			$ul.width(item_w * len);
			setPosition(0);
		}
		function prev() {
			index--;
			if(index == -1) {
				index = 0;
			}
			setPosition(index);
		}
		function next() {
			index++;
			if(index == max + 1) {
				index = max;
			}
			setPosition(index);
		}
		$win.bind("resize", function() {
			initSlide();
		});
		$prev.on("click", function() {
			prev();
			return false;
		});
		$next.on("click", function() {
			next();
			return false;
		});
		initSlide();
	});
}
jQuery(".slideCont").slide();

// slide_banner
jQuery.fn.slidebanner = function() {
	return this.each(function() {
		var $banner = $(".slide_banner ul li .banner div");
		var $banner_btn = $(".slide_banner ul li .banner ul.btn li a");

		$banner_btn.click(function(){
			var $this = $(this);
			var index = $this.parent().index();
			
			$banner.removeClass("on");
			$banner.eq(index).addClass("on");
			$banner_btn.parent().removeClass("on");
			$banner_btn.parent().eq(index).addClass("on");
			
			return false;
		});
	});
}
jQuery(".slide_banner").slidebanner();

//contTab_2depth
jQuery.fn.show4depth = function() {
	return this.each(function() {
		var $contTab = $(".indepth > ul >li > a");

		$contTab.bind("click", function(){
			var $this = $(this);

			$contTab.parent().removeClass("on");
			$this.parent().addClass("on");

			return false;
		});
	});
}
jQuery(".indepth").show4depth();

// pressboard
jQuery.fn.viewboard = function() {
	return this.each(function() {
		var $boardList = $(".pressjs ul li.press");
		var $boardA = $boardList.find("> div > p.title > a");

		$boardA.bind('click', function(){
			var has = $(this).parent().parent().parent().hasClass("on");
			var pressTop = $(this).parent().parent().parent().attr('data-top');
			if(has == true){
				$(this).parent().parent().parent().removeClass("on");
			}else{
				$boardList.removeClass("on");
				$(this).parent().parent().parent().addClass("on");
			}
			$('body, html').stop().animate({
				scrollTop : pressTop
			}, {
				duration : 500,
				queue : false
			});
			return false;
		});

		var $win = $(window);
		$win.ready(function(){
			$boardList.each(function(){
				var top = $(this).offset().top;
				$(this).attr('data-top', top);
			});
		});
	});
}
jQuery(".pressjs").viewboard();

jQuery.fn.alignImgCenter = function() {
	return this.each(function() {
		var $win = $(window),
			$this = $(this);
		function reposition() {
			var w = $this.width(),
				h = $this.height();
			$this.css({
				"margin-left" : -(w/2),
				"margin-top" : -(h/2)
			});
		}
		$win.bind("resize", function() {
			reposition();
		});
		$this.imgpreload(function() {
			reposition();
		});
	});
}
jQuery(".centerImg").alignImgCenter();

jQuery.fn.slidePic = function() {
	return this.each(function() {
		var $this = $(this),
			$btn = $this.find("> .btn > a"),
			$pic = $this.find("> .pic > img");
		$btn.bind("click", function() {
			var num = $(this).index();

			$btn.removeClass("on");
			$(this).addClass("on");
			$pic.removeClass("on");
			$pic.eq(num).addClass("on");

			return false;
		});
	});
}
jQuery(".slidePic").slidePic();



function wtcScript(){//world tour concert 2015.09.17 추가	
	var $cityBtn = $(".pop_wtc_wrap .nav .place .city li a");//2015-10-28 우석 추가

	jQuery('.wtc_wrap .wtc_map #web.bxslide ul').bxSlider({
			slideWidth: 186,
			minSlides: 3,
			maxSlides: 5,
			moveSlides: 1,
			slideMargin: 4
	});
	
	jQuery('.wtc_wrap .wtc_map #mobile.bxslide ul').bxSlider({
			slideWidth: 236,
			maxSlides: 2,
			moveSlides: 1,
			slideMargin: 20
	});
	

	jQuery('.pop_wtc_wrap .mbiBtn').on('click', function () {
	    var $tg_pop = $(this).parents('.pop_wtc_wrap');
	    $tg_pop.find('.nav').animate({
			left:'0%'
		},500,'easeOutExpo');
		return false;
	});
	jQuery('.pop_wtc_wrap .nav .close').on('click', function () {
	    var $tg_pop = $(this).parents('.pop_wtc_wrap');
		$tg_pop.find('.nav').animate({
			left:'-100%'
		},1000,'easeOutExpo');
		return false;
	});

	//2015-10-28 우석 추가
	$cityBtn.on('click', function () {
	    if ($(this).hasClass('city-no-list')) return false;

		$cityBtn.removeClass("on");
		$(this).addClass("on");
		return false;
	});
}

function wtcpop_open(obj){//world tour concert 검색팝업 열기 2015.09.17  추가
    tg = jQuery(obj).attr('href');
    jQuery(tg).show();
    concertFunc.curpage = 1;
	return tg;
}

function wtcpop_close(obj){//world tour concert 검색팝업 닫기 2015.09.17  추가
	//tg = jQuery(obj).attr('href');
    //jQuery(tg).hide();
    
    $('.pop_wtc_wrap').hide();
    
    $('.pop_wtc_wrap').each(function () {
       $(this).find('.city-list').removeClass('on');
       $(this).find('.place_1 .city-list').eq(0).addClass('on');
    });
   
    concertFunc.curpage = 1;

    $('.pop_wtc_wrap').find('.nav-page span em').text(concertFunc.curpage);

	//2015-11-06 조용찬 추가
	$("select[name=nCd1]").val("").attr("selected","selected");
	$("select[name=nCd2]").html("<option value=''>" + getMessage("select_city") + "</option>");
	$("select[name=concertNm]").html("<option value=''>" + getMessage("select_concert") + "</option>");
	$(".pop_wtc_wrap .nav .close").trigger("click");
	
}

var youtubePlayer;

function onYouTubeIframeAPIReady() {
    youtubePlayer = new YT.Player('youtuePlayer', {

    });
}
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var defaultYoutubeParam = "?enablejsapi=1&playerapiid=youtubePlayer&autoplay=1&hd=1&controls=1&rel=0&version=3";
$(document).on("click", ".trackListBox", function (e) {
    //e.preventDefault();

    var videoUrl = $(".mv-play", this).attr('data-video-id');

    youtubePlayer.loadVideoById(videoUrl, 0, 'large');
    youtubePlayer.playVideo();
    $(".videoPopup").addClass("action");
});
$(document).on("click",".btnClose,.bg", function () {
    youtubePlayer.stopVideo();
    $(".videoPopup iframe").attr('src', 'https://www.youtube.com/embed/?enablejsapi=1&playerapiid=youtubePlayer&hd=1&controls=1&rel=0&version=3');
    $(".videoPopup").removeClass("action");
});

$('.textBox').each(function () {
    var content = $(this).children('.textBox > p');
    var content_txt = content.height();
    if ($(".textBox").hasClass("artistProfile")) {
        if (content_txt > 134) {
            $(".textBox,.fold").addClass("action");
        } else {
            $(".fold").hide();
        }
    }
    

    if ($(window).width() > 768) {
        if ($(".textBox").hasClass("right")) {
            if (content_txt > 440) {
                $(".textBox,.fold").addClass("action");
            } else {
                $(".fold").hide();
            }
        }
    } else {
        if ($(".textBox").hasClass("right")) {
            if (content_txt > 330) {
                $(".textBox,.fold").addClass("action");
            } else {
                $(".fold").hide();
            }
        }
    }
});
function foldTxt() {
    if (!$(".fold").hasClass("action")) {
        $(".fold").text("FOLD");
    } else {
        $(".fold").text("VIEW MORE");
    }
};
foldTxt();
$(".textBox").on("click", ".fold", function () {
    $(".textBox, .fold").toggleClass("action");

    foldTxt();
});

$(".slickBn").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});