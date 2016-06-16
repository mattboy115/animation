window.onload = function() {
  var myCanvas = document.getElementById('theCanvas');
  var ctx = myCanvas.getContext("2d");

  ctx.strokeStyle = 'blue';
  ctx.fillStyle = 'yellow';
  ctx.lineWidth = 7;

  ctx.strokeRect(25, 25, 100, 125);
  ctx.fillRect(25, 25, 100, 125);

  ctx.fillStyle = 'green';
  ctx.strokeStyle = 'gray';
  ctx.lineWidth = 3;

  ctx.fillRect(200, 25, 175, 200);
  ctx.strokeRect(200, 25, 175, 200);
};
