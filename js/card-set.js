'use strict';
(function () {
  var SUITS = ['clubs', 'diamonds', 'hearts', 'spades'];
  var arrayCards = [];
   
  for (var i = 0; i < SUITS.length; i++) {
    var suitsCard = SUITS[i];  
    for (var j = 2; j <= 14; j++) { //картинки в папках названы цифрами с 2 по 14
      var card = 'img/' + suitsCard + '/' + j + '.svg';
      arrayCards.push(card);    
    };
  }  

  function getArrayRandomSort(array) {
    var arrCopy = array.slice();
    function compareRandom(a, b) {
      return Math.random() - 0.5;
    }
    arrCopy.sort(compareRandom);
    return arrCopy;
  }
  
  window.cardSet = function() {
    var tempArray = getArrayRandomSort(arrayCards).slice(0, QTY_CARDS/2);
    var tempArrayPair = tempArray.concat(tempArray);
    return getArrayRandomSort(tempArrayPair);
  }  
})();