
class Shape {
    move() {
        console.log("moves");
    }
}

class Circle extends Shape {
  move() {
    super.move();
    console.log("circle move");
  }
}

const c = new Circle();