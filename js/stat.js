'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
/**
 * простой отступ
 */
var GAP = 10;
/**
 * ширина колонки
 */
var COLUMN_WIDTH = 40;
/**
 * отступ между колонками
 */
var GAP_COLUMN = 50;
/**
 * начальный отступ для имен
 */
var GAP_X = 40;
/**
 * отступ текста победы
 */
var INDENTED_VICTORY_Y = 40;

/**
 * отступ времени по y
 */
var INDENTED_TXT_TIME_Y = 80;

/**
 * высота гексаграмма
 */
var HISTOGRAM_HEIGHT = 150;

/**
 * отступ с низу для гексаграмма
 */
var BOTTOM_HISTOGRAM = 90;
/**
 * отступ с низу для текста
 */
var BOTTOM_NAMES_HISTOGRAM = CLOUD_HEIGHT - GAP;
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  return true;
};
var getMaxElement = function (arr) {
  /**
   * ищу максимальное число во времени
   */
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {

    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};
var getRandomColor = function () {
  return 'rgba(0, 0, 255,' + Math.random() + ' )';
};
window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  var maxTime = getMaxElement(times);
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('ура вы победили !', CLOUD_X + GAP, INDENTED_VICTORY_Y); // текст
  ctx.fillText('Список результатов:', CLOUD_X + GAP, INDENTED_VICTORY_Y + (GAP * 2)); // текст  2
  for (var i = 0; i < names.length; i++) {
    ctx.fillText(Math.round(times[i]), CLOUD_X + COLUMN_WIDTH + ((COLUMN_WIDTH + GAP_COLUMN) * i), INDENTED_TXT_TIME_Y + (HISTOGRAM_HEIGHT - Math.round((HISTOGRAM_HEIGHT * Math.round(times[i])) / maxTime))); // время
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomColor();
    }
    ctx.fillRect(CLOUD_X + GAP_X + ((COLUMN_WIDTH + GAP_COLUMN) * i), BOTTOM_HISTOGRAM + (HISTOGRAM_HEIGHT - Math.round((HISTOGRAM_HEIGHT * Math.round(times[i])) / maxTime)), COLUMN_WIDTH, Math.round((HISTOGRAM_HEIGHT * Math.round(times[i])) / maxTime)); // полоса
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + GAP_X + ((GAP_X + GAP_COLUMN) * i), BOTTOM_NAMES_HISTOGRAM); // имя
  }
};


