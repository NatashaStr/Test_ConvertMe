const initSwiper = (swiper) => {
  if (swiper) {
    new Swiper('.reviews__swiper', {
      speed: 500,
      spaceBetween: 100,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets'
      },
      loop: true
    });
  }
};

export { initSwiper };
