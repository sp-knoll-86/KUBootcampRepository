// 1.
console.log(true || false);
console.log(true && false);
console.log(0 && "lol");
console.log(false || "IDK MY BFF JILL");

// 2.
console.log("" && [].length);
console.log("" || [].length);
console.log("" || [].length || 0);


// 3.
const likesVeggies = false;
const meal = likesVeggies ? "Vegetable Stir Fry" : "Cheeseburger";
console.log(meal);

// 4.
const feelingWell = false;
const goingOutTonight = feelingWell ? "Of course I'm going!" : "Not tonight, I'm not feeling well.";
console.log(goingOutTonight);
