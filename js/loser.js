'use strict';
(function () {
  window.loser = function () {
    var cards = document.querySelectorAll('.game__item-shirt');
    for (var i = 0; i < cards.length; i++) {
      cards[i].parentElement.style = 'cursor: default;';
      cards[i].remove();
    }
    modal.classList.remove('hidden');
    modal.querySelector('.modal__image--lose').classList.remove('hidden');
    document.addEventListener('keydown', openPopupEscPress);
    modal.addEventListener('click', closePopupPressVoid);
    gameBox.removeEventListener('click', window.compareCards);
  }
})();