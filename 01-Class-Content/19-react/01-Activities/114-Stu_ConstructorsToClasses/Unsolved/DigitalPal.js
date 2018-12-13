// constructor function which can be used to create "digitalpal" objects
var DigitalPal = function(hungry, sleepy, bored) {
  this.hungry = hungry || false;
  this.sleepy = sleepy || false;
  this.bored = bored || false;
  this.age = 0;
};

// method which feeds the digitalpal when they are hungry and sets them to sleepy
DigitalPal.prototype.feed = function() {
  console.log("Owner: Hey pal, dinner time!");
  if (this.hungry) {
    console.log("Pet: That was yummy!\n");
    this.hungry = false;
    this.sleepy = true;
  }
  else {
    console.log("Pet: No thanks, I'm full.\n");
  }
};

// method which puts the digitalpal to sleep when they are sleepy, increases
// their age by one, and sets them to bored
DigitalPal.prototype.sleep = function() {
  console.log("Owner: Hey pal, time for bed!");
  if (this.sleepy) {
    console.log("Pet: ZZzzZZZzzzZZz~~");
    this.sleepy = false;
    this.bored = true;
    this.increaseAge();
  }
  else {
    console.log("Pet: No way! I'm not tired!\n");
  }
};

// method which allows the user to play with their digitalpal when they are bored and sets them to hungry
DigitalPal.prototype.play = function() {
  this.sleepy = Boolean(Math.round(Math.random()));
  console.log("Owner: Hey pal, wanna play?");
  if (this.bored) {
    console.log("Pet: Yay! Let's play!");
    this.bored = false;
    this.hungry = true;
  }
  else if (this.sleepy) {
    console.log("Pet: I'm too tired to play 😴\n");
  }
  else if (this.hungry) {
    console.log("Pet: I'm too hungry to play 😩 💭 🍕\n");
  }
  else {
    console.log("Pet: Not right now, maybe later?\n");
  }
};

// method which is called in "this.sleep" to increase the age of the digitalpal by one
DigitalPal.prototype.increaseAge = function() {
  this.age++;
  console.log("Pet: Happy Birthday to me! I am " + this.age + " old!\n");
};

// Initialize new DigitalPal
var dog = new DigitalPal(true, false, false);

dog.play();
dog.feed();
dog.play();
dog.sleep();
