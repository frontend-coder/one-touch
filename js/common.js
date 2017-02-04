$(document).ready(function() {
	$("body").niceScroll({
horizrailenabled:false
});

// вверхнее красиво-вращающееся меню
// 1 и 2 строка это анимация крестика
//3 строка - слайдер вниз меню
$(".toggle-mnu").click(function() {
$(this).toggleClass("on");
$(".top-menu").slideToggle();
return false;
});

// одинаковой высоты разные по длине ашки
$(".name class").equalHeights();


// галера с прелодером
$('#portfolio').magnificPopup({
	mainClass: 'mfp-zoom-in',
	delegate: 'a',
	type: 'image',
	tLoading: '',
	gallery:{
		enabled:true,
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
$(".owl-carouselay12").owlCarousel({
		loop:true,
		items: 1,
			autoplay:true,
	    autoplayTimeout:2500,
	    autoplayHoverPause:true,

				responsive : {
 0 : {
    	nav: false,
     margin:130
    },
      767 : {
      	nav: true,
     margin:130
    }
},
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		navContainer: '#customNavay12', 
	});



	$(".top-menu ul li a, #linked").mPageScroll2id({
		 layout:"auto",
		 offset:".top-line",
		scrollEasing: "linear",
		highlightByNextTarget: true,
		keepHighlightUntilNext: true,
		 autoScrollSpeed: true,
		scrollSpeed : 2000
	});


// всплывающие окна обратной связи позвонить мне
$("a[href='#call-back']").magnificPopup ({
	type:'inline',
	removalDelay:300,
	mainClass:'mfp-fade'
});


/*чтобы в формах был индивидуальный заголовок */
$("a[href='#call-back']").click(function(){
	var dataForm = $(this).data("form");
	var dataText = $(this).data("text");
	$(".forms-call h4").text(dataText);
	$(".forms-call [name=admin-data]").val(dataForm);
});

//Аякс отправка форм Документация: http://api.jquery.com/jquery.ajax/

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
//ниже вставлять js код 

});