function onFrame(event) {
  onFrameBall(event);
  onFrameCarre(event);
};

var carre = new Path.Rectangle({
	point: [75, 75],
	size: [500, 500],
	strokeColor: 'black'
});

function onFrameCarre(event) {
	carre.rotate(2);
}

var circ = new Path.Circle({
      center: view.center,
      radius: 30,
      fillColor: '#2A79FF',
      strokeColor:'black'
});

circ.onClick = function (event) {
this.remove();
}

var destination = Point.random() * view.size;

function onFrameBall(event) {
  var vector = destination - circ.position;
  circ.position += vector / 10;
  circ.content = Math.round(vector.isZero);
  if (vector.length < 5) {
    destination = Point.random() * view.size;
    }
};

view.onFrameCadre = function(event) {
       // Each frame, rotate the path by 3 degrees:
       cadre.rotate(3);
   }
