$(document).ready(function() {

// вверхнее красиво-вращающееся меню
// 1 и 2 строка это анимация крестика
//3 строка - слайдер вниз меню
//слайдер вниз меню отвечает за работу мобильного меню к переносу
$(".toggle-mnu").click(function() {
$(this).toggleClass("on");
$(".top-menu").slideToggle();
return false;
});
$('body, .top-menu ul li a').click(function () {
$('.hidden-mnu').hide("slow");
});

    /* Page Scroll to id fn call */
    $(".top-menu ul li a, #linked").mPageScroll2id({
			layout: "auto",
			offset: ".top_line",
    	autoScrollSpeed: true,
			scrollSpeed: 1000,
			scrollEasing: "linear",
			highlightByNextTarget: true,
			keepHighlightUntilNext: true,
			highlightSelector: ".top-menu ul li a"
    });

    /* demo functions */
    $("a[rel='next']").click(function (e) {
    	e.preventDefault();
    	var to = $(this).parent().parent("section").next().attr("id");
    	$.mPageScroll2id("scrollTo", to);
    });
	
$(function() {
	$("#phone_key").mask("+7(000)000-00-00", {placeholder: "+7(___)___-__-__",clearIfNotMatch: true});
	$("#phone_header").mask("+7(000)000-00-00", {placeholder: "+7(___)___-__-__",clearIfNotMatch: true});
});

// код подключения плагина Vertical-Horizontal-Tabs
  // $('#verticalTab').jqTabs();

// всплывающие окна обратной связи позвонить мне
$("a[href='#call-back']").magnificPopup ({
	mainClass:'mfp-fade',
	removalDelay:400,
	tClose    : 'Закрыть(Esc)',
	type:'inline'
});


/*чтобы в формах был индивидуальный заголовок */
$("a[href='#call-back']").click(function(){
	var dataForm = $(this).data("form");
	var dataText = $(this).data("text");
	$(".forms-call h4").text(dataText);
	$(".forms-call [name=admin-data]").val(dataForm);
});


// галера с прелодером
$('#portfolio').magnificPopup({
mainClass : 'mfp-fade',
delegate  : 'a',
type      : 'image',
tClose    : 'Закрыть(Esc)',
tLoading  : '',
gallery   : {
enabled   : true,
tPrev     : 'Предыдущий (Левая стрелочка на клавиатуре)', // title for left button
tNext     : 'Следующий (Правая стрелочка на клавиатуре)', // title for right button
tCounter  : '<span class="mfp-counter">%curr% из %total%</span>', // markup of counter
tClose    : 'Закрыть(Esc)'

	},
	removalDelay: 300,
	callbacks: {
		beforeChange: function() {
			this.items[0].src = this.items[0].src + '?=' + Math.random();
		},
		open: function() {
			$.magnificPopup.instance.next = function() {
				var self = this;
				self.wrap.removeClass('mfp-image-loaded');
				setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
			}
			$.magnificPopup.instance.prev = function() {
				var self = this;
				self.wrap.removeClass('mfp-image-loaded');
				setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
			}
		},
		imageLoadComplete: function() {
			var self = this;
			setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 20);
		}
	}
});

$('#comand_carousel').owlCarousel({
	items:1,
		loop                 : true,
		margin               : 30,
		slideSpeed           : 2500,
	//	autoplay             : true,
		autoplayTimeout      : 3500,
		nav                  : false,
		dragBeforeAnimFinish : true,
		mouseDrag            : true,
		touchDrag            : true,
		stagePadding         : 30,
			nav                : true,
			navText            : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		stopOnHover          : false,

});


//Кнопка наверх с права от контента
$("body").append('<div class="button-top"><i class="fa fa-angle-double-up" aria-hidden="true"></i></div>');
// Заставляет кнопку работать как ссылку на самый вверх
$("body").on("click", ".button-top", function() {
	$("html, body").animate({scrollTop: 0}, "slow");
});
// Заставляет прятаться кнопку, если посетитель на хедере
$(window).scroll(function() {
if ($(this).scrollTop() > $(this).height()) {
	$(".button-top").addClass("active");
} else
{  	$(".button-top").removeClass("active");
}
});


	AOS.init({
		// Global settings:
		disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	//	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//		initClassName: 'aos-init', // class applied after initialization
//		animatedClassName: 'aos-animate', // class applied on animation
//		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//		offset: 100, // offset (in px) from the original trigger point
//		delay: 1000, // values from 0 to 3000, with step 50ms
//		duration: 800, // values from 0 to 3000, with step 50ms
//		easing: 'ease', // default easing for AOS animations
//		once: false, // whether animation should happen only once - while scrolling down
//		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
	});
//Ajax push mesege http://api.jquery.com/jquery.ajax/

$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".forms-calldecor .success").addClass("active");
			setTimeout(function() {
				// Done Functions
				$(".forms-calldecor .success").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});
//castom code

});