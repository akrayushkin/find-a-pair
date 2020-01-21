'use strict';
(function () {
  function getTimeRemaining(endtime) {
    var t = endtime - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    return {
     'total': t,
     'minutes': minutes,
     'seconds': seconds
    };
  }
  window.initializeClock = function(endtime) {
    var clock = document.querySelector('.game__timer');
    var minutesSpan = clock.querySelector('.game__timer-minutes');
    var secondsSpan = clock.querySelector('.game__timer-seconds');
    function updateClock() {
      var t = getTimeRemaining(endtime);
      minutesSpan.textContent = ('0' + t.minutes).slice(-2);
      secondsSpan.textContent = ('0' + t.seconds).slice(-2);
      if (t.total <= 0) {
        clearInterval(timeinterval);
        window.loser();
      }
    }
    updateClock();
    timeinterval = setInterval(updateClock,1000);
  }
})();