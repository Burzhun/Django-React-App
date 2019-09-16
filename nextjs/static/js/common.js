window.onload = function(){
  $('.slider__issue').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    speed: 300,
    prevArrow: "<div class='slick-prev slider__left'></div>",
    nextArrow: "<div class='slick-next slider__right'></div>",
    responsive: [

      {
        breakpoint: 765,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  });


  let body = $('body');

  body.on('click', '.popup__close', function () {
    $(this).parents('.popup').fadeOut(300);
  });

  body.on('click', '.add__product', function () {
    $('.popup__buy').fadeIn(300).css('display', 'flex');
  });

  body.on('click', '.media__search ', function () {
    let searchForm = $('.form__search_header');
    if (searchForm.is(':visible')) {
      searchForm.fadeOut(300);
    } else {
      searchForm.fadeIn(300).css('display', 'flex');
    }

  });


  body.on('click', '.media__user', function () {
    $('.popup__account').fadeIn(300).css('display', 'flex');
  });


  $('.profile__form').on('submit', function (e) {
    e.preventDefault();
  });

  body.on('click', '.btn_pen', function () {
    let editingForm = $(this).parents('.profile__form_col').find('.profile__editing');
    $(this).parents('.editing_parag').fadeOut(300, function () {
      $(editingForm).fadeIn(300)
    })
  });

  body.on('click', '.profile__editing button', function () {
    let newValue = $(this).siblings('input').val();
    if (!newValue) return false;
    let paragraph = $(this).parents('.profile__form_col').find('.editing_parag p');
    $(paragraph).text(newValue);
    $(this).parents('.profile__editing').fadeOut(300, function () {
      $('.editing_parag').fadeIn(300)
    })
  });

  $('.anchors__profile a').on('click', function (e) {
    e.preventDefault();
    $('.anchors__profile a').removeClass('anchors__profile_active');
    $(this).addClass('anchors__profile_active');

    let chouse = $(this).attr("href");

    $('.container__profile > div').removeClass('profile__active');

    $(chouse).addClass('profile__active');

  });

  body.on('click', '.item__journal_remove', function () {
    let spanAllPrice = $('.basket__price_all-count');
    let spanBasketCount = $('.basket__count');
    let price = parseInt($(this).siblings('.item__journal_content').find('.item__journal_price').text());
    let countChouse = parseInt(spanBasketCount.text()[0]);
    let allPrice = parseInt(spanAllPrice.text());
    $(this).parents('.item__journal').remove();
    spanBasketCount.text(countChouse - 1);
    spanAllPrice.text(allPrice - price + ' ₽');

  });

  function clearClassActivePopup() {
    $('.popup__login').removeClass('popup__active');

    $('.popup__reset').removeClass('popup__active');
    $('.popup__navigation button').removeClass('show__active');
    $('.popup__registration').removeClass('popup__active')
  }

  body.on('click', '.popup__navigation button', function () {
    clearClassActivePopup();
    $(this).addClass('show__active');
    if ($(this).hasClass('show__login')) {
      $('.popup__login').addClass('popup__active')
    }

    if ($(this).hasClass('show__registration')) {
      $('.popup__registration').addClass('popup__active')
    }

  });


  body.on('click', '.show__reset', function () {
    clearClassActivePopup();

    $('.popup__reset').addClass('popup__active')

  });


  body.on('click', '.media__socials', function () {
    $(this).addClass('media__socials-active');

  });


  body.on('click', '.media__mobile_show', function () {
    $('.popup__mobile_menu').fadeIn(300);

  });

  body.on('click', '.close__popup__mobile', function () {
    $(this).parents('.popup__mobile ').fadeOut(300);

  });


  $(document).mouseup(function (e) {
    var media__socials = $('.media__socials');
    if (!media__socials.is(e.target) &&
      media__socials.has(e.target).length === 0) {
      $('.media__socials').removeClass('media__socials-active');
    }
  });
  $(document).mouseup(function (e) {
    var popup__content = $('.popup__content');
    if (!popup__content.is(e.target) &&
      popup__content.has(e.target).length === 0) {
      $('.popup ').fadeOut(300);
    }
  });

  $(document).mouseup(function (e) {
    var form__search_header = $('.form__search_header');
    if (!form__search_header.is(e.target) &&
      form__search_header.has(e.target).length === 0) {
      $('.form__search_header ').fadeOut(300);
    }
  });


  if (window.outerWidth < 769) {
    $('.new__issues').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      speed: 300,
      prevArrow: "<div class='slick-prev slider__left'></div>",
      nextArrow: "<div class='slick-next slider__right'></div>"
    });

    $('.media__search ').on('click', function () {
      $('.popup__mobile_search').fadeIn(300);
    });

    $('.media__socials  ').on('click', function () {
      $('.popup__mobile_socials').fadeIn(300);
    });


    $('.special__project_img').on('click', function () {
      $(this).siblings('.special__project_details').toggleClass('special__project_details-active')
    });

    body.on('click', '.archive__date', function () {
      $(this).toggleClass('archive__date-active');

    });


  }

  $(document).on('click', '.anchors-main a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });
}