var classmates = ["Christian", "CJ", "Tammer"];

var wrapper = document.getElementById("wrapper");

for (var i = 0; i < classmates.length; i++) {
  var classmate = classmates[i];

  var button = document.createElement("button");
  button.innerHTML = "How many tacos did " + classmate + " eat?";

  button.addEventListener("click", function() {
    var tacoCount = i * 2;

    alert(classmate + " ate " + tacoCount + " tacos.");

    if (tacoCount > 3) {
      alert("That's a lot of tacos, " + classmate + ".\nTaco 'Bout Hungry!");
    }
  });

  wrapper.appendChild(button);
}
