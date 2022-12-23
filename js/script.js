// BREND LOGO SECTION START
$(document).ready(function () {
  $(".brend-logo").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // BREND LOGO SECTION END

  // CLIENT SECTION START
  $(".wrapper-slide-text").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    asNavFor: ".slide-wrapper-img",
  });
  $(".slide-wrapper-img").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".wrapper-slide-text",
    autoplay: true,
    pauseOnHover: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // CLIENT SECTION END

  // TEAM SECTION STRAT
  $(".team-member-wrapper").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 2000,
    centerPadding: "0px",
    arrows: true,
    prevArrow: ".left",
    nextArrow: ".right",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// TEAM SECTION END

// HEADER SECTION START
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    $(".menu").addClass("nav-scroll");
  } else {
    $(".menu").removeClass("nav-scroll");
  }

  if ($(window).scrollTop() > 600) {
    $(".top-button").fadeIn();
  } else {
    $(".top-button").fadeOut();
  }
});
// HEADER SECTION END

// BOTTOM TO TOP BUTTON CODE:--
let btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
// BOTTOM TO TOP BUTTON CODE:--

$(window).on("load", function () {
  $(".preloader").delay(300).fadeOut(300);
});
