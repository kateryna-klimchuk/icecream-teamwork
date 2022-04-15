(() => {
  const refs = {
    openModalBtn: document.querySelector('.mobile-menu-btn'),
    closeModalBtn: document.querySelector('.modal__btn-close'),
    modal: document.querySelector('.mob-modal-wind'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open")
    refs.modal.classList.toggle('is-hidden');
  }
})();


(() => {
  const refs = {
    openModalBtn: document.querySelector('.header-btn'),
    closeModalBtn: document.querySelector('.modal__btn modal'),
    modal: document.querySelector('.modal-wind'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    if (document.querySelector('.js-speaker-form')) {
      document.querySelector('.js-speaker-form').addEventListener('submit', e => {
        console.log(e);
        e.preventDefault();
 
        new FormData(e.currentTarget).forEach((value, name) => console.log($(name), $(value)));
  
        e.currentTarget.reset();
      });
    }
  }
})();
