
jQuery(function ($) {

  /* ===============================================
  # メインビュー スワイパー
  =============================================== */
  var service_swiper = new Swiper(".js-mv__swiper", {
    loop: true,
    speed: 6000,
    spaceBetween: 12,
    slidesPerView: 1.7,
    centeredSlides: true, // アクティブなスライドを中央にする
    allowTouchMove: false, // スワイプ無効
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        spaceBetween: 20,
        slidesPerView: 3.5,
      },
      500: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
    },
  });


  /* ===============================================
  # ヘッダーの高さ分だけコンテンツを下げる
  =============================================== */
  // const height = $(".js-header").height();
  // $("main").css("margin-top", height);






});







