import { initTabs } from '../js/modules/tabs.js';
import { initBurger } from './modules/burger.js';
import { initModal } from './modules/modal.js';
import { initSwiper } from './modules/swiper.js';

window.addEventListener('DOMContentLoaded', () => {
  const swiper = document.querySelector('.reviews__swiper');
  initBurger();
  initTabs();
  initSwiper(swiper);
  initModal();
});

