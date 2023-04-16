const initBurger = () => {
  const menuButton = document.querySelector('.header__button');
  const menu = document.querySelector('.navigation__list');

  const openMenu = () => {
    menu.classList.toggle('navigation__list--opened');
    menuButton.classList.toggle('header__button--close');
  };

  menuButton.addEventListener('click', (evt) => openMenu(evt));

};

export { initBurger };
