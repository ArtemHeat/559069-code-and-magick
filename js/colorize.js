'use strict';

(function () {
  window.colorize = function (element, arr) {
    element.addEventListener('click', function () {
      var color = window.getRandomData(arr);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
    });
  };
})();