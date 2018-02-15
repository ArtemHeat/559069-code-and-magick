'use strict';

(function () {
  var WIZARD_COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var WIZARD_EYE_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  window.setDialogHandler();

  var setup = document.querySelector('.setup');

  var similarListElement = setup.querySelector('.setup-similar-list');

  window.fillSimilarList(similarListElement);

  setup.querySelector('.setup-similar').classList.remove('hidden');

  var wizard = setup.querySelector('.wizard');
  var wizardCoat = wizard.querySelector('.wizard-coat');
  var wizardEyes = wizard.querySelector('.wizard-eyes');
  var fireball = setup.querySelector('.setup-fireball-wrap');

  window.colorize(wizardCoat, WIZARD_COAT_COLORS);
  window.colorize(wizardEyes, WIZARD_EYE_COLORS);
  window.colorize(fireball, FIREBALL_COLORS);
})();

