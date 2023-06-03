function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

// user.token = "dasdaeqw";

circle.location = { x: 1};



const properyName = "center location";
circle[properyName] = { x: 1};

delete circle.location;
delete circle[location];