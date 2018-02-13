'use strict';

(function () {

  window.util = {
    ESC_KEYCODE: 27,
    ENTER_KEYCODE: 13,

    WIZARD_NAMES: [
      'Иван',
      'Хуан Себастьян',
      'Мария',
      'Кристоф',
      'Виктор',
      'Юлия',
      'Люпита',
      'Вашингтон'
    ],
    WIZARD_SURNAMES: [
      'да Марья',
      'Верон',
      'Мирабелла',
      'Вальц',
      'Онопко',
      'Топольницкая',
      'Нионго',
      'Ирвинг'
    ],
    WIZARD_COAT_COLORS: [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'
    ],
    WIZARD_EYE_COLORS: [
      'black',
      'red',
      'blue',
      'yellow',
      'green'
    ],

    FIREBALL_COLORS: [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ],

    getRandomData: function (arr) {
      var randonNumber = Math.floor(Math.random() * arr.length);
      return arr[randonNumber];
    },

    getFullName: function () {
      return (Math.floor(Math.random() * 2)) ? window.util.getRandomData(window.util.WIZARD_NAMES)
        + ' ' + window.util.getRandomData(window.util.WIZARD_SURNAMES) :
        window.util.getRandomData(window.util.WIZARD_SURNAMES)
        + ' ' + window.util.getRandomData(window.util.WIZARD_NAMES);
    }
  };
})();


