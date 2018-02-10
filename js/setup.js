'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

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

var getRandomData = function (arr) {
  var randonNumber = Math.floor(Math.random() * arr.length);
  return arr[randonNumber];
};

var getFullName = function () {
  return (Math.floor(Math.random() * 2)) ? getRandomData(WIZARD_NAMES) + ' ' + getRandomData(WIZARD_SURNAMES) :
    getRandomData(WIZARD_SURNAMES) + ' ' + getRandomData(WIZARD_NAMES);
};

var setup = document.querySelector('.setup');

var similarListElement = setup.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var wizards = [];

for (var i = 0; i < 4; i++) {
  wizards.push({
    name: getFullName(),
    coatColor: getRandomData(WIZARD_COAT_COLORS),
    eyesColor: getRandomData(WIZARD_EYE_COLORS)
  });
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fillSimilarList = function (list) {
  var fragment = document.createDocumentFragment();
  for (i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  return list.appendChild(fragment);
};

fillSimilarList(similarListElement);

setup.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userName = setup.querySelector('.setup-user-name');

// Не получается сделать:
// Если фокус находится на форме ввода имени, то окно закрываться не должно

var onInputFocus = function (evt) {
  evt.stopPropagation();
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
    userName.addEventListener('focus', onInputFocus);
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');

var onCoatClick = function () {
  wizardCoat.style.fill = getRandomData(WIZARD_COAT_COLORS);
};

wizardCoat.addEventListener('click', onCoatClick);

var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');

var onEyesClick = function () {
  wizardEyes.style.fill = getRandomData(WIZARD_EYE_COLORS);
};

wizardEyes.addEventListener('click', onEyesClick);

var fireball = document.querySelector('.setup-fireball-wrap');

var onFireballClick = function () {
  fireball.style.background = getRandomData(FIREBALL_COLORS);
};

fireball.addEventListener('click', onFireballClick);
