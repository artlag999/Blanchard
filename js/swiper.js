var swiper = new Swiper('.hero-swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
    delay: 2000,
  },
  effect: "fade",
  allowTouchMove: false,
});

var swiper = new Swiper('.gallery__swiper', {
  slidesPerView: 1,
  spaceBetween: 60,
  slidesPerGroup: 1,
  loop: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 60,
      slidesPerGroup: 1,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 38,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 38,
      slidesPerGroup: 2,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
  },
  // навигация
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
  }
);

var swiper = new Swiper('.news', {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: false,
  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
      slidesPerGroup: 1,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 27,
      slidesPerGroup: 3,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },
  // пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // навигация
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
  }
);

var swiper = new Swiper('.partner__content', {
  slidesPerView: 1,
  spaceBetween: 60,
  loop: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 60
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 34
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },
  // навигация
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
  }
);



