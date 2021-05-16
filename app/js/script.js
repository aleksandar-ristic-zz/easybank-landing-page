// Mobile menu
const showEl = document.querySelectorAll('[data-hide]');
const links = document.querySelector('.links');
const body = document.querySelector('body');

document.querySelector('.header__btn')
.addEventListener('click', function() {

  this.classList.toggle('open');

  if (this.classList.contains('open')) {
    showEl.forEach(el => openAnim(el))

    links.classList.remove('hide-links');
    links.classList.add('show-links');

    body.classList.add('stopper');

  } else {
    showEl.forEach(el => closeAnim(el))

    links.classList.remove('show-links');
    links.classList.add('hide-links');

    body.classList.remove('stopper');
  }
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