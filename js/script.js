'use strict';
var QTY_CARDS = 30;
var PLAY_TIME = 240000;
var timeStart = false;
var count = 0;
var countGame = 0;
var timeinterval;
var gameBox = document.querySelector('.game__list');
var gameButton = document.querySelector('.game__button');
var gameOptions = document.querySelector('.game__options-list');

gameButton.addEventListener('click', function () {
  window.startNewGame();
});
gameOptions.addEventListener('click', function (evt) {
  var target = evt.target;
  if (target.classList.contains('game__options-radio') || target.classList.contains('game__options-label')) {
    window.startNewGame();    
  }
});

var modal = document.querySelector('.modal');
var modalClose = modal.querySelector('.modal__close-button');

var openPopupEscPress = function (evt) {
  var target = evt.target;
  if (target.classList.contains('modal')) {
    return;
  }
  window.util.isEscEvent(evt, closePopup);
};

var closePopupPressVoid = function (event) {
  var clickedElement = event.target;
  if (clickedElement.closest('.modal__box')) {
    return;
  }
  closePopup();
};

var closePopup = function () {
  modal.classList.add('hidden');
  modal.querySelector('.modal__image--win').classList.add('hidden');
  modal.querySelector('.modal__image--lose').classList.add('hidden');
  document.removeEventListener('keydown', openPopupEscPress);
  modal.removeEventListener('click', closePopupPressVoid);
};

modalClose.addEventListener('click', function () {
  closePopup();
});

modalClose.addEventListener('keydown', function (evt) {
  window.util.isEnterEvent(evt, closePopup);
});