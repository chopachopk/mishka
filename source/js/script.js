//Управление меню в мобильной версии
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
navMain.classList.remove('main-nav--opened');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// Попап для заказа
var link = document.querySelector('.button--order');
var popup = document.querySelector('.popup');
var overlay = document.querySelector('.overlay');
// Показать попап
link.addEventListener('click', function (evt)  {
    evt.preventDefault();
    popup.classList.add('popup-show');
});
// Закрыть попап по клику на overlay
overlay.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('popup-show');
});
// Закрыть попап по esc
window.addEventListener('keydown', function (evt) {
  if (evt.keyCode == 27) {
    if (popup.classList.contains('popup-show')) {
      evt.preventDefault();
      popup.classList.remove('popup-show');
    }
  }
});
