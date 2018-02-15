'use strict';

(function () {
  window.setDialogHandler();

  var setup = document.querySelector('.setup');

  var similarListElement = setup.querySelector('.setup-similar-list');

  window.fillSimilarList(similarListElement);

  setup.querySelector('.setup-similar').classList.remove('hidden');

  var wizard = setup.querySelector('.wizard');
  var wizardCoat = wizard.querySelector('.wizard-coat');
  var wizardEyes = wizard.querySelector('.wizard-eyes');
  var fireball = setup.querySelector('.setup-fireball-wrap');

  window.colorize(wizardCoat, window.constants.wizardCoatColors);
  window.colorize(wizardEyes, window.constants.wizardEyeColors);
  window.colorize(fireball, window.constants.fireballColors);
})();

