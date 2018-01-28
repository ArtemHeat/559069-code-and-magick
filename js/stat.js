'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var MAX_BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getPlayerColor = function (player) {
  return (player === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + Math.random() + ')';
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + (GAP + FONT_GAP) * 2);

  var maxTime = getMaxElement(times);

  ctx.fillStyle = 'rgba(0, 0, 0, 1)';

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(Math.floor(times[i]), CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i,
        CLOUD_Y + (GAP + FONT_GAP) * 3 + MAX_BAR_HEIGHT - (MAX_BAR_HEIGHT * times[i] / maxTime));
  }

  for (i = 0; i < players.length; i++) {
    ctx.fillStyle = getPlayerColor(players[i]);

    ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i,
        CLOUD_Y + GAP * 4 + FONT_GAP * 3 + MAX_BAR_HEIGHT - (MAX_BAR_HEIGHT * times[i] / maxTime),
        BAR_WIDTH, MAX_BAR_HEIGHT * times[i] / maxTime);
  }

  ctx.fillStyle = 'rgba(0, 0, 0, 1)';

  for (i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i,
        CLOUD_Y + (GAP + FONT_GAP) * 4 + MAX_BAR_HEIGHT);
  }
};
