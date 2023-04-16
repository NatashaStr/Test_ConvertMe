const tabHandler = (evt, tabsContent, tabButtons) => {
  let dataSet = evt.target.dataset.button;

  tabButtons.forEach((el) => el.classList.remove('about__tab-button-current'));
  tabsContent.forEach((el) => el.classList.remove('about__text-wrapper--showed'));
  tabsContent[+dataSet].classList.add('about__text-wrapper--showed');
  evt.target.classList.add('about__tab-button-current');
};

const initTabs = () => {
  const tabWrapper = document.querySelector('.about__tabs-wrapper');
  const tabsContent = document.querySelectorAll('.about__text-wrapper');
  const tabButtons = document.querySelectorAll('.about__tab-button');

  tabWrapper.addEventListener('click', (evt) => tabHandler(evt, tabsContent, tabButtons));
};

export { initTabs };
