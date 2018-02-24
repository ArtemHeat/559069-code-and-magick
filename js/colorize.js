'use strict';

(function () {
  window.colorize = function (element, arr) {

    element.addEventListener('click', function () {
      var newColor = window.getRandomData(arr);
      var nameOfClass;

      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = newColor;
        nameOfClass = element.className;
      } else {
        element.style.fill = newColor;
        nameOfClass = element.getAttribute('class');
      }
      window.classValueToOnElementChangeFunction[nameOfClass](newColor);
    });
  };
})();
