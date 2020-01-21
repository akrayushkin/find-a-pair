'use strict';
(function () {
  function check() {
    var radio = document.getElementsByName('radio-qty');
    console.log(radio);
    for (var i = 0; i < radio.length; i++) {
      if (radio[i].type == "radio" && radio[i].checked) {
        return radio[i].value;
      }
    }
  }  
  window.startNewGame = function () {
    clearInterval(timeinterval);
    while (gameBox.firstChild) {
      gameBox.removeChild(gameBox.firstChild);
    }
    QTY_CARDS = parseInt(check());
    if (QTY_CARDS == 24) {
      PLAY_TIME = 180000;
      document.querySelector('.game__timer-minutes').textContent = '03';
      document.querySelector('.game__timer-seconds').textContent = '00';  
    } else if (QTY_CARDS == 30) {
      PLAY_TIME = 240000;
      document.querySelector('.game__timer-minutes').textContent = '04';
      document.querySelector('.game__timer-seconds').textContent = '00'; 
    } else if (QTY_CARDS == 36) {
      PLAY_TIME = 300000;
      document.querySelector('.game__timer-minutes').textContent = '05';
      document.querySelector('.game__timer-seconds').textContent = '00'; 
    } 
    timeStart = false;
    count = 0;
    countGame = 0;
    window.fillPlayingField();
  }
  window.startNewGame();
})();