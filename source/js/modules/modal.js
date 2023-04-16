const initModal = () => {
  const button = document.querySelector('.navigation__button');
  const modal = document.querySelector('.modal');

  const modalHandler = (evt) => {
    const modalCloseBtn = document.querySelector('.close');
    evt.preventDefault();
    modal.classList.add('is-active');
    modalCloseBtn.addEventListener('click', () => closeModalHandler(evt));
  };

  function closeModalHandler() {
    modal.classList.remove('is-active');
  };

  button.addEventListener('click', (evt) => modalHandler(evt));
};

export { initModal };
