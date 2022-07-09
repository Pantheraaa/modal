'use strict';

const modal = document.querySelector('.modal')
const showModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const hidden = document.querySelector('.hidden');

for(let i = 0; i < showModal.length; i++){
    showModal[i].addEventListener('click', function(){
        // console.log(showModal[i].textContent);
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){
    // console.log(e.key);
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
})