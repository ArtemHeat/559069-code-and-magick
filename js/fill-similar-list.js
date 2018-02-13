'use strict';

(function () {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var wizards = [];

  for (var i = 0; i < 4; i++) {
    wizards.push({
      name: window.util.getFullName(),
      coatColor: window.util.getRandomData(window.util.WIZARD_COAT_COLORS),
      eyesColor: window.util.getRandomData(window.util.WIZARD_EYE_COLORS)
    });
  }

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  window.fillSimilarList = function (list) {
    var fragment = document.createDocumentFragment();
    for (i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    return list.appendChild(fragment);
  };
})();


