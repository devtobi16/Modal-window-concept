'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
function openModal() {
  console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
/*The 'querySelectorAll' basically selects all elements that have the 
 same class name*/
console.log(btnsOpenModal);
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
/*The 'document.addEventListener is used to handle events that happen on
any part of the page'*/
document.addEventListener('keydown', function (e) {
  if (e.key === `p` && !modal.classList.contains('hidden')) {
    console.log(`Button was pressed`);
    closeModal();
  }
});
