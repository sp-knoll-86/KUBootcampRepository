function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| is parent's context - properly refers to the person object
  }, 1000);
}

// ---------- OLD Methods (no arrow function)

// compare to old methods, where new functions built their own scope
function Person() {
  var that = this;
  that.age = 0;

  setInterval(function() {
    // have to store |this| to a new variable at the higher scope
    that.age++;
  }, 1000);
}

// or other old method:
function Person() {
  this.age = 0;

  setInterval(function() {
    this.age++;
    // bind this function's 'this' value to current scope's 'this'
  }.bind(this), 1000);
}
