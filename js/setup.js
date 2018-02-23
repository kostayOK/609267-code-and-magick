'use strict';
(function () {
  var setup = document.querySelector('.setup');
  /** setup-similar - настройка похожие */
  document.querySelector('.setup-similar').classList.remove('hidden');
  /** setup-similar-list - настройка аналогичный список */
  /** similarListElementt - подобный элемент списка */
  var similarListElement = document.querySelector('.setup-similar-list');
  /** similar-wizard-template - аналогичный шаблон мастера */
  /** similarWizardTemplate - аналогичный шаблон мастера */
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  /** fragment фрагмент в который сохраняю чтоб браузер не перерисовывал постоянно разметку а одним разом добавил обьекты */
  var fragment = document.createDocumentFragment();
  /** масив имен */
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  /** фамилии */
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  /** случайный цвет мантии на выбор из следующих: */
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  /** случайный цвет глаз персонажа на выбор из следующих:: */
  var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var getRandomElement = function (arr) {
    /** массив с обьектом имя и цвет */
    return arr[Math.floor(Math.random() * arr.length)];
  };
  var createRandomWizard = function (arrName, arrSurname, arrColor, arrEyes) {
    var obj = {
      name: getRandomElement(arrName),
      surName: getRandomElement(arrSurname),
      color: getRandomElement(arrColor),
      eyes: getRandomElement(arrEyes)
    };
    return obj;
  };
  var generateData = function () {
    /** вызавет четыре раза и вернет заполненый массив */
    var arr = [];
    for (var i = 0; i < 4; i++) {
      arr.push(createRandomWizard(WIZARD_NAMES, SURNAMES, COAT_COLORS, EYE_COLORS));
    }
    return arr;
  };
  /** массив с обьектом имя и цвет */
  var wizards = generateData();
  for (var i = 0; i < wizards.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name + '\n' + wizards[i].surName;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].color;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyes;
    fragment.appendChild(wizardElement);

  }
  similarListElement.appendChild(fragment);
  /** обработка событий */
  /** открытия окна */
  var setupOpen = document.querySelector('.setup-open');
  /** закрытие окна */
  var setupClose = setup.querySelector('.setup-close');
  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;
  /** форма */
  var setupWizardForm = document.querySelector('.setup-wizard-form');
  /** кнопка формы */
  var setupWizardFormButton = setupWizardForm.querySelector('.setup-footer button');
  /** отправка формы */
  var setupWizardFormSubmit = function () {
    /** отправка формы */
    setupWizardForm.submit();
  };
  var onPopupEscPress = function (ev) {
    /** удаление обработчика если на прямую устоновить в обработчик
     * openPopup то при закрытеи окна обработчик
     *  document.addEventListener('keydown' function(){}) продолжает работать */
    if (ev.keyCode === ESC_KEYCODE) {
      if (ev.target.tagName === 'INPUT') {
        ev.stopPropagation();
      } else {
        closePopup();
      }
    } else if (ev.keyCode === ENTER_KEYCODE) {
      if (ev.target.tagName === 'BUTTON') {
        setupWizardFormSubmit();
      }
    }
  };
  var openPopup = function () {
    /** hidden - скрытый */
    setup.classList.remove('hidden');
    /** когда показалось окно заводим событие на документе ! событие клавиатуры */
    /** открыл слушателя на ESC */
    document.addEventListener('keydown', onPopupEscPress);
    /** при нажатии на кнопку отправляет форму и закрывает окно */
    setupWizardFormButton.addEventListener('click', setupWizardFormSubmit);
  };
  var closePopup = function () {
    setup.classList.add('hidden');
    /** удалил слушателя */
    document.removeEventListener('keydown', onPopupEscPress);
  };
  /** открытие окна по клику на элимент */
  setupOpen.addEventListener('click', function () {
    openPopup();
  });
  /** если находясь на элименте в фокусе нажать enter то покозать окно */
  setupOpen.addEventListener('keydown', function (ev) {
    if (ev.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });
  /** закрытия окна при клике на элимент */
  setupClose.addEventListener('click', function () {
    closePopup();
  });
  /** закрытия окна в фокусе на элименте при нажатее на enter закрыть */
  setupClose.addEventListener('keydown', function (ev) {
    if (ev.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });
  /** Изменение цвета мантии персонажа по нажатию. */
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
  var setupFireball = setupFireballWrap.querySelector('.setup-fireball');
  /** цвета мантии */
  var coatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'];
  /** цвета глаз */
  var eyeColors = ['black', 'red', 'blue', 'yellow', 'green'];
  /** цвета фаерболов */
  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  /** lastColorIndex - увеличивать lastColorIndex */
  var lastColorIndexCoat = 1;
  wizardCoat.addEventListener('click', function () {
    /** по клику меняю цвет мантии */
    wizardCoat.style.fill = coatColors[lastColorIndexCoat];
    lastColorIndexCoat++;
    if (lastColorIndexCoat >= coatColors.length) {
      lastColorIndexCoat = 0;
    }
  });
  var lastColorIndexEyes = 1;
  wizardEyes.addEventListener('click', function () {
    /** по клику меняю цвет глаз */
    wizardEyes.style.fill = eyeColors[lastColorIndexEyes];
    lastColorIndexEyes++;
    if (lastColorIndexEyes >= eyeColors.length) {
      lastColorIndexEyes = 0;
    }
  });
  var lastColorIndexFireball = 1;
  /** изменение цвета фаербола */
  setupFireballWrap.addEventListener('click', function () {
    setupFireball.style.backgroundColor = fireballColors[lastColorIndexFireball];
    lastColorIndexFireball++;
    if (lastColorIndexFireball >= fireballColors.length) {
      lastColorIndexFireball = 0;
    }
  });
})();
