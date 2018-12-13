var houses = ["Stark", "Lannister", "Targaryen", "Baratheon"];

var getRandomHouse = function(houses) {
  return houses[Math.floor(Math.random() * houses.length)];
};

var getMove = function() {
  // clone the array, pull an attacker and a defender from it
  var housesLeft = houses.slice(0);
  var defender = getRandomHouse(housesLeft);
  housesLeft.splice(housesLeft.indexOf(defender), 1);
  var attacker = getRandomHouse(housesLeft);

  // return an object representing the the attacker and defender state
  return {
    text: "  House " + defender + " infringed on the " + attacker + "s' honor.\n" +
    "  As a result, house " + attacker + " has decided to attack!",
    attacker: attacker,
    defender: defender
  };
};

var getLoser = function(move) {
  if (move.text.indexOf("House Targaryen") === 0) {
    // Fire and Blood.
    return move.defender;
  }

  if (move.text.indexOf("infringed on the Lannisters' honor.") >= 0) {
    // H̶e̶a̶r̶̶M̶e̶̶R̶o̶a̶r̶!̶ A Lannister always pays his debts.
    return move.defender;
  }

  if (move.text.indexOf("infringed on the Starks' honor.") >= 0) {
    // Attacking is risky. Winter is coming.
    return move.attacker;
  }

  return move.defender;
};

var playGame = function() {
  var move = getMove();
  console.log("Move:\n" + move.text);

  var loser = getLoser(move);
  houses.splice(houses.indexOf(loser), 1);

  console.log("\n  Loser: " + loser + "\n  Houses Left: " + houses.join(", ") + "\n  ---\n");
};

while (houses.length > 1) {
  playGame();
}

console.log("Winner: House " + houses[0]);
console.log("Runner up: ...When you play the game of thrones, you win or you die.");
