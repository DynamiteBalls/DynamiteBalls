// Appel des fonction Onframe

function onFrame(event) {
  onFrameBall(event);
};

// Fonction destination

function newDestination() {
  return Point.random() * view.size;
};

// Fonctionnalité score

var score = 0;

var text = new PointText(new Point(10, 30));
text.fillColor = 'red';
text.fontFamily = 'Cursive',
  text.fontSize = 30,
  text.content = score;

function points() {
  return score++;
};

// Fonctionnalité chrono

var chrono = 60;

var started = false;

view.onMouseUp = function() {
  started = true;
}

function updateChrono() {
  if (started === true) {
    text2.content = chrono--;
  }
}

function end() {
  if (chrono === 0) {
    return 'GAME OVER Votre score est : ' + score;
  }
}

setInterval(updateChrono, 1000);

var text2 = new PointText(new Point(470, 30));
text2.fillColor = 'red';
text2.fontFamily = 'Cursive';
text2.fontSize = 30;
text2.content = chrono;

// Fonction cercles (création suppression et mouvement)

function createCircle() {
  var c = new Path.Circle({
    center: Point.random() * view.size,
    radius: 40,
    fillColor: fillColor,
    strokeColor: 'black',
  });

  var fillColor = c.fillColor

  c.fillColor = {
    hue: Math.random() * 360,
    saturation: 1,
    brightness: 1
  }

  c.onClick = function(event) {
    this.remove();
    circ = createCircle();
    destination = newDestination();
    text.content = points();
  }
  return c;
}

var circ = createCircle();
var destination = newDestination();

function onFrameBall(event) {
  var vector = destination - circ.position;
  circ.position += vector / 10;
  if (vector.length < 5) {
    destination = newDestination();
  }
};
