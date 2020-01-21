'use strict';
(function () {
  var gameBox = document.querySelector('.game__list'); 

  window.fillPlayingField = function () {
    var arrayGame = window.cardSet();
    for (var i = 0; i < QTY_CARDS; i++) {
      var card = document.createElement('li');
      card.classList.add('game__item');      
      var imgCard = document.createElement('img');
      imgCard.classList.add('game__item-image');
      imgCard.classList.add('game__item-card');
      imgCard.setAttribute('src', arrayGame[i]);
      var shirtCard = document.createElement('img');
      shirtCard.classList.add('game__item-image');
      shirtCard.classList.add('game__item-shirt');
      shirtCard.setAttribute('src', 'img/shirt.svg');
      gameBox.appendChild(card);
      card.appendChild(imgCard);
      card.appendChild(shirtCard);
    }
    gameBox.addEventListener('click', window.compareCards);    
  }
})();