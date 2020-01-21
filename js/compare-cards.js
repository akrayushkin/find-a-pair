'use strict';
(function () {
  var cardOne;
  var cardTwo;
    
  window.compareCards = function (evt) {
    var target = evt.target;
    if (target.classList.contains('game__item-shirt')) {
      if (!timeStart) {
        var endtime = Date.parse(new Date()) + PLAY_TIME;
        window.initializeClock(endtime);
        timeStart = true;
      }
      if (count == '0') {
        cardOne = target;
        target.classList.add('hidden');
        count++;     
      } else if (count == '1') {
        cardTwo = target;
        gameBox.removeEventListener('click', window.compareCards);
        target.classList.add('hidden');
        count++;     
      }
    }
    if (count == '2') {
      if (cardOne.previousSibling.currentSrc == cardTwo.previousSibling.currentSrc) {
        function removeCard() {
          cardOne.previousSibling.classList.add('hidden');
          cardOne.parentElement.classList.add('game__item--empty');
          cardTwo.previousSibling.classList.add('hidden');
          cardTwo.parentElement.classList.add('game__item--empty');
          gameBox.addEventListener('click', window.compareCards);
          countGame++;
          if (countGame == QTY_CARDS/2) {
            clearInterval(timeinterval);
            modal.classList.remove('hidden');
            modal.querySelector('.modal__image--win').classList.remove('hidden'); 
            document.addEventListener('keydown', openPopupEscPress);
            modal.addEventListener('click', closePopupPressVoid);            
            countGame = 0;
          } 
        } 
        setTimeout(removeCard, 700);
      } else {
        function hideCard() {
          cardOne.classList.remove('hidden');
          cardTwo.classList.remove('hidden');
          gameBox.addEventListener('click', window.compareCards);           
        }
        setTimeout(hideCard, 1000);
      }          
      count = 0;
    }
  }
})();