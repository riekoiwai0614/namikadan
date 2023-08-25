//modal
$(function(){
	　　　$('.menu-trigger').on("click", function(){
	　　　　if ($('.menu-trigger').hasClass('active')) {
	　　　　　$('.menu-trigger').removeClass('active');
	　　　　} else {
	　　　　　$('.menu-trigger').addClass('active');
	　　　　}
	　　　});
	　　});		


$(function(){
　　　$('.menu-trigger').on("click", function(){
　　　　if ($('.gnav').hasClass('active')) {
　　　　　$('.gnav').removeClass('active');
　　　　} else {
　　　　　$('.gnav').addClass('active');
　　　　}
　　　});
　　});
		
$(function(){
　　　$('.menu-trigger').on("click", function(){
　　　　if ($('body').hasClass('open')) {
　　　　　$('body').removeClass('open');
　　　　} else {
　　　　　$('body').addClass('open');
　　　　}
　　　});
　　});



$('.slider').slick({
    fade:true,//切り替えをフェードで行う。初期値はfalse。
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
    speed:1000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: true,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
        pauseOnFocus: false,//フォーカスで一時停止を無効
        pauseOnHover: false,//マウスホバーで一時停止を無効
        pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
    $('.slider').slick('slickPlay');
});



//ハンバーガーリンク--------------

$('#overlay a[href]').on('click', function(event) {
    $('#overlay-button').trigger('click');
});


//LODINGここから--------------

// window.onload = function() {
// 	const spinner = document.getElementById('loading');
// 	spinner.classList.add('loaded');
//   }



//TOPアニメーションここから--------------


//MV
$(function() {
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({ 
	triggerElement: ".cover-item",  // Sceneの指定 })
})
scene.on("enter", function(event) {
	$(".cover-item .left,.cover-item .right").addClass("active");
})
.addTo(controller);
});

$(function() {
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({ 
triggerElement: ".data-item.ratio01",  // Sceneの指定 })
})
scene.on("enter", function(event) {
$(".data-item.ratio01 li").addClass("active");
})
.addTo(controller);
});

//1
$(function() {
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({ 
triggerElement: ".content01",  // Sceneの指定 })
})
scene.on("enter", function(event) {
	$(".content01 dt,.content01 dd").addClass("active");
  })
  .addTo(controller);
});

//2
$(function() {
	var controller = new ScrollMagic.Controller();
	
	var scene = new ScrollMagic.Scene({ 
		triggerElement: ".content02",  // Sceneの指定 })
	})
	scene.on("enter", function(event) {
		$(".content02 dt,.content02 dd").addClass("active");
	})
	.addTo(controller);
	});

//3	
$(function() {
	var controller = new ScrollMagic.Controller();
	
	var scene = new ScrollMagic.Scene({ 
		triggerElement: ".content04",  // Sceneの指定 })
	})
	scene.on("enter", function(event) {
		$(".content04 li").addClass("active");
	})
	.addTo(controller);
	});


//4
$(function() {
	var controller = new ScrollMagic.Controller();
	
	var scene = new ScrollMagic.Scene({ 
		triggerElement: ".content05",  // Sceneの指定 })
	})
	scene.on("enter", function(event) {
		$(".content05 div").addClass("active");
	})
	.addTo(controller);
	});



//TOPアニメーションここまで--------------



//PAGETOP
$(document).ready(function(){
    $("#pageTop").hide();
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100) {
            $("#pageTop").fadeIn("fast");
        } else {
            $("#pageTop").fadeOut("fast");
        }
        scrollHeight = $(document).height();
        scrollPosition = $(window).height() + $(window).scrollTop();
        footHeight = $("footer").innerHeight(); //footerの高さ（＝止めたい位置）
        if ( scrollHeight - scrollPosition  <= footHeight ) {
            $("#pageTop").css({
                "position":"absolute", 
                "bottom": footHeight + 20
            });
        } else { 
            $("#pageTop").css({
                "position":"fixed",
                "bottom": "120px" 
            });
        }
    });
    $('#pageTop').click(function () {
        $('body,html').animate({
        scrollTop: 0
        }, 400);
        return false;
    });
});

