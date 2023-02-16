'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')

const openModal = function() {
    modal.classList.remove('hidden'); // can pass in multiple with commas do not use the "." dot this is only for the selector
    overlay.classList.remove('hidden');
};

const closeModal  = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener
        ('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {

    if (e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});