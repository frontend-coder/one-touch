$(document).ready(() => {
  // вверхнее красиво-вращающееся меню
  // 1 и 2 строка это анимация крестика
  // 3 строка - слайдер вниз меню
  // слайдер вниз меню отвечает за работу мобильного меню к переносу
  $(".toggle-mnu").click(function () {
    $(this).toggleClass("on");
    $(".top-menu").toggleClass('active');
    return false;
  });
  $('body, .top-menu ul li a').click(() => {
    $('.top-menu').removeClass('active');
  });

  /* Page Scroll to id fn call */
  $('.calling-me ul li a[href="#contact"], .top-menu ul li a, #linked').mPageScroll2id({
    layout: 'auto',
    offset: '.top_line',
    autoScrollSpeed: true,
    scrollSpeed: 1000,
    scrollEasing: 'linear',
    highlightByNextTarget: true,
    keepHighlightUntilNext: true,
    highlightSelector: '.top-menu ul li a',
  });

  /* demo functions */
  $("a[rel='next']").click(function (e) {
    e.preventDefault();
    const to = $(this).parent().parent("section").next()
      .attr("id");
    $.mPageScroll2id("scrollTo", to);
  });

  $(() => {
    $("#phone_key").mask("+7(000)000-00-00", { placeholder: "+7(___)___-__-__", clearIfNotMatch: true });
    $("#phone_header").mask("+7(000)000-00-00", { placeholder: "+7(___)___-__-__", clearIfNotMatch: true });
  });

  // код подключения плагина Vertical-Horizontal-Tabs
  // $('#verticalTab').jqTabs();

  // всплывающие окна обратной связи позвонить мне
  $("a[href='#call-back']").magnificPopup({
    mainClass: 'mfp-fade',
    removalDelay: 400,
    tClose: 'Закрыть(Esc)',
    type: 'inline',
  });

  /* чтобы в формах был индивидуальный заголовок */
  $("a[href='#call-back']").click(function () {
    const dataForm = $(this).data("form");
    const dataText = $(this).data("text");
    $(".forms-call h4").text(dataText);
    $(".forms-call [name=admin-data]").val(dataForm);
  });

  // галера с прелодером
  $('#portfolio').magnificPopup({
    mainClass: 'mfp-fade',
    delegate: 'a',
    type: 'image',
    tClose: 'Закрыть(Esc)',
    tLoading: '',
    gallery: {
      enabled: true,
      tPrev: 'Предыдущий (Левая стрелочка на клавиатуре)', // title for left button
      tNext: 'Следующий (Правая стрелочка на клавиатуре)', // title for right button
      tCounter: '<span class="mfp-counter">%curr% из %total%</span>', // markup of counter
      tClose: 'Закрыть(Esc)',

    },
    removalDelay: 300,
    callbacks: {
      beforeChange() {
        this.items[0].src = `${this.items[0].src}?=${Math.random()}`;
      },
      open() {
        $.magnificPopup.instance.next = function () {
          const self = this;
          self.wrap.removeClass('mfp-image-loaded');
          setTimeout(() => { $.magnificPopup.proto.next.call(self); }, 120);
        };
        $.magnificPopup.instance.prev = function () {
          const self = this;
          self.wrap.removeClass('mfp-image-loaded');
          setTimeout(() => { $.magnificPopup.proto.prev.call(self); }, 120);
        };
      },
      imageLoadComplete() {
        const self = this;
        setTimeout(() => { self.wrap.addClass('mfp-image-loaded'); }, 20);
      },
    },
  });

  $('#comand_carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    slideSpeed: 2500,
    //	autoplay             : true,
    autoplayTimeout: 3500,
    dragBeforeAnimFinish: true,
    mouseDrag: true,
    touchDrag: true,
    nav: true,
    responsive: {
      // breakpoint from 0 up
      320: {
        stagePadding: 10,
      },
      // breakpoint from 480 up
      480: {
        stagePadding: 30,
      },
    },

    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    stopOnHover: false,
  });

  // Кнопка наверх с права от контента
  $("body").append('<div class="button-top"><i class="fa fa-angle-double-up" aria-hidden="true"></i></div>');
  // Заставляет кнопку работать как ссылку на самый вверх
  $("body").on("click", ".button-top", () => {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
  // Заставляет прятаться кнопку, если посетитель на хедере
  $(window).scroll(function () {
    if ($(this).scrollTop() > $(this).height()) {
      $(".button-top").addClass("active");
    } else {
      $(".button-top").removeClass("active");
    }
  });

  AOS.init({
    disable: 'phone',
    anchorPlacement: 'top-bottom',
  });

  $("form").submit(function () { // Change
    const th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", // Change
      data: th.serialize(),
    }).done(() => {
      $(".forms-calldecor .success").addClass("active");
      setTimeout(() => {
        // Done Functions
        $(".forms-calldecor .success").removeClass("active");
        th.trigger("reset");
        $.magnificPopup.close();
      }, 3000);
    });
    return false;
  });
  // castom code
});
