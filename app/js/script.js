// Mobile menu
const showEl = document.querySelectorAll('[data-hide]');

document.querySelector('.header__btn')
.addEventListener('click', function() {

  this.classList.toggle('open');
  
  this.classList.contains('open') ? 
  showEl.forEach(el => openAnim(el)) :
  showEl.forEach(el => closeAnim(el))
});

function openAnim(el) {
  el.classList.remove('fade-out', 'hidden');
  el.classList.add('open', 'fade-in');
}

function closeAnim(el) {
  el.classList.replace('fade-in', 'fade-out');

  setTimeout(() => {
    el.classList.replace('open', 'hidden');
  }, 500);   
}