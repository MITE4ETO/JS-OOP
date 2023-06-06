
function Circle(radius) {
  this.radius = radius;

  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

// multi-level inheritence in the console
