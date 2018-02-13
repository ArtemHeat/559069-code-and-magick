'use strict';

(function () {
  var setup = document.querySelector('.setup');

  var similarListElement = setup.querySelector('.setup-similar-list');

  window.fillSimilarList(similarListElement);

  setup.querySelector('.setup-similar').classList.remove('hidden');

  var wizard = setup.querySelector('.wizard');
  var wizardCoat = wizard.querySelector('.wizard-coat');
  var wizardEyes = wizard.querySelector('.wizard-eyes');
  var fireball = setup.querySelector('.setup-fireball-wrap');

  window.colorize(wizardCoat, window.util.WIZARD_COAT_COLORS);
  window.colorize(wizardEyes, window.util.WIZARD_EYE_COLORS);
  window.colorize(fireball, window.util.FIREBALL_COLORS);
})();

