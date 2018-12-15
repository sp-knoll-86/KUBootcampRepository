log(name); // output: ? Undefined

var tinyize = function(name) {
  log(name); // output: ? Rick

  log(myName); // output: ? Udefined
  var myName = "Tiny " + name + "!";
  log(myName); // output: ? Tiny Rick!

  return myName;
};

var name = tinyize("Rick");
log(name); // output: ? Tiny Rick!
// log(myName); // output: ? ReferenceError: myName is not defined

log(i); // output: ? Undefined
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: ? 5 five times
  }, 100);
}
log(i); // output: ? 5 once

// helper function to log current line number and the passed in string
// e.g. "Line 24: Hello World"
function log(string) {
  var callerLine = new Error().stack.split("\n")[2];
  var lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}
