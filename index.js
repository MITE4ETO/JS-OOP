

function Circle(radius) {
  // Instance members
  this.radius = radius;

  this.move = function () {
    this.draw();
    console.log("move");
  };
}

// Prototype members
Circle.prototype.draw = function () {
  console.log("draw");
};

const c1 = new Circle(1);
const c2 = new Circle(1);

// Modifying the toString method
Circle.prototype.toString = function () {
  return "Circle with radius " + this.radius;
};

console.log(Object.keys(c1));


// Returns all members ( instance + protoype )
for (let key in c1) console.log(key);
