'use strict';
var userDialog = document.querySelector('.setup');
/** hidden - скрытый */
userDialog.classList.remove('hidden');
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
  return Math.floor(Math.random() * arr.length);
};
var createRandomWizard = function (arrName, arrSurname, arrColor, arrEyes) {
  var obj = {
    name: arrName[getRandomElement(arrName)],
    surName: arrSurname[getRandomElement(arrSurname)],
    color: arrColor[getRandomElement(arrColor)],
    eyes: arrEyes[getRandomElement(arrEyes)]
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

