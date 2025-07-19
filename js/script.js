  $(document).ready(function () {
    // Слайдер карточек на главном экране
    const heroDetailsSlider = new Swiper(".js-hero-details-slider", {
      slidesPerView: 1,
      spaceBetween: 12,
      pagination: {
        el: ".js-hero-details-slider-pagination",
        clickable: true,
      },
      breakpoints: {
        991: {
          slidesPerView: 4,
          spaceBetween: 16,
          allowTouchMove: false,
        },
      },
    });

    // Слайдер оборудования
    const productsSlider = new Swiper(".js-products-slider", {
      slidesPerView: "auto",
      spaceBetween: 20,
      breakpoints: {
        991: {
          slidesPerView: 3,
          allowTouchMove: false,
        },
      },
    });

    // Инициализация аккордеона
    $('[data-acc="header"]').on("click", function () {
      const $header = $(this);
      const $item = $header.closest('[data-acc="item"]');
      const $content = $item.find('[data-acc="content"]');
      const isActive = $item.hasClass("active");
      const $allItems = $('[data-acc="item"]');

      // Закрываем все элементы
      $allItems.removeClass("active");
      $allItems.find('[data-acc="content"]').slideUp(300);

      // Если текущий элемент не был активен, открываем его
      if (!isActive) {
        $item.addClass("active");
        $content.slideDown(300);
      }
    });

    // Опционально: открыть первый элемент по умолчанию
    // $('[data-acc="item"]').first().addClass('active')
    //     .find('[data-acc="content"]').slideDown(300);
  });