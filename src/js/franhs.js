(() => {
    const refs = {
    openModalBtn: document.querySelector('.fr-modal-open-btn'),
    closeModalBtn: document.querySelector('.fr-modal-close-btn'),
        modal: document.querySelector('.backdrop-fr'),
    };
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
    }
    })();