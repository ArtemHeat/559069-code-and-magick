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
  var WIZARD_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];
  var WIZARD_SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  var getFullName = function () {
    return (Math.floor(Math.random() * 2)) ? window.getRandomData(WIZARD_NAMES)
      + ' ' + window.getRandomData(WIZARD_SURNAMES) :
      window.getRandomData(WIZARD_SURNAMES)
      + ' ' + window.getRandomData(WIZARD_NAMES);
  };

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var wizards = [];

  for (var i = 0; i < 4; i++) {
    wizards.push({
      name: getFullName(),
      coatColor: window.getRandomData(WIZARD_COAT_COLORS),
      eyesColor: window.getRandomData(WIZARD_EYE_COLORS)
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


