function Pokemon(name) {
  this.name = name;
  this.isSleepy = true;
  this.isHungry = false;
}

Pokemon.prototype.sayName = function() {
  console.log(this.name + "!");
};

Pokemon.prototype.eat = function() {
  if (this.isHungry) {
    this.isHungry = false;
    this.isSleepy = true;
    console.log(
      this.name + " finished eating, " + this.name + " is sleepy now."
    );
  } else {
    console.log(
      this.name + " isn't hungry. " + this.name + " is sleepy though."
    );
  }
};

Pokemon.prototype.sleep = function() {
  if (this.isSleepy) {
    this.isSleepy = false;
    this.isHungry = true;
    console.log(this.name + " went to sleep...");
    console.log(this.name + " woke up refreshed! And hungry!");
  } else {
    console.log(
      this.name + " isn't sleepy. " + this.name + " is hungry though."
    );
  }
};

var pikachu = new Pokemon("Pikachu");

pikachu.sayName();

pikachu.sleep();
pikachu.eat();
