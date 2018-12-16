const sansa = {
  name: "Sansa Stark",
  parents: ["Eddard Stark", "Catelyn Stark"]
};

const daenerys = {
  name: "Daenerys Targaryen",
  parents: ["Aerys II Targaryen", "Rhaella Targaryen"]
};

// In the past, if we wanted to pull off an object's property we'd have to do something like this:

const sansaName = sansa.name;
const sansaParents = sansa.parents;

console.log(sansaName); // prints `"Sansa Stark"`
console.log(sansaParents); // prints `["Eddard Stark", "Catelyn Stark"]`

// Now with ES6 object destructuring syntax, we can do this:

const { name, parents } = daenerys;

console.log(name); // prints `"Daenerys Targaryen"`
console.log(parents); // prints `["Aerys II Targaryen", "Rhaella Targaryen"]`

// We can also rename our destructured properties like so

const { name: daenerysName } = daenerys;
console.log(daenerysName); // prints `"Daenerys Targaryen"`

// We can also destructure parameters using the same feature. e.g. previously we might have done something like this

const logCharacter = character =>
  console.log(
    character.name +
      "'s parents are: " +
      character.parents[0] +
      " and " +
      character.parents[1] +
      "."
  );

logCharacter(sansa);

// But now we can do this:

const betterLogCharacter = ({ name, parents }) =>
  console.log(
    name + "'s parents are: " + parents[0] + " and " + parents[1] + "."
  );

betterLogCharacter(daenerys);
