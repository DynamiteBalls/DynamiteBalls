function onFrame(event) {
  onFrameBall(event);
};

var circ = new Path.Circle({
  center: view.center,
  radius: 30,
  fillColor: 'red'
});

var destination = Point.random() * view.size;

function onFrameBall(event) {
  var vector = destination - circ.position;
  circ.position += vector / 10;
  circ.content = Math.round(vector.isZero);
  if (vector.length < 5) {
    destination = Point.random() * view.size;
  }
};

var shadow = new Path.Circle({
  center: view.center,
  radius: 8,
  fillColor: 'white',
  shadowColor: new Color(250, 250, 250),
  shadowBlur: 20,
  shadowOffset: new Point(5, 5)
});

shadow.opacity = 0.4;
