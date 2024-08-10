$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true, //Vòng lặp
    margin: 10, //K/c item
    nav: false, //Thanh điều hướng
    autoplay: true, //Tự động chạy
    autoplayTimeout: 2000, //Thời gian chạy
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
