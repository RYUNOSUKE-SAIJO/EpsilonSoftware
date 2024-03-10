
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
  # ドロワーメニュー
  =============================================== */

  jQuery(function ($) {
    // ハンバーガーメニュー
    $(function () {
      $(".js-hamburger").on("click", function () {
        $(this).toggleClass("is-open");
        if ($(this).hasClass("is-open")) {
          openDrawer();
        } else {
          closeDrawer();
        }
      });

      // backgroundまたはページ内リンクをクリックで閉じる
      $(".js-drawer a[href]").on("click", function () {
        closeDrawer();
      });

      // resizeイベント
      $(window).on("resize", function () {
        if (window.matchMedia("(min-width: 768px)").matches) {
          closeDrawer();
        }
      });
    });

    function openDrawer() {
      $(".js-drawer").fadeIn();
      $(".js-hamburger").addClass("is-open");
    }

    function closeDrawer() {
      $(".js-drawer").fadeOut();
      $(".js-hamburger").removeClass("is-open");
    }
  });






});







