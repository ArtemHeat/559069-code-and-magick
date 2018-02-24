'use strict';

(function () {
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
      colorCoat: window.getRandomData(window.constants.wizardCoatColors),
      colorEyes: window.getRandomData(window.constants.wizardEyeColors)
    });
  }

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var similarElementList = document.querySelector('.setup-similar-list');

  window.fillSimilarList = function (arr) {
    similarElementList.innerHTML = '';
    var fragment = document.createDocumentFragment();
    for (i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(arr[i]));
    }
    return similarElementList.appendChild(fragment);
  };
})();


