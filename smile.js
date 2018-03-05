window.onload = function() {
  drawSmileyFace();
}

function drawSmileyFace() {
  var canvas = getElementById("smile");
  var context = canvas.getContext("2d");
  
  context.beginPath();
  context.arc(300, 300, 200, 0, degreesToRadians(360), true);
  context.endPath();
}

function degreesToRadians(deg) {
  return (deg * Math.PI)/180;
}