'use strict';

(function () {
  window.getRandomData = function (arr) {
    var randonNumber = Math.floor(Math.random() * arr.length);
    return arr[randonNumber];
  };
})();
