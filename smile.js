window.onload = function() {
  drawSmileyFace();
}

function mixItUp() {
  drawSmileyFace();
}

function randomColor() {
  var colors = ['red', 'blue', 'oragne', 'green', 'pink'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function drawSmileyFace() {
  var canvas = document.getElementById("smile");
  var context = canvas.getContext("2d");
  
  // Big yellow head in the center of the canvas 
  context.beginPath();
  context.arc(250, 250, 200, 0, degreesToRadians(360), true);
  context.fillStyle = randomColor();
  context.fill();
  context.stroke();
  
  // Left eye
  context.beginPath();
  context.arc(175, 225, 40, 0, degreesToRadians(360), true);
  context.fillStyle = randomColor();
  context.fill();
  context.stroke();

  // Right eye
  context.beginPath();
  context.arc(326, 225, 40, 0, degreesToRadians(360), true);
  context.fillStyle = randomColor();
  context.fill();
  context.stroke();
  
  // Nose
  context.beginPath();
  context.arc(250, 300, 20, 0, degreesToRadians(360), true);
  context.fillStyle = randomColor();
  context.fill();
  context.stroke();
  
  // Smile
  context.beginPath();
  context.arc(250, 300, 100, degreesToRadians(20), degreesToRadians(160), false);
  context.fillStyle = randomColor();
  context.fill();
  context.stroke();
}

function degreesToRadians(deg) {
  return (deg * Math.PI)/180;
}