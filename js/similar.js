'use strict';
(function () {
  var coatColor;
  var eyesColor;
  var fireballColor;
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    if (wizard.colorFireball === fireballColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.fillSimilarList(wizards.slice().
        sort(function (left, right) {
          var rankDiff = getRank(right) - getRank(left);
          if (rankDiff === 0) {
            rankDiff = namesComparator(left.name, right.name);
          }
          return rankDiff;
        }));
  };

  window.classValueToOnElementChangeFunction = {
    'wizard-coat': function (color) {
      coatColor = color;
      window.debounce(updateWizards);
    },
    'wizard-eyes': function (color) {
      eyesColor = color;
      window.debounce(updateWizards);
    },
    'setup-fireball-wrap': function (color) {
      fireballColor = color;
      window.debounce(updateWizards);
    }
  };

  var successLoadHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  var errorLoadHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto;' +
      'text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.querySelector('.setup-similar-list').
        insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successLoadHandler, errorLoadHandler);
})();
