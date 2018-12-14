const Vehicle = require("./Vehicle");

class Car extends Vehicle {
  constructor(model, topSpeed) {
    super(topSpeed);
    this.model = model;
  }

  logSpeed() {
    console.log(`${this.model} is going ${this.speed}`);
  }
}

const ferarri = new Car("Ferrari", 200);

ferarri.logSpeed();
ferarri.accelerate();
ferarri.accelerate(50);
ferarri.brake();

// function Car(model, topSpeed) {
//   Vehicle.call(this, topSpeed);
//   this.model = model;
// }

// Car.prototype = Object.create(Vehicle.prototype);

// Car.prototype.logSpeed = function() {
//   console.log(this.model + " is going " + this.speed);
// };

// var ferarri = new Car("Ferrari", 200);

// ferarri.logSpeed();
// ferarri.accelerate();
// ferarri.accelerate(50);
// ferarri.brake();
