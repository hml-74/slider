$(document).ready(function () {
  $(".image-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    arrows: true,
    draggable: false,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        },
      },
      {
        breakpoint: 760,
        settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 1500,
  });
});