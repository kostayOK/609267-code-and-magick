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
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
/** случайный цвет мантии на выбор из следующих: */
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
/** случайный цвет глаз персонажа на выбор из следующих:: */
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var getNumber = function (num) {
  /** массив с обьектом имя и цвет */
  return Math.floor(Math.random() * num);
};
/** массив с обьектом имя и цвет */
var wizards = [
  {
    name: WIZARD_NAMES[getNumber(WIZARD_NAMES.length)],
    surName: WIZARD_SURNAME[getNumber(WIZARD_SURNAME.length)],
    color: coatColor[getNumber(coatColor.length)],
    eyes: eyesColor[getNumber(eyesColor.length)]
  },
  {
    name: WIZARD_NAMES[getNumber(WIZARD_NAMES.length)],
    surName: WIZARD_SURNAME[getNumber(WIZARD_SURNAME.length)],
    color: coatColor[getNumber(coatColor.length)],
    eyes: eyesColor[getNumber(eyesColor.length)]
  },
  {
    name: WIZARD_NAMES[getNumber(WIZARD_NAMES.length)],
    surName: WIZARD_SURNAME[getNumber(WIZARD_SURNAME.length)],
    color: coatColor[getNumber(coatColor.length)],
    eyes: eyesColor[getNumber(eyesColor.length)]
  },
  {
    name: WIZARD_NAMES[getNumber(WIZARD_NAMES.length)],
    surName: WIZARD_SURNAME[getNumber(WIZARD_SURNAME.length)],
    color: coatColor[getNumber(coatColor.length)],
    eyes: eyesColor[getNumber(eyesColor.length)]
  }
];
for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name + '\n' + wizards[i].surName;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].color;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyes;
  fragment.appendChild(wizardElement);

}
similarListElement.appendChild(fragment);

